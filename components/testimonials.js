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
    <Box>
      <Center>
        <Text py={3} fontWeight="bold" fontSize={{ base: "3xl", md: "5xl" }}>
          Testimonials
        </Text>
      </Center>
      <Flex direction={{ base: "column-reverse", md: "row" }} justify="center">
        <Flex
          p={{ base: 2, md: 5 }}
          direction={"column"}
          align="end"
          maxH="33rem"
          overflowY={{ md: "auto" }}
        >
          {reviewlist.map((review) => (
            <Flex
              key={review.id}
              rounded={5}
              bgColor="gray.100"
              p={2}
              shadow="lg"
              my={2}
              maxW={{ base: "100%", md: "80%" }}
              maxH="12rem"
            >
              <Avatar
                src={review.image}
                objectFit={"cover"}
                alt="review one"
                size="2xl"
                name="Jess O."
              />
              <Flex ml={3} direction={"column"} w="100%">
                <Text>{review.name}</Text>
                <Text textAlign={"justify"}>{review.review}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Box p={2}>
          <Image
            mt={{ base: 1, md: 0 }}
            src="/images/review.svg"
            alt="testimonials"
            objectFit={"contain"}
            w="100%"
            minH="300px"
          />
        </Box>
      </Flex>
    </Box>
  );
}
