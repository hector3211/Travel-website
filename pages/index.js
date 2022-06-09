import { Box } from "@chakra-ui/react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Carousel from "../components/carousel";
import SmallCarousel from "../components/smallCarousel";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <Box>
      <Nav />
      <Hero />
      <About />
      <Carousel />
      <SmallCarousel />
      <Testimonials />
    </Box>
  );
}
