import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import KeyFeatures from "./KeyFeatures";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <KeyFeatures />
    </div>
  );
};

export default Landing;
