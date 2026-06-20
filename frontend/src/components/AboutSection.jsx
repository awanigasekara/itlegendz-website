import React from "react";
import { ArrowRight, Headphones, MapPin, PanelsTopLeft, Settings2 } from "lucide-react";

const strengths = [
  {
    title: "100% Tailored Solutions",
    description: "Built around your workflows, priorities and growth goals.",
    Icon: Settings2,
  },
  {
    title: "UK-Based Team",
    description: "Clear communication with a modern delivery mindset.",
    Icon: MapPin,
  },
  {
    title: "End-to-End Development",
    description: "Planning, design, build, QA and launch support in one flow.",
    Icon: PanelsTopLeft,
  },
  {
    title: "Ongoing Support",
    description: "Practical guidance and care after your solution goes live.",
    Icon: Headphones,
  },
];

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="site-container about-section__inner">
        <div className="about-section__content">
          <span className="about-section__label">About ITLegendz</span>
          <h2>Technology That Works for Your Business</h2>
          <p>
            At ITLegendz, we help businesses embrace technology with confidence. From custom
            software and web applications to AI-powered automation and testing services, our team
            delivers solutions designed to improve efficiency, reduce manual work, and support
            long-term growth.
          </p>
          <p>
            Whether you're a startup looking to build your first platform or an established business
            seeking automation opportunities, we create scalable solutions tailored to your goals.
          </p>

          <a className="about-section__cta" href="#process">
            Learn More About Us
            <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>

        <div className="about-section__visual" aria-label="ITLegendz company strengths">
          <span className="about-section__gradient-shape" aria-hidden="true" />
          <div className="about-section__card-frame">
            {strengths.map(({ title, description, Icon }) => (
              <article className="strength-card" key={title}>
                <span className="strength-card__icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
