import {
  Box,
  Flex,
  Button,
  Center,
  Link,
  Text,
  Icon,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
  ModalFooter,
} from "@chakra-ui/react";
import { ScaleButton } from "../layouts/motion";
import { signInWithGoogle, signOutUser, auth } from "../firebase";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { EmailIcon } from "@chakra-ui/icons";
export default function Hero() {
  const [signIn, setSignIn] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  useEffect(() => {
    if (signIn) {
      setSignIn(true);
    } else {
      setSignIn(false);
    }
  }, [signIn]);
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        localStorage.setItem("user", user.displayName.split(" ")[0]);
        setUser(localStorage.getItem("user", user.displayName.split(" ")[0]));
        setSignIn(true);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        localStorage.removeItem("user");
        setSignIn(false);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        direction={"column"}
        minWidth={"100%"}
        minH="20rem"
        position="absolute"
        align="center"
        justify="center"
        right={0}
        top="35%"
        p={5}
        rounded={10}
      >
        <Text fontSize={"3xl"} color="white">
          Welcome {signIn && user}
        </Text>
        <Center>
          {signIn ? (
            <ScaleButton>
              <Button
                width={"15rem"}
                height="4rem"
                color="white"
                bgColor={"#6C63FF"}
                _hover={{ bgColor: "#5F57BD", textDecoration: "none" }}
                size="lg"
                mt={{ base: 3, md: 1 }}
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </ScaleButton>
          ) : (
            <Flex direction={"column"}>
              <ScaleButton>
                <Button
                  my={3}
                  width={"15rem"}
                  height="4rem"
                  color="white"
                  bgColor={"#6C63FF"}
                  _hover={{ bgColor: "#5F57BD" }}
                  size="lg"
                  mt={{ base: 3, md: 1 }}
                  onClick={handleGoogle}
                >
                  <Icon boxSize={"9"} as={FcGoogle} />
                  Login with Google
                </Button>
              </ScaleButton>
              <ScaleButton>
                <Button
                  width={"15rem"}
                  height="4rem"
                  color="white"
                  bgColor={"#6C63FF"}
                  _hover={{ bgColor: "#5F57BD" }}
                  size="lg"
                  mt={{ base: 3, md: 1 }}
                  onClick={onOpen}
                >
                  <Icon boxSize={10} as={EmailIcon} pr={3} />
                  Login with Email
                </Button>
              </ScaleButton>
            </Flex>
          )}
        </Center>
        <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Please Sign up</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} type="email" />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                color="white"
                bgColor={"#6C63FF"}
                _hover={{ bgColor: "#5F57BD" }}
                size="lg"
              >
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
}
