import React from "react";
import { Box, SimpleGrid, Flex, Text, Image, Center } from "@chakra-ui/react";
import carouselList from "./carouselList";
export default function packages() {
  return (
    <Box id="packages" px={3}>
      <Center>
        <Text pb={3} fontWeight="bold" fontSize={{ base: "3xl", md: "5xl" }}>
          Packages
        </Text>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {carouselList.map((city) => (
          <Flex
            key={city.id}
            direction="column"
            align="center"
            justify="center"
            bgColor="gray.200"
            p={5}
            rounded={10}
          >
            <Image
              src={city.image}
              alt="grid one photo"
              objectFit="cover"
              objectPosition="bottom"
              w="100%"
              h="300px"
              roundedTop={10}
            />
            <Flex
              direction={"column"}
              alignItems={"center"}
              p={2}
              roundedBottom={10}
            >
              <Text
                p={3}
                textAlign={"justify"}
                fontSize={{ base: "md", md: "lg" }}
                fontWeight={"thin"}
              >
                {city.description}
              </Text>
              <Flex mt={5} w="100%" justify={"end"}>
                <Text fontSize="2xl">{city.price}</Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}
