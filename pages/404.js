import {
  Box,
  Center,
  Heading,
  Flex,
  Divider,
  Text,
  Image,
  IconButton,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
export default function Four() {
  return (
    <Box>
      <Flex minH="80vh" justify="center" align="center">
        <Heading fontSize={"8xl"}>404</Heading>
        <Divider px={5} orientation="vertical" h="3rem" />

        <Text fontSize={"3xl"}>We at Travel do not have this page </Text>
        <Image
          h="500px"
          src="/images/ufo.svg"
          objectFit={"contain"}
          alt="404 image"
        />
      </Flex>
      <Center>
        <Link href="/">
          <IconButton
            colorScheme={"purple"}
            size="lg"
            icon={<AiFillHome />}
          ></IconButton>
        </Link>
      </Center>
    </Box>
  );
}
