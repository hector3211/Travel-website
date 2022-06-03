import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Input,
  Center,
} from "@chakra-ui/react";

export default function hero() {
  return (
    <Box bgColor="red" position="relative" width="100%">
      <Box
        position="absolute"
        top={0}
        right={0}
        minWidth="100%"
        minHeight="100vh"
        as="video"
        autoPlay={true}
        muted={true}
        loop={true}
        src="/videos/travel.mp4"
        objectFit="cover"
        sx={{ aspectRatio: "16/9" }}
      />
      <Flex
        flexShrink={1}
        width={{ base: "100%", md: "45%", lg: "25%" }}
        position="absolute"
        direction="column"
        justify="space-evenly"
        left={{ base: 0, md: "25%", lg: "38%" }}
        top="25rem"
      >
        <Flex align="center" justify="center">
          <Text fontSize="2xl" fontWeight="semibold">
            Travel
          </Text>
          <Text ml={1}>Agency</Text>
        </Flex>
        <Box
          w="100%"
          p={5}
          backdropFilter="auto"
          backdropBlur="4px"
          border="1px solid white"
          rounded={5}
        >
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <Center>
              <Button mt={5}>Submit</Button>
            </Center>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
}
