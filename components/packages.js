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
import { PackagesList } from "./PackagesList";
import { ScaleButton } from "../layouts/motion";
export default function Packages() {
  return (
    <Box id="packages" px={{ base: 3, md: 5 }}>
      <Center>
        <Text pb={3} fontWeight="bold" fontSize={{ base: "3xl", md: "5xl" }}>
          Packages
        </Text>
      </Center>
      <SimpleGrid py={10} columns={{ base: 1, md: 2, lg: 3 }} spacing={12}>
        {PackagesList.map((city) => (
          <Flex
            key={city.id}
            direction="column"
            align="center"
            justify="center"
            rounded={10}
            shadow="dark-lg"
          >
            <Image
              src={city.img}
              alt={`photo ${city.id}`}
              objectFit="cover"
              objectPosition="bottom"
              w="100%"
              h="300px"
              roundedTop={10}
            />
            <Flex direction={"column"} alignItems={"center"} p={2}>
              <Text fontSize={{ base: "2xl", md: "3xl" }}>{city.name}</Text>
              <Text
                p={3}
                textAlign={"justify"}
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight={"thin"}
              >
                {city.description}
              </Text>
              <Flex my={3} w="100%" justify={"center"}>
                <ScaleButton>
                  <Button
                    color="white"
                    bgColor="#6C63FF"
                    _hover={{ bgColor: "#5F57BD", textDecoration: "none" }}
                    w="15rem"
                    size={"lg"}
                    fontSize="xl"
                  >
                    Book Now
                  </Button>
                </ScaleButton>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}
