import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Rocket,
  ShoppingBag,
  Truck,
} from "lucide-react";

const industries = [
  {
    name: "Professional Services",
    description: "Smarter systems for client-focused businesses.",
    Icon: BriefcaseBusiness,
  },
  {
    name: "Retail & E-Commerce",
    description: "Digital platforms that improve online selling.",
    Icon: ShoppingBag,
  },
  {
    name: "Healthcare",
    description: "Reliable tools for better service delivery.",
    Icon: HeartPulse,
  },
  {
    name: "Hospitality",
    description: "Technology that supports bookings and customer experience.",
    Icon: Hotel,
  },
  {
    name: "Logistics",
    description: "Systems that improve tracking and operations.",
    Icon: Truck,
  },
  {
    name: "Education",
    description: "Digital solutions for learning and administration.",
    Icon: GraduationCap,
  },
  {
    name: "Manufacturing",
    description: "Process-focused tools for operational efficiency.",
    Icon: Factory,
  },
  {
    name: "Startups & SMEs",
    description: "Scalable technology for early-stage growth.",
    Icon: Rocket,
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
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

function IndustryCard({ industry }) {
  const { name, description, Icon } = industry;

  return (
    <motion.article
      className="group relative rounded-lg bg-gradient-to-br from-[#00AEEF]/18 via-[#6D1BC9]/12 to-[#D100B8]/16 p-px shadow-[0_16px_42px_rgba(6,18,47,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:from-[#00AEEF]/45 hover:via-[#6D1BC9]/32 hover:to-[#D100B8]/38 hover:shadow-[0_22px_58px_rgba(6,18,47,0.13)]"
      variants={fadeUpVariants}
    >
      <div className="relative overflow-hidden rounded-[7px] border border-white/80 bg-white/82 p-[18px] backdrop-blur-xl transition-colors duration-300 group-hover:border-white sm:p-[20px]">
        <div className="absolute inset-x-5 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-[#00AEEF] via-[#6D1BC9] to-[#D100B8] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-24 rotate-12 rounded-lg bg-gradient-to-br from-[#00AEEF]/12 to-[#D100B8]/10 blur-xl" />

        <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#06122F]/[0.045] text-[#006EDC] transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-[#006EDC]/12 group-hover:via-[#6D1BC9]/12 group-hover:to-[#D100B8]/14 group-hover:text-[#6D1BC9]">
          <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
        </span>

        <h3 className="relative m-0 mt-[16px] text-[18px] font-extrabold leading-tight text-[#06122F]">
          {name}
        </h3>
        <p className="relative m-0 mt-[8px] text-[14px] leading-[1.58] text-[#61708D]">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6, 18, 47, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 18, 47, 0.04) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            maskImage: "linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        />
        <div className="absolute -right-20 top-16 h-40 w-[28rem] rotate-[-9deg] rounded-lg bg-gradient-to-r from-[#00AEEF]/12 via-[#6D1BC9]/10 to-[#D100B8]/10 blur-2xl" />
        <div className="absolute -left-24 bottom-14 h-36 w-[26rem] rotate-[11deg] rounded-lg bg-gradient-to-r from-[#006EDC]/10 via-[#6D1BC9]/9 to-[#D100B8]/8 blur-2xl" />
        <svg
          className="absolute left-1/2 top-10 h-56 w-[48rem] -translate-x-1/2 text-[#006EDC]/10"
          viewBox="0 0 760 220"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 180C112 92 202 80 316 136C430 192 540 164 752 32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M28 204C132 116 226 104 340 160C454 216 560 188 732 64"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
      </div>

      <div className="site-container relative">
        <motion.div
          className="mx-auto max-w-[790px] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.span
            className="inline-flex items-center justify-center rounded-full border border-[#006EDC]/15 bg-white/75 px-4 py-2 text-[13px] font-extrabold uppercase text-[#006EDC] shadow-[0_12px_34px_rgba(6,18,47,0.06)] backdrop-blur-xl"
            variants={fadeUpVariants}
          >
            INDUSTRIES
          </motion.span>
          <motion.h2
            className="m-0 mt-[20px] text-[34px] font-[850] leading-[1.08] text-[#06122F] sm:text-[42px] lg:text-[48px]"
            variants={fadeUpVariants}
          >
            Helping Businesses Across Multiple Industries
          </motion.h2>
          <motion.p
            className="mx-auto mb-0 mt-[20px] max-w-[680px] text-[16px] leading-[1.72] text-[#4B5874] sm:text-[17px]"
            variants={fadeUpVariants}
          >
            Our solutions are adaptable to different industries, helping organisations improve
            efficiency, customer experience, and operational performance.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          variants={containerVariants}
        >
          {industries.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default IndustriesSection;
