import React from "react";
import { Link } from "react-router-dom";
import careerBanner from "./images/career_banner.jpg";

const CareerPage = () => {
  return (
    <div
      className="font-sans text-white min-h-screen bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${careerBanner})` }}
    >
      {/* Dark Overlay */}
      <div className="bg-black/70 min-h-screen">
        {/* Navigation */}
        <nav className="bg-black/60 shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              ITLEGENDZ
            </Link>
            <ul className="flex space-x-6 text-white font-medium">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><a href="#about" className="hover:text-blue-300">About</a></li>
              <li><a href="#services" className="hover:text-blue-300">Services</a></li>
              <li>
                <Link to="/career" className="text-blue-300 font-semibold border-b-2 border-blue-300">
                  Careers
                </Link>
              </li>
              <li><a href="#contact_form" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-28 text-center">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Join the ITLEGENDZ Team
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Shape the future with smart solutions. <br />
            Innovate. Grow. Succeed.
          </p>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-300">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {[
              { title: "Innovation at Heart", desc: "We solve real-world problems using cutting-edge technology." },
              { title: "Growth Opportunities", desc: "Learn, grow, and take your career to the next level." },
              { title: "Collaborative Environment", desc: "Work with a passionate, diverse, and driven team." },
              { title: "Impactful Work", desc: "Contribute to projects that make a real difference globally." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-black/40 hover:bg-black/60 transition">
                <h3 className="font-bold text-xl mb-2 text-blue-300">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-300">
            Current Openings
          </h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                role: "QA Automation Engineer",
                location: "Remote / UK | Full-time",
                desc: "Automate and improve software quality for innovative smart solutions."
              },
              {
                role: "Frontend Developer",
                location: "Remote / UK | Full-time",
                desc: "Work on modern web applications with React and Tailwind."
              }
            ].map((job, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-black/40 hover:bg-black/60 transition text-left"
              >
                <h3 className="text-xl font-bold text-blue-300">{job.role}</h3>
                <p className="text-gray-200">{job.location}</p>
                <p className="mt-2 text-gray-300">{job.desc}</p>
                <button className="mt-4 bg-blue-300 text-black px-6 py-2 rounded-lg hover:bg-white transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Work Culture */}
        <section className="py-16 px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-300">Our Work Culture</h2>
          <p className="mb-4 text-lg text-gray-200">
            Flexible hours, remote opportunities, focus on learning, and a collaborative, innovative environment.
          </p>
          <p className="text-lg text-gray-200">
            We encourage creativity, teamwork, and building solutions that make a real impact.
          </p>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 text-center bg-blue-900/90">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Innovate with Us?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join ITLEGENDZ and shape the future with smart solutions, impactful projects, and a growth-oriented team.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 font-semibold rounded-lg hover:bg-gray-200 transition">
            Submit Your Application
          </button>
        </section>
      </div>
    </div>
  );
};

export default CareerPage;
