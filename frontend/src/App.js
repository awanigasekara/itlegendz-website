import React from "react";
import "./App.css";

import AboutSection from "./components/AboutSection";
import AIHighlightSection from "./components/AIHighlightSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IndustriesSection from "./components/IndustriesSection";
import Navbar from "./components/Navbar";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import TopHeader from "./components/TopHeader";
import WhyChooseSection from "./components/WhyChooseSection";

function App() {
  const configuredBackendUrl = process.env.REACT_APP_BACKEND_URL || "/send-email";
  const BACKEND_URL = configuredBackendUrl.replace(/^REACT_APP_BACKEND_URL=/, "");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const responseText = await response.text();
      let data = {};

      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch {
        data = { error: responseText || "The email service returned an invalid response." };
      }

      if (response.ok && data.success) {
        alert("Message sent successfully.");
        event.target.reset();
      } else {
        alert("Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      alert("Error sending message: " + error.message);
    }
  };

  return (
    <div className="app-shell">
      <TopHeader />
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <IndustriesSection />
        <ProcessSection />
        <AIHighlightSection />
        <FinalCTASection onSubmit={handleSubmit} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
