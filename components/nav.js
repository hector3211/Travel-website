import {
  Link,
  Flex,
  Text,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BiMenu } from "react-icons/bi";
import React, { useState } from "react";

export default function Nav() {
  const [navbar, setNavBar] = useState(false);
  // this function will toggle (setNavBar) when user scrolls down to a certain point causing the narbar color to change
  const changeBackground = () => {
    if (window.scrollY > 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <Flex
      bgColor={navbar ? "#6C63FF" : "transparent"}
      backdropFilter={navbar && "auto"}
      backdropBlur={navbar && "20px"}
      zIndex={10}
      justify={"space-between"}
      align="center"
      position="fixed"
      width="100%"
      minHeight="0.5rem"
      py={navbar ? 1 : 5}
      px={{ base: 30, md: 20 }}
    >
      <Text fontSize={navbar ? "3xl" : "4xl"}>Travel</Text>
      <Flex>
        <Menu>
          <MenuButton
            border={navbar ? "1px solid black" : "none"}
            bgColor={"transparent"}
            _hover={{ bgColor: "transparent" }}
            _active={{ border: "1px solid black" }}
            as={IconButton}
          >
            <Icon boxSize={{ base: 7, md: 8 }} as={BiMenu} />
          </MenuButton>

          <MenuList>
            <MenuItem>
              <NextLink href="/" passHref>
                <Link w="100%">Home</Link>
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="#about" passHref>
                <Link w="100%">About</Link>
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="#partners" passHref>
                <Link w="100%">Partners</Link>
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="#testimonials" passHref>
                <Link w="100%">Testimonials</Link>
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="#packages" passHref>
                <Link w="100%">Packages</Link>
              </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
