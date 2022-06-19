// framer motion styled sections
import { motion, isValidMotionProp } from "framer-motion";
import { chakra } from "@chakra-ui/react";
export const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export const StyledBox = ({ children, delay = 0 }) => {
  return (
    <ChakraBox
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </ChakraBox>
  );
};

export const ScaleButton = ({ children }) => {
  return (
    <ChakraBox whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
      {children}
    </ChakraBox>
  );
};

export const StyledSection = ({ children }) => {
  return (
    <ChakraBox
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 0.8,
        delay: 0.3,
      }}
    >
      {children}
    </ChakraBox>
  );
};
