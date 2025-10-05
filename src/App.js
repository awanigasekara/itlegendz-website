import React from "react";
import "./App.css";
/*import Career from "./Career";*/

// Import all images directly from src/images
import backgroundImage from "./images/background.jpg";
import logoImage from "./images/Logo_itlegendz_bbg.png";
import bannerImage from "./images/banner.jpg";
import manImage from "./images/man.jpg";
import serviceImage1 from "./images/service_img1.jpg";
import serviceImage2 from "./images/service_img2.jpg";
import serviceImage3 from "./images/service_img3.jpg";

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        {/* Top Navbar */}
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

        {/* Navbar */}
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="#home">
              <img className="logo" src={logoImage} alt="ITLEGENDZ Logo" />
            </a>
            <ul className="nav navbar-nav menu">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#whychoose">Why Choose Us</a>
              </li>
              <li>
                <a href="/career">Careers</a>
              </li>   {/* new link */}
              <li>
                <a href="#contact_form">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="home"
        style={{ backgroundImage: `url(${backgroundImage})` }}
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

      {/* Banner Section */}
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
                  services. We deliver smart, scalable, and future-ready IT solutions
                  to empower businesses across industries.
                </p>

                {/* Vision & Mission */}
                <div className="vision-mission">
                  <h4>Our Vision</h4>
                  <p>
                    To be a global leader in smart IT solutions, enabling businesses
                    and communities to thrive through innovation and technology.
                  </p>
                  <h4>Our Mission</h4>
                  <p>
                    To deliver intelligent, reliable, and customer-focused digital
                    solutions that drive transformation, efficiency, and growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-lg-offset-1">
              <div className="about_banner">
                <img src={manImage} alt="Director" className="director-photo" />
                <div className="director-message">
                  <h4>Director’s Message</h4>
                  <p>
                    At ITLEGENDZ Ltd, we are driven to deliver smart, scalable, and
                    future-ready IT solutions that empower businesses to grow with
                    confidence. My commitment is to build lasting partnerships based
                    on trust, innovation, and excellence.
                  </p>
                  <p className="director-name"><strong>- Asanka Wanigasekara, Director</strong></p>
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
            <li>✅ Scalable & Reliable – Solutions built to grow with your business.</li>
            <li>✅ Expertise That Delivers – Technical knowledge + real-world problem-solving.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact_form">
        <div className="container">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" className="form-control" />
            <input type="email" placeholder="Email" className="form-control" />
            <textarea
              placeholder="Message"
              className="form-control"
            ></textarea>
            <button type="submit" className="btn submit_btn">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer_bottom text-center">
          <p>
            Made with <i className="fa fa-heart"></i> by ITLEGENDZ © 2025. All
            Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
