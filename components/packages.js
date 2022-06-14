import React from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  Image,
  Center,
  Button,
} from "@chakra-ui/react";
import carouselList from "./carouselList";
import { ScaleBox } from "../layouts/motion";
export default function packages() {
  return (
    <Box id="packages" px={{ base: 1, md: 5 }}>
      <Center>
        <Text pb={3} fontWeight="bold" fontSize={{ base: "3xl", md: "5xl" }}>
          Packages
        </Text>
      </Center>
      <SimpleGrid py={10} columns={{ base: 1, md: 2, lg: 3 }} spacing={12}>
        {carouselList.map((city) => (
          <ScaleBox>
            <Flex
              key={city.id}
              direction="column"
              align="center"
              justify="center"
              bgColor="gray.200"
              p={3}
              rounded={10}
            >
              <Image
                src={city.image}
                alt="grid one photo"
                objectFit="cover"
                objectPosition="bottom"
                w="100%"
                h="300px"
                rounded={5}
              />
              <Flex direction={"column"} alignItems={"center"} p={2}>
                <Text
                  p={3}
                  textAlign={"justify"}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight={"thin"}
                >
                  {city.description}
                </Text>
                <Flex mt={5} w="100%" justify={"center"}>
                  <Button
                    border="1px solid #6C63FF"
                    shadow="lg"
                    w="100%"
                    size={"lg"}
                    fontSize="2xl"
                  >
                    {city.price}
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </ScaleBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}
