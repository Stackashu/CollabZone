import React, { useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import KeyFeatures from "./KeyFeatures";
import Contact from "./Contact";
import Footer from "./Footer";
import "../../App.css";
import style from "../../styles/Landing/Landing.module.css";

const Landing = () => {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "home") {
      homeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "features") {
      featuresRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (section === "howItWorks") {
      howItWorksRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (section === "testimonials") {
      testimonialsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (section === "faq") {
      faqRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={style.Landing}>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={homeRef}>
        <Home />
      </div>
      <Hero />
      <div ref={featuresRef}>
        <Features />
      </div>
      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <div ref={faqRef}>
        <Faq />
      </div>
      <KeyFeatures />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
