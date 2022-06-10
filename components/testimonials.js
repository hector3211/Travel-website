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
    <Box>
      <Center>
        <Text py={3} fontWeight="bold" fontSize={{ base: "3xl", md: "5xl" }}>
          Testimonials
        </Text>
      </Center>
      <SimpleGrid minH="40rem" columns={{ base: 1, md: 2 }} spacing={1}>
        <Flex
          p={{ base: 2, md: 0 }}
          direction={"column"}
          justify="space-between"
          align="center"
        >
          <Flex
            rounded={5}
            bgColor="gray.100"
            maxWidth="25rem"
            h="12rem"
            p={2}
            shadow="lg"
            my={2}
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
            rounded={5}
            bgColor="gray.100"
            maxWidth="25rem"
            h="12rem"
            p={2}
            shadow="lg"
            my={2}
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
            rounded={5}
            bgColor="gray.100"
            maxWidth="25rem"
            h="12rem"
            p={2}
            shadow="lg"
            my={2}
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
        </Flex>
        <Box p={2}>
          <Image
            mt={10}
            src="/images/review.svg"
            alt="testimonials"
            objectFit={"contain"}
            w="100%"
            minH="300px"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
