import React from "react";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Gauge,
  Headphones,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
  Zap,
} from "lucide-react";

const trustBadges = [
  { label: "UK-Based Company", Icon: ShieldCheck },
  { label: "Custom Software Experts", Icon: Code2 },
  { label: "AI & Automation Solutions", Icon: Sparkles },
  { label: "Dedicated Support", Icon: Headphones },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__background" aria-hidden="true">
        <span className="hero__shape hero__shape--one" />
        <span className="hero__shape hero__shape--two" />
        <span className="hero__grid" />
      </div>

      <div className="site-container hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Modern software delivery for ambitious teams
          </div>

          <h1>
            Smart Software, <span className="gradient-text">AI & Automation</span> Solutions for
            Growing Businesses
          </h1>

          <p className="hero__subheading">
            ITLEGENDZ helps startups and businesses build modern websites, custom software,
            e-commerce platforms, QA solutions and automation systems that improve efficiency and
            support long-term growth.
          </p>

          <div className="hero__actions" aria-label="Hero actions">
            <a className="btn-gradient" href="#contact_form">
              Book a Free Consultation
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className="btn-ghost" href="#services">
              Explore Services
            </a>
          </div>

          <ul className="hero__badges" aria-label="Trust signals">
            {trustBadges.map(({ label, Icon }) => (
              <li key={label}>
                <Icon aria-hidden="true" size={16} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-label="Software, automation and QA dashboard preview">
          <div className="visual-card dashboard-card">
            <div className="visual-card__header">
              <div>
                <span>Software dashboard</span>
                <strong>Delivery workspace</strong>
              </div>
              <span className="status-pill">Active</span>
            </div>

            <div className="dashboard-grid">
              <div>
                <span>Web app</span>
                <strong>In build</strong>
              </div>
              <div>
                <span>E-commerce</span>
                <strong>Ready</strong>
              </div>
              <div>
                <span>QA suite</span>
                <strong>Running</strong>
              </div>
            </div>

            <div className="progress-stack" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="visual-card workflow-card">
            <div className="workflow-card__title">
              <Workflow aria-hidden="true" size={18} />
              Automation workflow
            </div>
            <div className="workflow-map" aria-hidden="true">
              <span className="workflow-node">Idea</span>
              <span className="workflow-line" />
              <span className="workflow-node">Build</span>
              <span className="workflow-line" />
              <span className="workflow-node">Launch</span>
            </div>
          </div>

          <div className="visual-card ai-card">
            <div className="ai-card__icon">
              <Bot aria-hidden="true" size={20} />
            </div>
            <div>
              <span>AI assistant</span>
              <strong>Workflow support</strong>
              <p>Smart prompts, automation triggers and team handoffs.</p>
            </div>
          </div>

          <div className="visual-card metric-card">
            <div className="metric-card__header">
              <Gauge aria-hidden="true" size={18} />
              <span>Performance & testing</span>
            </div>
            <div className="metric-card__rows">
              <span>
                <TestTube2 aria-hidden="true" size={15} />
                Regression checks
              </span>
              <span>
                <Zap aria-hidden="true" size={15} />
                Load readiness
              </span>
              <span>
                <CheckCircle2 aria-hidden="true" size={15} />
                Release confidence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
