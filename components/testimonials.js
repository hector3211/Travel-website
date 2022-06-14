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
export default function testimonials() {
  return (
    <Flex
      id="testimonials"
      direction={"column"}
      align="center"
      justify="space-around"
      my={{ base: 5, md: 10 }}
    >
      <Text fontWeight="bold" fontSize={{ base: "4xl", md: "5xl" }}>
        Testimonials
      </Text>
      <Flex
        py={{ md: 20 }}
        px={1}
        direction={{ base: "column", md: "row" }}
        align="center"
        overflowX={{ md: "auto" }}
        maxW={"100%"}
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
            minW={{ base: "100%", md: "30%" }}
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
