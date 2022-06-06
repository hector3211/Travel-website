import { Box } from "@chakra-ui/react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
export default function Home() {
  return (
    <Box>
      <Nav />
      <Hero />
      <About />
    </Box>
  );
}
