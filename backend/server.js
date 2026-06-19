import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || "service_1uardv6";
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || "service_1uardv6";
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || "iRFje6sq-hLjhT0aB";
const EMAILJS_SEND_URL = "https://api.emailjs.com/api/v1.0/email/send";
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";
const SMTP_PORT = Number.parseInt(process.env.EMAIL_PORT || "465", 10);
const hasSmtpConfig =
  process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS && SMTP_PORT;

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createSmtpTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ success: false, error: "Please fill out all fields." });
  }

  try {
    if (hasSmtpConfig) {
      const transporter = createSmtpTransporter();
      const safeName = escapeHtml(name.trim());
      const safeEmail = escapeHtml(email.trim());
      const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

      await transporter.sendMail({
        from: `"ITLEGENDZ Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email.trim(),
        subject: `New website enquiry from ${name.trim()}`,
        text: [
          "New contact form message",
          "",
          `Name: ${name.trim()}`,
          `Email: ${email.trim()}`,
          "",
          "Message:",
          message.trim(),
        ].join("\n"),
        html: `
          <h2>New contact form message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      });

      return res.status(200).json({ success: true, message: "Email sent successfully" });
    }

    const emailResponse = await fetch(EMAILJS_SEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "http://localhost",
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          from_name: name.trim(),
          from_email: email.trim(),
          reply_to: email.trim(),
          to_email: "info@itlegendz.co.uk",
        },
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      const templateError = errorText.toLowerCase().includes("template id not found");

      console.error("EmailJS error:", errorText);
      return res.status(502).json({
        success: false,
        error: templateError
          ? "EmailJS template ID not found. Please update EMAILJS_TEMPLATE_ID with the Template ID from your EmailJS dashboard."
          : "Email service rejected the message. Please check the EmailJS service, template, and public key.",
      });
    }

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    const errorMessage = error?.message || "Email sending failed";
    const isZohoOutgoingBlocked = errorMessage.includes("554 5.1.8");

    return res.status(500).json({
      success: false,
      error: isZohoOutgoingBlocked
        ? "Zoho blocked outgoing email for this mailbox. Please unblock SMTP/outgoing mail in Zoho Mail Admin or use a new Zoho app password."
        : errorMessage,
    });
  }
});

app.listen(PORT, HOST, () => console.log(`Server running at http://${HOST}:${PORT}`));
