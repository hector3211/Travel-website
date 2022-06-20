import React from "react";
import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
export default function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      size="md"
      mr={5}
      colorScheme={useColorModeValue("blue", "yellow")}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    ></IconButton>
  );
}
