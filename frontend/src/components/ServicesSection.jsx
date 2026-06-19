import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  LifeBuoy,
  MonitorSmartphone,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored software applications built around your business processes and objectives.",
    Icon: Code2,
  },
  {
    title: "Web Design & Development",
    description: "Fast, responsive, and SEO-friendly websites designed to convert visitors into customers.",
    Icon: MonitorSmartphone,
  },
  {
    title: "E-Commerce Solutions",
    description: "Scalable online stores that deliver exceptional customer experiences and increase sales.",
    Icon: ShoppingCart,
  },
  {
    title: "AI & Automation",
    description: "Reduce repetitive work and improve productivity with intelligent automation solutions.",
    Icon: BrainCircuit,
  },
  {
    title: "Software Testing & QA",
    description: "Ensure reliability, performance, and security with comprehensive testing services.",
    Icon: ShieldCheck,
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing monitoring, updates, and technical support to keep your systems running smoothly.",
    Icon: LifeBuoy,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionHeader() {
  return (
    <motion.div
      className="mx-auto max-w-[760px] text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <motion.span
        className="inline-flex items-center justify-center rounded-full border border-[#006EDC]/15 bg-white/75 px-4 py-2 text-[13px] font-extrabold uppercase text-[#006EDC] shadow-[0_12px_34px_rgba(6,18,47,0.06)] backdrop-blur-xl"
        variants={fadeUpVariants}
      >
        OUR SERVICES
      </motion.span>
      <motion.h2
        className="mt-5 text-[34px] font-[850] leading-[1.08] text-[#06122F] sm:text-[42px] lg:text-[48px]"
        variants={fadeUpVariants}
      >
        Solutions Designed for Growth
      </motion.h2>
      <motion.p
        className="mx-auto mt-5 max-w-[620px] text-[16px] leading-[1.72] text-[#4B5874] sm:text-[17px]"
        variants={fadeUpVariants}
      >
        Helping businesses build, automate and scale with modern technology solutions tailored to
        their goals.
      </motion.p>
    </motion.div>
  );
}

function ServiceCard({ service }) {
  const { title, description, Icon } = service;

  return (
    <motion.article
      className="group relative min-h-[286px] rounded-lg bg-gradient-to-br from-[#00AEEF]/25 via-[#6D1BC9]/16 to-[#D100B8]/20 p-px shadow-[0_24px_64px_rgba(6,18,47,0.10)] transition-all duration-300 hover:-translate-y-2 hover:from-[#00AEEF]/55 hover:via-[#6D1BC9]/35 hover:to-[#D100B8]/45 hover:shadow-[0_30px_80px_rgba(6,18,47,0.16)]"
      variants={fadeUpVariants}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[7px] bg-white/85 p-6 backdrop-blur-xl sm:p-7">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 110, 220, 0.055), rgba(109, 27, 201, 0.03) 48%, rgba(209, 0, 184, 0.045))",
          }}
        />
        <div className="pointer-events-none absolute right-0 top-0 h-24 w-32 -translate-y-10 translate-x-8 rotate-12 rounded-lg bg-gradient-to-br from-[#00AEEF]/16 to-[#D100B8]/12 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex items-start justify-between gap-5">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-[#006EDC]/12 via-[#6D1BC9]/10 to-[#D100B8]/12 text-[#006EDC] shadow-[inset_0_0_0_1px_rgba(0,110,220,0.10)] transition-transform duration-300 group-hover:scale-105">
            <Icon aria-hidden="true" size={30} strokeWidth={1.8} />
          </span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white/75 text-[#6D1BC9] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#00AEEF]/45 group-hover:text-[#006EDC]">
            <ArrowUpRight aria-hidden="true" size={18} />
          </span>
        </div>

        <div className="relative mt-9">
          <h3 className="text-[21px] font-extrabold leading-[1.18] text-[#06122F]">{title}</h3>
          <p className="mt-4 text-[15px] leading-[1.72] text-[#61708D]">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

function ServicesGrid() {
  return (
    <motion.div
      className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={containerVariants}
    >
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </motion.div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6, 18, 47, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 18, 47, 0.045) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(180deg, transparent 0%, black 22%, black 78%, transparent 100%)",
          }}
        />
        <div className="absolute -right-24 top-16 h-56 w-[34rem] rotate-[-12deg] rounded-lg bg-gradient-to-br from-[#00AEEF]/18 via-[#6D1BC9]/14 to-[#D100B8]/14 blur-2xl" />
        <div className="absolute -left-28 bottom-10 h-48 w-[30rem] rotate-[14deg] rounded-lg bg-gradient-to-br from-[#006EDC]/12 via-[#6D1BC9]/10 to-[#D100B8]/10 blur-2xl" />
      </div>

      <div className="site-container relative">
        <SectionHeader />
        <ServicesGrid />
      </div>
    </section>
  );
}

export default ServicesSection;
