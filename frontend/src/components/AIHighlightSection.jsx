import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  FileChartColumn,
  Headphones,
  MessageCircle,
  Network,
  Workflow,
} from "lucide-react";

const features = [
  { label: "AI Chatbots", Icon: MessageCircle },
  { label: "Workflow Automation", Icon: Workflow },
  { label: "Business Process Automation", Icon: Network },
  { label: "Data Analysis", Icon: BarChart3 },
  { label: "Customer Support Automation", Icon: Headphones },
  { label: "AI-Powered Reporting", Icon: FileChartColumn },
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

function FeatureChip({ feature }) {
  const { label, Icon } = feature;

  return (
    <motion.li
      className="group inline-flex min-h-[42px] items-center gap-2 rounded-full border border-[#006EDC]/12 bg-white/85 px-[14px] text-[13px] font-bold text-[#0B1633]/78 shadow-[0_14px_34px_rgba(11,22,51,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/42 hover:bg-white hover:text-[#0B1633]"
      variants={fadeUpVariants}
    >
      <Icon
        aria-hidden="true"
        size={15}
        className="text-[#00AEEF] transition-transform duration-300 group-hover:scale-110"
      />
      {label}
    </motion.li>
  );
}

function AIVisual() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[580px] lg:ml-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
      aria-label="AI and automation dashboard visual"
    >
      <motion.div
        className="relative rounded-lg bg-gradient-to-br from-[#00AEEF]/40 via-[#6D1BC9]/30 to-[#D100B8]/35 p-px shadow-[0_30px_95px_rgba(11,22,51,0.2)]"
        variants={fadeUpVariants}
      >
        <div className="relative overflow-hidden rounded-[7px] border border-white/14 bg-[#06122F] p-[16px] sm:p-[22px]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.24]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(248, 250, 252, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(248, 250, 252, 0.1) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />
          <div className="pointer-events-none absolute -right-20 top-10 h-32 w-80 rotate-[-12deg] rounded-lg bg-gradient-to-r from-[#00AEEF]/24 via-[#6D1BC9]/18 to-[#D100B8]/18 blur-2xl" />
          <div className="pointer-events-none absolute -left-20 bottom-8 h-28 w-72 rotate-[10deg] rounded-lg bg-gradient-to-r from-[#006EDC]/20 via-[#6D1BC9]/16 to-[#D100B8]/14 blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-[16px]">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D100B8]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#6D1BC9]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#00AEEF]" />
              </div>
              <span className="rounded-full border border-[#00AEEF]/24 bg-white/[0.08] px-[12px] py-[7px] text-[12px] font-extrabold text-[#9BEAFF]">
                Automation workspace
              </span>
            </div>

            <motion.div
              className="mt-[18px] rounded-lg border border-white/18 bg-[#0A1A3E]/95 p-[18px] shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl"
              variants={fadeUpVariants}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#006EDC] via-[#6D1BC9] to-[#D100B8] text-white shadow-[0_16px_34px_rgba(109,27,201,0.28)]">
                    <Bot aria-hidden="true" size={24} />
                  </span>
                  <div>
                    <p className="m-0 text-[13px] font-bold text-[#9BEAFF]">AI workflow engine</p>
                    <h3 className="m-0 mt-[3px] text-[22px] font-extrabold text-white">
                      Practical automation hub
                    </h3>
                  </div>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-[#00AEEF]/24 bg-[#00AEEF]/10 px-[12px] py-[8px] text-[12px] font-extrabold text-[#9BEAFF]">
                  Ready to scale
                </span>
              </div>
            </motion.div>

            <div className="mt-[14px] grid gap-[12px] sm:grid-cols-2">
              <motion.div
                className="rounded-lg border border-white/16 bg-[#0A1A3E]/92 p-[16px] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/42"
                variants={fadeUpVariants}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="m-0 text-[12px] font-extrabold uppercase text-[#9BEAFF]">
                      Assistant
                    </p>
                    <h3 className="m-0 mt-[4px] text-[18px] font-extrabold text-white">
                      Guided support
                    </h3>
                  </div>
                  <MessageCircle aria-hidden="true" size={21} className="text-[#00AEEF]" />
                </div>
                <div className="mt-[16px] grid gap-[8px]" aria-hidden="true">
                  <span className="h-[7px] w-[90%] rounded-full bg-white/16" />
                  <span className="h-[7px] w-[68%] rounded-full bg-white/12" />
                </div>
              </motion.div>

              <motion.div
                className="rounded-lg border border-white/16 bg-[#0A1A3E]/92 p-[16px] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/42"
                variants={fadeUpVariants}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="m-0 text-[12px] font-extrabold uppercase text-[#9BEAFF]">
                      Workflow
                    </p>
                    <h3 className="m-0 mt-[4px] text-[18px] font-extrabold text-white">
                      Task routing
                    </h3>
                  </div>
                  <Workflow aria-hidden="true" size={21} className="text-[#00AEEF]" />
                </div>
                <div className="mt-[16px] flex items-center gap-2" aria-hidden="true">
                  {["Input", "Rule", "Action"].map((node) => (
                    <span
                      key={node}
                      className="rounded-full border border-white/12 bg-white/10 px-[9px] py-[6px] text-[10px] font-extrabold"
                      style={{ color: "rgba(255, 255, 255, 0.82)" }}
                    >
                      {node}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="mt-[12px] grid gap-[12px] sm:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                className="rounded-lg border border-white/16 bg-[#0A1A3E]/92 p-[16px] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D100B8]/42"
                variants={fadeUpVariants}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="m-0 text-[18px] font-extrabold text-white">Data insights</h3>
                  <BarChart3 aria-hidden="true" size={21} className="text-[#D100B8]" />
                </div>
                <div className="mt-[16px] flex h-[92px] items-end gap-[8px]" aria-hidden="true">
                  {[42, 66, 54, 82, 70, 92].map((height) => (
                    <span
                      key={height}
                      className="w-full rounded-t-md bg-gradient-to-t from-[#006EDC] via-[#6D1BC9] to-[#D100B8]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="rounded-lg border border-white/16 bg-[#0A1A3E]/92 p-[16px] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/42"
                variants={fadeUpVariants}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#00AEEF]/12 text-[#00AEEF]">
                  <FileChartColumn aria-hidden="true" size={21} />
                </span>
                <p className="m-0 mt-[16px] text-[12px] font-extrabold uppercase text-[#9BEAFF]">
                  Reporting
                </p>
                <h3 className="m-0 mt-[4px] text-[18px] font-extrabold text-white">Clear outputs</h3>
                <div className="mt-[16px] grid gap-[8px]" aria-hidden="true">
                  <span className="h-[7px] w-[86%] rounded-full bg-white/16" />
                  <span className="h-[7px] w-[64%] rounded-full bg-white/12" />
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-[14px] flex flex-wrap gap-2"
              variants={containerVariants}
              aria-hidden="true"
            >
              {["Capture", "Analyse", "Automate", "Report"].map((item) => (
                <motion.span
                  key={item}
                  className="rounded-full border border-[#00AEEF]/18 bg-white/[0.08] px-[11px] py-[7px] text-[11px] font-extrabold"
                  style={{ color: "rgba(255, 255, 255, 0.82)" }}
                  variants={fadeUpVariants}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AIHighlightSection() {
  return (
    <section id="ai-automation" className="relative overflow-hidden bg-[#F8FAFC] py-20 text-[#0B1633] sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 110, 220, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(109, 27, 201, 0.07) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        />
        <div className="absolute -right-28 top-20 h-52 w-[38rem] rotate-[-10deg] rounded-lg bg-gradient-to-r from-[#00AEEF]/14 via-[#6D1BC9]/12 to-[#D100B8]/10 blur-2xl" />
        <div className="absolute -left-32 bottom-16 h-40 w-[32rem] rotate-[12deg] rounded-lg bg-gradient-to-r from-[#006EDC]/12 via-[#6D1BC9]/10 to-[#D100B8]/10 blur-2xl" />
        <div className="absolute left-1/2 top-0 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00AEEF]/42 to-transparent" />
      </div>

      <div className="site-container relative grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
        <motion.div
          className="max-w-[610px] text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={containerVariants}
        >
          <motion.span
            className="inline-flex items-center gap-3 text-[13px] font-extrabold uppercase text-[#00AEEF]"
            variants={fadeUpVariants}
          >
            <span className="h-px w-9 rounded-full bg-gradient-to-r from-[#00AEEF] via-[#6D1BC9] to-[#D100B8]" />
            AI & AUTOMATION
          </motion.span>
          <motion.h2
            className="m-0 mt-[20px] text-[34px] font-[850] leading-[1.08] text-[#0B1633] sm:text-[42px] lg:text-[52px]"
            variants={fadeUpVariants}
          >
            Transform Your Business with AI
          </motion.h2>
          <motion.p
            className="mx-auto mb-0 mt-[20px] max-w-[610px] text-[16px] leading-[1.75] text-[#0B1633]/70 sm:text-[17px] lg:mx-0"
            variants={fadeUpVariants}
          >
            Artificial Intelligence is changing how businesses operate. ITLegendz helps
            organisations automate repetitive tasks, improve customer experiences, and unlock
            valuable insights through intelligent solutions.
          </motion.p>

          <motion.ul
            className="mx-auto mt-[26px] flex max-w-[640px] flex-wrap justify-center gap-3 p-0 lg:mx-0 lg:justify-start"
            variants={containerVariants}
          >
            {features.map((feature) => (
              <FeatureChip key={feature.label} feature={feature} />
            ))}
          </motion.ul>

          <motion.div className="mt-[32px] flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start" variants={fadeUpVariants}>
            <a
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#006EDC] via-[#6D1BC9] to-[#D100B8] px-6 text-[15px] font-extrabold text-white no-underline shadow-[0_18px_42px_rgba(109,27,201,0.34)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:text-white hover:shadow-[0_24px_62px_rgba(109,27,201,0.46)]"
              href="#contact_form"
              style={{
                background:
                  "linear-gradient(135deg, #006EDC 0%, #6D1BC9 55%, #D100B8 100%)",
                color: "#FFFFFF",
              }}
            >
              Book Your Free AI Consultation
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </motion.div>

          <motion.p
            className="mx-auto mb-0 mt-[18px] max-w-[520px] text-[14px] font-bold text-[#0B1633]/58 lg:mx-0"
            variants={fadeUpVariants}
          >
            Practical AI solutions built around real business needs.
          </motion.p>
        </motion.div>

        <AIVisual />
      </div>
    </section>
  );
}

export default AIHighlightSection;
