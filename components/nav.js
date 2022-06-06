import {
  Box,
  Flex,
  Text,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
export default function nav() {
  const [navbar, setNavBar] = useState(false);
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
      bgColor={navbar ? "black" : "transparent"}
      zIndex={1}
      justify={"space-between"}
      align="center"
      position="fixed"
      width="100%"
      minHeight="2rem"
      py={3}
      px={20}
    >
      <Text fontSize={"3xl"}>Travel</Text>
      <Flex>
        <Menu>
          <MenuButton
            _focus={"none"}
            bgColor={"whiteAlpha.50"}
            _hover={{ bgColor: "whiteAlpa.100" }}
            as={IconButton}
          >
            <Icon boxSize={6} as={BiMenu} />
          </MenuButton>
          <MenuList bgColor={"whiteAlpha.2000"}>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Packages</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
