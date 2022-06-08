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
    <SimpleGrid
      bgGradient="linear(to-b, #CBF4F7,#E8E9E9 )"
      columns={{ base: 1, md: 2 }}
      spacing={3}
      py={3}
    >
      <Image
        src="/images/officetwo.jpg"
        alt="office one"
        objectFit="cover"
        objectPosition="bottom"
        w="100%"
        h="400px"
      />
      <Container maxW={"100%"}>
        <Flex justify="start" direction={"column"}>
          <Text>About Us</Text>
          <Text>Lorem text</Text>
        </Flex>
      </Container>
      <Container maxW={"100%"}>
        <Flex justify="start" direction={"column"}>
          <Text>About Us</Text>
          <Text>Lorem text</Text>
        </Flex>
      </Container>
      <Image
        src="/images/officetwo.jpg"
        alt="office one"
        objectFit="cover"
        objectPosition="bottom"
        w="100%"
        h="400px"
      />
    </SimpleGrid>
  );
}
