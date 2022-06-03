import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export default function main({ children }) {
  return (
    <Box as="main" height="100vh">
      <Head>
        <meta content="width=device-width, inital-scale=1" />
      </Head>
      <Box>{children}</Box>
    </Box>
  );
}
