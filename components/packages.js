import React from "react";
import { Box, SimpleGrid, Flex, Text, Image, Center } from "@chakra-ui/react";
import carouselList from "./carouselList";
export default function packages() {
  return (
    <Box>
      <Center>
        <Text py={3} fontWeight="bold" fontSize={{ base: "3xl", md: "5xl" }}>
          Packages
        </Text>
      </Center>
      <SimpleGrid columns={3} spacing={10}>
        {carouselList.map((city) => (
          <Flex
            key={city.id}
            direction="column"
            align="center"
            justify="center"
          >
            <Image
              src={city.image}
              alt="grid one photo"
              objectFit="cover"
              objectPosition="bottom"
              w="100%"
              h="300px"
              rounded={10}
            />
            <Flex
              mt={2}
              bgColor="gray.200"
              direction={"column"}
              justify={"space-between"}
              alignItems={"center"}
              p={5}
              rounded={10}
            >
              <Text textAlign={"justify"} fontSize={"xl"} fontWeight={"thin"}>
                {city.description}
              </Text>
              <Center>
                <Text fontSize="lg">{city.price}</Text>
              </Center>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}
