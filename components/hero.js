import {
  Box,
  Text,
  Icon,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Input,
  Center,
  Divider,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
export default function hero() {
  return (
    <Box position="relative">
      <Box
        minWidth="100%"
        minHeight="100vh"
        as="video"
        autoPlay={true}
        muted={true}
        loop={true}
        src="/videos/traveltwo.mp4"
        objectFit="cover"
        sx={{ aspectRatio: "16/9" }}
      />
      <Flex
        flexShrink={1}
        minWidth={{ base: "80%", md: "75%", lg: "30%" }}
        position="absolute"
        direction="column"
        align="center"
        right={{ base: "9%", md: "12%", lg: "5%" }}
        top="18rem"
        maxHeight={{ base: "20rem", md: "25rem" }}
        p={{ md: 5 }}
        backdropFilter="auto"
        backdropBlur="8px"
        border="1px solid white"
        rounded={20}
      >
        <Button p={7} mt={3} colorScheme={"blackAlpha"}>
          <Icon boxSize={9} as={FcGoogle} mr={5} />
          <Text fontSize={"xl"}>Connect with Google</Text>
        </Button>
        <Flex justify={"space-evenly"} align={"center"}>
          <Divider pt={5} width={{ base: "9rem", md: "11rem" }} />
          <Text color="white" mt={2} px={2}>
            Or
          </Text>
          <Divider pt={5} width={{ base: "9rem", md: "11rem" }} />
        </Flex>

        <FormControl p={7} minHeight={"30rem"}>
          <FormLabel
            fontSize={{ md: "xl" }}
            color="white"
            mt={{ base: 10, md: 20 }}
            htmlFor="email"
          >
            Email address
          </FormLabel>
          <Input id="email" type="email" />

          <Center>
            <Button size="lg" mt={{ base: 3, md: 5 }}>
              Submit
            </Button>
          </Center>
        </FormControl>
      </Flex>
    </Box>
  );
}
