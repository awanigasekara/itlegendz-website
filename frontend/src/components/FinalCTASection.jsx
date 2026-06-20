import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    label: "Phone Number",
    value: "+44 7432 742427",
    href: "tel:+447432742427",
    Icon: Phone,
  },
  {
    label: "Email Address",
    value: "info@itlegendz.co.uk",
    href: "mailto:info@itlegendz.co.uk",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "itlegendz-ltd",
    href: "https://www.linkedin.com/company/itlegendz-ltd",
    Icon: Linkedin,
  },
  {
    label: "Office Location",
    value: "Bainton Grove, Hull, England",
    href: null,
    Icon: MapPin,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const formVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

function ContactCard({ item }) {
  const { label, value, href, Icon } = item;
  const content = (
    <>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/14 text-[#00D4FF] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] transition-transform duration-300 group-hover:scale-105">
        <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[12px] font-extrabold uppercase text-[#9BEAFF]">{label}</span>
        <span className="mt-[4px] block max-w-full break-words text-[14px] font-extrabold leading-snug text-[#F8FAFC] [overflow-wrap:anywhere]">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        className="group flex min-h-[82px] items-center gap-3 rounded-lg border border-white/18 bg-white/[0.12] p-[16px] no-underline shadow-[0_18px_46px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/55 hover:bg-white/[0.16] hover:text-white"
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        variants={fadeUpVariants}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className="group flex min-h-[82px] items-center gap-3 rounded-lg border border-white/18 bg-white/[0.12] p-[16px] shadow-[0_18px_46px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/55 hover:bg-white/[0.16]"
      variants={fadeUpVariants}
    >
      {content}
    </motion.div>
  );
}

function FinalCTASection({ onSubmit }) {
  return (
    <section id="contact_form" className="relative overflow-hidden bg-[#06122F] py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.26]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248, 250, 252, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(248, 250, 252, 0.08) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        />
        <div className="absolute -right-28 top-20 h-52 w-[38rem] rotate-[-10deg] rounded-lg bg-gradient-to-r from-[#00AEEF]/18 via-[#6D1BC9]/16 to-[#D100B8]/15 blur-2xl" />
        <div className="absolute -left-32 bottom-16 h-44 w-[34rem] rotate-[12deg] rounded-lg bg-gradient-to-r from-[#006EDC]/16 via-[#6D1BC9]/13 to-[#D100B8]/12 blur-2xl" />
        <div className="absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00AEEF]/48 to-transparent" />
      </div>

      <div className="site-container relative grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
        <motion.div
          className="max-w-[610px] text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.42 }}
          variants={containerVariants}
        >
          <motion.span
            className="inline-flex items-center gap-3 text-[13px] font-extrabold uppercase text-[#00AEEF]"
            variants={fadeUpVariants}
          >
            <span className="h-px w-9 rounded-full bg-gradient-to-r from-[#00AEEF] via-[#6D1BC9] to-[#D100B8]" />
            CONTACT
          </motion.span>
          <motion.h2
            className="m-0 mt-[20px] text-[34px] font-[850] leading-[1.08] text-white sm:text-[42px] lg:text-[52px]"
            variants={fadeUpVariants}
          >
            Let's Build Something Great Together
          </motion.h2>
          <motion.p
            className="mx-auto mb-0 mt-[20px] max-w-[610px] text-[16px] leading-[1.75] text-white/72 sm:text-[17px] lg:mx-0"
            variants={fadeUpVariants}
          >
            Whether you need a new website, custom software, AI automation, or ongoing technical
            support, ITLegendz is ready to help.
          </motion.p>

          <motion.div
            className="mt-[32px] flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            variants={fadeUpVariants}
          >
            <a
              className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#006EDC] via-[#6D1BC9] to-[#D100B8] px-6 text-[15px] font-extrabold text-white no-underline shadow-[0_18px_42px_rgba(109,27,201,0.34)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:text-white hover:shadow-[0_24px_62px_rgba(109,27,201,0.46)] sm:w-auto"
              href="#contact_form"
            >
              Schedule a Free Consultation
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/18 bg-white/[0.075] px-6 text-[15px] font-extrabold text-white no-underline backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/48 hover:bg-white/[0.11] hover:text-white sm:w-auto"
              href="mailto:info@itlegendz.co.uk"
            >
              Contact Our Team
            </a>
          </motion.div>

          <motion.div
            className="mt-[34px] grid gap-3 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            variants={containerVariants}
          >
            {contactItems.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative rounded-lg bg-gradient-to-br from-[#00AEEF]/30 via-[#6D1BC9]/22 to-[#D100B8]/26 p-px shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={formVariants}
        >
          <div className="relative overflow-hidden rounded-[7px] border border-white/16 bg-white/[0.08] p-[22px] backdrop-blur-2xl sm:p-[28px] lg:p-[34px]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-52 rotate-12 rounded-lg bg-gradient-to-br from-[#00AEEF]/20 to-[#D100B8]/16 blur-2xl" />
            <div className="relative">
              <span className="text-[13px] font-extrabold uppercase text-[#00AEEF]">Send a message</span>
              <h3 className="m-0 mt-[10px] text-[26px] font-extrabold leading-tight text-white">
                Tell us what you want to build
              </h3>

              <form className="mt-[24px] grid gap-[14px]" onSubmit={onSubmit}>
                <label className="grid gap-[7px] text-left">
                  <span className="text-[13px] font-bold text-white/72">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="min-h-[52px] rounded-lg border border-[#E5E7EB] bg-white/[0.95] px-[16px] text-[15px] font-medium text-[#0B1633] outline-none transition-all duration-200 placeholder:text-[#64708A] focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/18"
                    required
                  />
                </label>

                <label className="grid gap-[7px] text-left">
                  <span className="text-[13px] font-bold text-white/72">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="min-h-[52px] rounded-lg border border-[#E5E7EB] bg-white/[0.95] px-[16px] text-[15px] font-medium text-[#0B1633] outline-none transition-all duration-200 placeholder:text-[#64708A] focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/18"
                    required
                  />
                </label>

                <label className="grid gap-[7px] text-left">
                  <span className="text-[13px] font-bold text-white/72">Message</span>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project"
                    className="min-h-[148px] resize-y rounded-lg border border-[#E5E7EB] bg-white/[0.95] px-[16px] py-[14px] text-[15px] font-medium text-[#0B1633] outline-none transition-all duration-200 placeholder:text-[#64708A] focus:border-[#00AEEF] focus:ring-4 focus:ring-[#00AEEF]/18"
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="mt-[6px] inline-flex min-h-[52px] items-center justify-center rounded-full border-0 px-6 text-[15px] font-extrabold shadow-[0_18px_42px_rgba(109,27,201,0.34)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_62px_rgba(109,27,201,0.46)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #006EDC 0%, #6D1BC9 55%, #D100B8 100%)",
                    color: "#FFFFFF",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTASection;
