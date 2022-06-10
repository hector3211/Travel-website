import {
  Box,
  Center,
  Flex,
  Text,
  Image,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

export default function testimonials() {
  return (
    <Box py={10} position={"relative"} minH="40rem">
      <Center>
        <Text py={3} fontWeight="bold" fontSize={{ base: "3xl", md: "5xl" }}>
          Testimonials
        </Text>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Flex
            position={{ md: "absolute" }}
            zIndex={1}
            top={"28%"}
            right={"70%"}
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
                Just used Travel to book my familys vacation and it was the
                super easy and fast!
              </Text>
            </Flex>
          </Flex>

          <Flex
            position={{ md: "absolute" }}
            zIndex={1}
            top={"45%"}
            bottom={"65%"}
            right={"58%"}
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
                I recently used travel and my experience was the best! they made
                it so easy
              </Text>
            </Flex>
          </Flex>

          <Flex
            position={{ md: "absolute" }}
            zIndex={1}
            top={"65%"}
            bottom={"45%"}
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
                I recently used travel and my experience was the best! they made
                it so easy
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box mt={10}>
          <Image
            mt={10}
            src="/images/review.svg"
            alt="testimonials"
            objectFit={"contain"}
            w="100%"
            h="500px"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
