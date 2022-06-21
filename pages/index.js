import { Box } from "@chakra-ui/react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Carousel from "../components/carousel";
import SmallCarousel from "../components/smallCarousel";
import Testimonials from "../components/testimonials";
import Weather from "../components/weather";
import Packages from "../components/packages";
import React, { useState } from "react";
import { StyledBox } from "../layouts/motion";
export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <StyledBox>
      <Nav isSignedIn={isSignedIn} />
      <Hero isSignedIn={setIsSignedIn} signIn={isSignedIn} />
      <Weather />
      <About />
      <Carousel />
      <SmallCarousel />
      <Testimonials />
      <Packages />
    </StyledBox>
  );
}
