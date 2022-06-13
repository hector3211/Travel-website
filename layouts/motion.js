import { motion, isValidMotionProp } from "framer-motion";
import { chakra } from "@chakra-ui/react";
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export const StyledBox = ({ children, delay = 0 }) => {
  return (
    <ChakraBox
      initial={{ width: "0" }}
      animate={{ width: "100%" }}
      transition={{ type: "spring", duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </ChakraBox>
  );
};

export const ScaleBox = ({ children, delay = 0 }) => {
  return (
    <ChakraBox whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
      {children}
    </ChakraBox>
  );
};
