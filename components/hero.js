import { Box, Flex, Button, Center, Link, Text } from "@chakra-ui/react";
import { ScaleButton } from "../layouts/motion";
import { signInWithGoogle, signOutUser, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Hero() {
  const [signIn, setSignIn] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
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
        minH="15rem"
        position="absolute"
        align="center"
        justify="center"
        right={0}
        top="35%"
        p={5}
        rounded={10}
      >
        <Text fontSize={"3xl"} color="white">
          Welcome {user}
        </Text>
        <Center>
          {signIn ? (
            <ScaleButton>
              <Button
                width={"12rem"}
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
            <ScaleButton>
              <Button
                width={"12rem"}
                height="4rem"
                color="white"
                bgColor={"#6C63FF"}
                _hover={{ bgColor: "#5F57BD" }}
                size="lg"
                mt={{ base: 3, md: 1 }}
                onClick={handleGoogle}
              >
                Login
              </Button>
            </ScaleButton>
          )}
        </Center>
      </Flex>
    </Box>
  );
}
