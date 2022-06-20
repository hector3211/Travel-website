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
export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <Box>
      <Nav isSignedIn={isSignedIn} />
      <Hero isSignedIn={setIsSignedIn} signIn={isSignedIn} />
      <Weather />
      <About />
      <Carousel />
      <SmallCarousel />
      <Testimonials />
      <Packages />
    </Box>
  );
}
