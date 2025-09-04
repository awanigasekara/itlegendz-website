import React from "react";
import "./App.css";
// Import all images directly from the src/images folder
import backgroundImage from "./images/background.jpg";
import logoImage from "./images/Logo_itlegendz_bbg.png";
import bannerImage from "./images/banner.jpg";
import manImage from "./images/man.png";
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
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
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
              <img
                className="logo"
                // Use the imported variable for the logo
                src={logoImage}
                alt="ITLEGENDZ Logo"
              />
            </a>
            <ul className="nav navbar-nav menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact_form">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="home"
        // Use the imported variable for the background image
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay"></div>
        <div className="carousel-caption">
          <h3>We are Certified Engineers</h3>
          <h1>Smart City Feature Developments</h1>
          <h1 className="second_heading">Creative & Professional</h1>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner">
        {/* Use the imported variable for the banner image */}
        <img src={bannerImage} alt="Banner" className="banner-img" />
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container about_bg">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="about_content">
                <h2>Welcome to Our Company</h2>
                <h3>Smart Solution Providers</h3>
                <p>
                  Founded in June 2025, our company specializes in software
                  development, maintenance, and Quality Assurance engineering
                  services.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-lg-offset-1">
              <div className="about_banner">
                {/* Use the imported variable for the man image */}
                <img src={manImage} alt="About Banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="container">
          <h2>OUR SERVICES</h2>
          <div className="row">
            <div className="col-md-4 service_item">
              {/* Use the imported variables for service images */}
              <img src={serviceImage1} alt="Service 1" />
              <h3>Software Development and Maintenance</h3>
              <p>Proven professionals ensuring Quality systems and maintenance.</p>
            </div>
            <div className="col-md-4 service_item">
              <img src={serviceImage2} alt="Service 2" />
              <h3>QA Automation</h3>
              <p>Automating testing processes to save time and increase accuracy.</p>
            </div>
            <div className="col-md-4 service_item">
              <img src={serviceImage3} alt="Service 3" />
              <h3>Smart App Solutions</h3>
              <p>Tailored smart solutions for both public and private sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact_form">
        <div className="container">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" className="form-control" />
            <input type="email" placeholder="Email" className="form-control" />
            <textarea placeholder="Message" className="form-control"></textarea>
            <button type="submit" className="btn submit_btn">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer_bottom text-center">
          <p>
            Made with <i className="fa fa-heart"></i> by ITlegendz © 2025. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
