import React from "react";
import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { MotionThemeButton } from "../layouts/motion";
export default function ToggleTheme() {
  const { toggleColorMode } = useColorMode();
  return (
    <MotionThemeButton>
      <IconButton
        size="md"
        mr={5}
        colorScheme={useColorModeValue("blue", "orange")}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      />
    </MotionThemeButton>
  );
}
