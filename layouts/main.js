import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
// main layout for project
export default function main({ children }) {
  return (
    <Box as="main" minheight="100vh">
      <Head>
        <meta content="width=device-width, inital-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Box
        maxWidth="100%"
        color={useColorModeValue("black", "white")}
        fontFamily={"'Poppins', sans-serif"}
      >
        {children}
      </Box>
    </Box>
  );
}
