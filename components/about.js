import {
  Container,
  Flex,
  Text,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

export default function about() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      p={10}
      bgGradient="linear(to-b, #CBF4F7, #E8E9E9)"
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <Image
          rounded={20}
          alt="about picture one"
          objectFit={"cover"}
          src="/images/gridthree.jpg"
          height="300px"
          minW="100%"
        />

        <Image
          rounded={20}
          alt="about picture two"
          objectFit={"cover"}
          src="/images/gridsix.jpg"
          height="300px"
          minWidth="100%"
        />
      </SimpleGrid>
      <Container>
        <Flex justify="start" direction={"column"}>
          <Text>About Us</Text>
          <Text>Lorem text</Text>
        </Flex>
      </Container>
    </Flex>
  );
}
