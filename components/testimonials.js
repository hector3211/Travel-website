import { Box, Center, Flex, Text, Image, Avatar } from "@chakra-ui/react";
import React from "react";
import { rewviewlist } from "./reviewlist";
export default function testimonials() {
  return (
    <Box py={10} position={"relative"} minH="50rem">
      <Center>
        <Text fontWeight="bold" fontSize={{ base: "3xl", md: "5xl" }}>
          Testimonials
        </Text>
      </Center>
      <Flex
        position={{ md: "absolute" }}
        zIndex={1}
        top={"20%"}
        right={"25%"}
        bottom={"75%"}
        rounded={5}
        bgColor="gray.100"
        maxWidth="25rem"
        h="12rem"
        p={2}
        shadow="lg"
      >
        <Avatar
          src="/images/personone.jpg"
          objectFit={"cover"}
          alt="review one"
          size="2xl"
          name="Jess O."
        />
        <Flex ml={3} direction={"column"} w="100%">
          <Text>Jess O.</Text>
          <Text textAlign={"justify"}>
            I recently used travel and my experience was the best! they made it
            so easy
          </Text>
        </Flex>
      </Flex>
      <Flex
        position={{ md: "absolute" }}
        zIndex={1}
        top={"20%"}
        right={"65%"}
        bottom={"75%"}
        rounded={5}
        bgColor="gray.100"
        maxWidth="25rem"
        h="12rem"
        p={2}
        shadow="lg"
      >
        <Avatar
          src="/images/persontwo.jpg"
          objectFit={"cover"}
          alt="review one"
          size="2xl"
          name="Jess O."
        />
        <Flex ml={3} direction={"column"} w="100%">
          <Text>Jay S.</Text>
          <Text textAlign={"justify"}>
            Just used Travel to book my familys vacation and it was the super
            easy and fast!
          </Text>
        </Flex>
      </Flex>
      <Flex
        position={{ md: "absolute" }}
        zIndex={1}
        top={"35%"}
        bottom={"65%"}
        right={"48%"}
        rounded={5}
        bgColor="gray.100"
        maxWidth="25rem"
        h="12rem"
        p={2}
        shadow="lg"
      >
        <Avatar
          src="/images/personone.jpg"
          objectFit={"cover"}
          alt="review one"
          size="2xl"
          name="Jess O."
        />
        <Flex ml={3} direction={"column"}>
          <Text>Jess O.</Text>
          <Text>
            I recently used travel and my experience was the best! they made it
            so easy
          </Text>
        </Flex>
      </Flex>
      <Flex
        position={{ md: "absolute" }}
        zIndex={1}
        top={"55%"}
        bottom={"45%"}
        right={"38%"}
        rounded={5}
        bgColor="gray.100"
        maxWidth="25rem"
        h="12rem"
        p={2}
        shadow="lg"
      >
        <Avatar
          src="/images/personone.jpg"
          objectFit={"cover"}
          alt="review one"
          size="2xl"
          name="Jess O."
        />
        <Flex ml={3} direction={"column"}>
          <Text>Jess O.</Text>
          <Text>
            I recently used travel and my experience was the best! they made it
            so easy
          </Text>
        </Flex>
      </Flex>
      <Flex
        position={{ md: "absolute" }}
        zIndex={2}
        top={"42%"}
        bottom={"45%"}
        right={"2%"}
        rounded={5}
        bgColor="gray.100"
        maxWidth="25rem"
        h="12rem"
        p={2}
        shadow="lg"
      >
        <Avatar
          src="/images/persontwo.jpg"
          objectFit={"cover"}
          alt="review one"
          size="2xl"
          name="Jess O."
        />
        <Flex ml={3} direction={"column"}>
          <Text>Allen M.</Text>
          <Text>
            I've used travel a couple times now and I have to say they're
            service is unbeatable!
          </Text>
        </Flex>
      </Flex>
      <Flex
        position={{ md: "absolute" }}
        zIndex={0}
        top={"65%"}
        bottom={"45%"}
        right={"65%"}
        rounded={5}
        bgColor="gray.100"
        maxWidth="25rem"
        h="12rem"
        p={2}
        shadow="lg"
      >
        <Avatar
          src="/images/personone.jpg"
          objectFit={"cover"}
          alt="review one"
          size="2xl"
          name="Jess O."
        />
        <Flex ml={3} direction={"column"}>
          <Text>Jess O.</Text>
          <Text>
            I recently used travel and my experience was the best! they made it
            so easy
          </Text>
        </Flex>
      </Flex>
      <Flex
        position={{ md: "absolute" }}
        zIndex={1}
        top={"65%"}
        right={"18%"}
        rounded={5}
        bgColor="gray.100"
        maxWidth="25rem"
        h="12rem"
        p={2}
        shadow={"lg"}
      >
        <Avatar
          src="/images/persontwo.jpg"
          objectFit={"cover"}
          alt="review one"
          size="2xl"
          name="Jess O."
        />
        <Flex ml={3} direction={"column"}>
          <Text>Hector O.</Text>
          <Text>
            I recently used travel and my experience was the best! they made it
            so easy
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
