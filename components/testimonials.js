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
import { reviewlist } from "./reviewlist";
export default function Testimonials() {
  return (
    <Flex
      id="testimonials"
      direction={"column"}
      align="center"
      justify="space-around"
      my={{ base: 5, md: 20 }}
    >
      <Text pb={3} fontWeight="bold" fontSize={{ base: "4xl", md: "5xl" }}>
        Testimonials
      </Text>
      <Flex
        rounded={10}
        shadow={{ base: "none", md: "dark-lg" }}
        py={10}
        px={5}
        direction={{ base: "column", md: "row" }}
        align="center"
        overflowX={{ md: "auto" }}
        maxW={{ base: "100%", md: "90%" }}
      >
        {reviewlist.map((review) => (
          <Flex
            key={review.id}
            rounded={10}
            bgColor="gray.100"
            p={5}
            mx={2}
            my={{ base: 2, md: 5 }}
            shadow="lg"
            minW={{ base: "100%", md: "40%" }}
          >
            <Avatar
              src={review.image}
              objectFit={"cover"}
              alt="review one"
              size="2xl"
            />
            <Flex ml={3} direction={"column"} textAlign="justify" w="100%">
              <Text fontSize={"xl"}>{review.name}</Text>
              <Text textAlign={"justify"} fontSize={{ base: "md", md: "lg" }}>
                {review.review}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
