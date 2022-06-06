import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export default function main({ children }) {
  return (
    <Box as="main" minheight="100vh">
      <Head>
        <meta content="width=device-width, inital-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Box maxWidth="100%" fontFamily={"'Poppins', sans-serif"}>
        {children}
      </Box>
    </Box>
  );
}
