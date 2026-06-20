import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Handshake,
  Layers3,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    title: "Business-Focused Approach",
    description: "Technology solutions aligned with real business goals.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Scalable Architecture",
    description: "Built for growth, flexibility, and future expansion.",
    Icon: Layers3,
  },
  {
    title: "AI-Ready Solutions",
    description: "Modern systems designed to leverage automation and AI capabilities.",
    Icon: Bot,
  },
  {
    title: "Dedicated Partnership",
    description: "We work as an extension of your team, providing ongoing support and guidance.",
    Icon: Handshake,
  },
  {
    title: "Quality First",
    description: "Rigorous testing and quality assurance throughout every project.",
    Icon: ShieldCheck,
  },
  {
    title: "Transparent Communication",
    description: "Clear timelines, regular updates, and honest project management.",
    Icon: MessageSquareText,
  },
];

const leftVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

function ReasonBlock({ reason, index }) {
  const { title, description, Icon } = reason;

  return (
    <motion.article
      className={`group relative rounded-lg bg-gradient-to-br from-white/12 via-white/8 to-white/10 p-px transition-all duration-300 hover:-translate-y-1 hover:from-[#00AEEF]/55 hover:via-[#6D1BC9]/42 hover:to-[#D100B8]/48 ${
        index % 2 === 1 ? "lg:ml-7" : "lg:mr-7"
      }`}
      variants={itemVariants}
    >
      <div className="relative overflow-hidden rounded-[7px] border border-white/10 bg-white/[0.065] p-4 shadow-[0_20px_54px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 group-hover:border-white/18 group-hover:bg-white/[0.085] sm:p-5">
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#00AEEF] via-[#6D1BC9] to-[#D100B8] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute right-0 top-0 h-20 w-36 -translate-y-10 translate-x-10 rotate-12 rounded-lg bg-gradient-to-br from-[#00AEEF]/12 to-[#D100B8]/10 blur-xl" />

        <div className="relative flex gap-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#00AEEF] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-transform duration-300 group-hover:scale-105">
            <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-[17px] font-extrabold leading-tight text-white">{title}</h3>
            <p className="mt-2 text-[14px] leading-[1.58] text-white/68">{description}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-[#06122F] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(248, 250, 252, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(248, 250, 252, 0.08) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 16%, black 84%, transparent 100%)",
          }}
        />
        <div className="absolute -right-28 top-10 h-44 w-[36rem] rotate-[-10deg] rounded-lg bg-gradient-to-r from-[#00AEEF]/16 via-[#6D1BC9]/14 to-[#D100B8]/14 blur-2xl" />
        <div className="absolute -left-32 bottom-12 h-36 w-[32rem] rotate-[13deg] rounded-lg bg-gradient-to-r from-[#006EDC]/16 via-[#6D1BC9]/12 to-[#D100B8]/10 blur-2xl" />
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent" />
      </div>

      <div className="site-container relative grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16">
        <motion.div
          className="max-w-[570px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={listVariants}
        >
          <motion.span
            className="inline-flex items-center gap-3 text-[13px] font-extrabold uppercase text-[#00AEEF]"
            variants={leftVariants}
          >
            <span className="h-px w-9 rounded-full bg-gradient-to-r from-[#00AEEF] via-[#6D1BC9] to-[#D100B8]" />
            WHY CHOOSE US
          </motion.span>
          <motion.h2
            className="mt-5 text-[34px] font-[850] leading-[1.08] text-white sm:text-[42px] lg:text-[50px]"
            variants={leftVariants}
          >
            Why Businesses Choose ITLegendz
          </motion.h2>
          <motion.p
            className="mt-5 max-w-[520px] text-[16px] leading-[1.75] text-white/72 sm:text-[17px]"
            variants={leftVariants}
          >
            A practical technology partner focused on building reliable, scalable and business-ready
            digital solutions.
          </motion.p>
          <motion.a
            className="mt-8 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#006EDC] via-[#6D1BC9] to-[#D100B8] px-6 text-[15px] font-extrabold text-white no-underline shadow-[0_18px_42px_rgba(109,27,201,0.34)] transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-[0_24px_58px_rgba(109,27,201,0.42)]"
            href="#contact_form"
            variants={leftVariants}
          >
            Start Your Project
            <ArrowRight aria-hidden="true" size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          className="grid gap-3 md:grid-cols-2 lg:grid-cols-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={listVariants}
        >
          {reasons.map((reason, index) => (
            <ReasonBlock key={reason.title} reason={reason} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
