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
    <Box minH="70vh">
      <Center>
        <Text py={3} fontWeight="bold" fontSize={{ base: "3xl", md: "5xl" }}>
          Testimonials
        </Text>
      </Center>
      <Flex
        my={20}
        p={3}
        direction={{ base: "column", md: "row" }}
        align="center"
        overflowX={{ md: "auto" }}
        maxW={"100%"}
      >
        {reviewlist.map((review) => (
          <Flex
            key={review.id}
            rounded={10}
            bgColor="gray.200"
            p={5}
            mx={2}
            my={{ base: 2, md: 5 }}
            shadow="lg"
            minW={{ base: "100%", md: "30%" }}
            minH="12rem"
          >
            <Avatar
              src={review.image}
              objectFit={"cover"}
              alt="review one"
              size="2xl"
            />
            <Flex ml={3} direction={"column"} textAlign="justify" w="100%">
              <Text fontSize={"xl"}>{review.name}</Text>
              <Text textAlign={"justify"}>{review.review}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
