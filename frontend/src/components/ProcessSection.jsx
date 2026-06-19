import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Discover",
    description: "We understand your goals, challenges, and opportunities.",
  },
  {
    title: "Plan",
    description: "We create a clear roadmap and technical strategy.",
  },
  {
    title: "Build",
    description: "Our team develops and tests your solution.",
  },
  {
    title: "Launch",
    description: "Deployment, optimisation, and performance monitoring.",
  },
  {
    title: "Support",
    description: "Continuous improvements and long-term support.",
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
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProcessStep({ step, index }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className="group relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 md:block md:pl-0"
      variants={fadeUpVariants}
    >
      <div className="absolute bottom-[-20px] left-[23px] top-12 w-px bg-gradient-to-b from-[#00AEEF]/35 via-[#6D1BC9]/35 to-[#D100B8]/35 md:hidden" />
      <div className="relative z-10 flex justify-center md:block">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#00AEEF] via-[#6D1BC9] to-[#D100B8] p-px shadow-[0_0_24px_rgba(0,174,239,0.22)] transition-all duration-300 group-hover:shadow-[0_0_34px_rgba(209,0,184,0.34)] md:mx-auto">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-[#071638] text-[12px] font-extrabold text-white md:text-[13px]">
            {number}
          </span>
        </span>
      </div>

      <div className="relative mt-0 rounded-lg bg-gradient-to-br from-white/12 via-white/8 to-white/10 p-px transition-all duration-300 group-hover:-translate-y-1 group-hover:from-[#00AEEF]/55 group-hover:via-[#6D1BC9]/42 group-hover:to-[#D100B8]/48 md:mt-8">
        <div className="relative overflow-hidden rounded-[7px] border border-white/10 bg-white/[0.065] p-[18px] text-left shadow-[0_18px_48px_rgba(0,0,0,0.20)] backdrop-blur-xl transition-all duration-300 group-hover:border-white/18 group-hover:bg-white/[0.085] md:min-h-[164px] md:text-center lg:p-[20px]">
          <div className="absolute inset-x-5 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-[#00AEEF] via-[#6D1BC9] to-[#D100B8] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
          <h3 className="m-0 text-[19px] font-extrabold leading-tight text-white">{step.title}</h3>
          <p className="m-0 mt-[10px] text-[14px] leading-[1.62] text-white/68">
            {step.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#06122F] py-20 text-white sm:py-24 lg:py-28">
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
        <div className="absolute -right-24 top-20 h-44 w-[34rem] rotate-[-9deg] rounded-lg bg-gradient-to-r from-[#00AEEF]/16 via-[#6D1BC9]/14 to-[#D100B8]/14 blur-2xl" />
        <div className="absolute -left-28 bottom-16 h-36 w-[30rem] rotate-[12deg] rounded-lg bg-gradient-to-r from-[#006EDC]/14 via-[#6D1BC9]/12 to-[#D100B8]/10 blur-2xl" />
        <div className="absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00AEEF]/50 to-transparent" />
      </div>

      <div className="site-container relative">
        <motion.div
          className="mx-auto max-w-[740px] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.span
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[13px] font-extrabold uppercase text-[#00AEEF] shadow-[0_12px_34px_rgba(0,0,0,0.16)] backdrop-blur-xl"
            variants={fadeUpVariants}
          >
            OUR PROCESS
          </motion.span>
          <motion.h2
            className="m-0 mt-[20px] text-[34px] font-[850] leading-[1.08] text-white sm:text-[42px] lg:text-[50px]"
            variants={fadeUpVariants}
          >
            How We Deliver Success
          </motion.h2>
          <motion.p
            className="mx-auto mb-0 mt-[20px] max-w-[620px] text-[16px] leading-[1.72] text-white/72 sm:text-[17px]"
            variants={fadeUpVariants}
          >
            A structured approach from first conversation to launch and ongoing support.
          </motion.p>
        </motion.div>

        <div className="relative mt-14">
          <motion.div
            className="absolute left-[10%] right-[10%] top-6 hidden h-px origin-left bg-gradient-to-r from-[#00AEEF] via-[#6D1BC9] to-[#D100B8] lg:block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={lineVariants}
          />

          <motion.div
            className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-5 lg:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={containerVariants}
          >
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} step={step} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
