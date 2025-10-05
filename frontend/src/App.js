import React from "react";
import "./App.css";

// Import all images directly from src/images
import backgroundImage from "./images/background.jpg";
import logoImage from "./images/Logo_itlegendz_bbg.png";
import bannerImage from "./images/banner.jpg";
import manImage from "./images/man.jpg";
import serviceImage1 from "./images/service_img1.jpg";
import serviceImage2 from "./images/service_img2.jpg";
import serviceImage3 from "./images/service_img3.jpg";

function App() {
  // ✅ Backend URL — relative for production, localhost for dev
  const BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL || "/send-email";

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill out all fields.");
      return;
    }

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("✅ Message sent successfully!");
        e.target.reset();
      } else {
        alert("❌ Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      alert("⚠️ Error sending message: " + err.message);
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <div className="top_nav">
          <div className="container">
            <ul className="list-inline info">
              <li>
                <a href="tel:+447432742427">
                  <span className="fa fa-phone"></span> +44 7432742427
                </a>
              </li>
              <li>
                <a href="mailto:info@itlegendz.co.uk">
                  <span className="fa fa-envelope"></span> info@itlegendz.co.uk
                </a>
              </li>
              <li>
                <span className="fa fa-clock-o"></span> Mon - Sat 8:00 - 18:00
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <span className="fa fa-facebook"></span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="fa fa-youtube"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="#home">
              <img className="logo" src={logoImage} alt="ITLEGENDZ Logo" />
            </a>
            <ul className="nav navbar-nav menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#whychoose">Why Choose Us</a></li>
              <li><a href="/career">Careers</a></li>
              <li><a href="#contact_form">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="home"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay"></div>
        <div className="carousel-caption">
          <h1>Smart IT solutions for a smarter tomorrow</h1>
          <p>
            At ITLEGENDZ, we envision a world where businesses and communities
            thrive through intelligent, future-ready digital solutions.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Explore Our Services
            </a>
            <a href="#contact_form" className="btn btn-secondary">
              Start Your Smart Journey
            </a>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <img src={bannerImage} alt="Banner" className="banner-img" />
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container about_bg">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="about_content">
                <h2>Welcome to ITLEGENDZ Ltd</h2>
                <h3>Smart Solution Providers</h3>
                <p>
                  Founded in June 2025, ITLEGENDZ Ltd specializes in software
                  development, maintenance, and Quality Assurance engineering
                  services.
                </p>

                <h4>Our Vision</h4>
                <p>
                  To be a global leader in smart IT solutions, enabling
                  businesses and communities to thrive through innovation and
                  technology.
                </p>

                <h4>Our Mission</h4>
                <p>
                  To deliver intelligent, reliable, and customer-focused digital
                  solutions that drive transformation, efficiency, and growth.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-lg-offset-1">
              <div className="about_banner">
                <img src={manImage} alt="Director" className="director-photo" />
                <div className="director-message">
                  <h4>Director’s Message</h4>
                  <p>
                    At ITLEGENDZ Ltd, we are driven to deliver smart, scalable,
                    and future-ready IT solutions that empower businesses to
                    grow with confidence.
                  </p>
                  <p className="director-name">
                    <strong>- Asanka Wanigasekara, Director</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="row">
            <div className="col-md-4 service_item">
              <img src={serviceImage1} alt="Service 1" />
              <h3>Smart Solutions Development</h3>
              <p>Custom-built intelligent applications for business growth.</p>
            </div>
            <div className="col-md-4 service_item">
              <img src={serviceImage2} alt="Service 2" />
              <h3>Automation & Quality Assurance</h3>
              <p>
                Streamlining processes with AI-driven automation and reliable
                testing.
              </p>
            </div>
            <div className="col-md-4 service_item">
              <img src={serviceImage3} alt="Service 3" />
              <h3>Cloud & Infrastructure Solutions</h3>
              <p>
                Scalable, secure, and future-proof IT infrastructure to support
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="whychoose">
        <div className="container">
          <h2>Why Choose Us</h2>
          <ul className="why-list">
            <li>✅ Innovation-Driven – We design future-ready smart solutions.</li>
            <li>✅ Customer-Centric – Your goals define our strategies.</li>
            <li>✅ Scalable & Reliable – Built to grow with your business.</li>
            <li>✅ Expertise That Delivers – Real-world problem-solving.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact_form">
        <div className="container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" className="form-control" required />
            <input type="email" name="email" placeholder="Email" className="form-control" required />
            <textarea name="message" placeholder="Message" className="form-control" required></textarea>
            <button type="submit" className="btn submit_btn">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer_bottom text-center">
          <p>
            Made with <i className="fa fa-heart"></i> by ITLEGENDZ © 2025. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
