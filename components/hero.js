import { Box } from "@chakra-ui/react";

export default function hero() {
  return (
    <Box>
      <Box
        as="video"
        autoPlay={true}
        muted={true}
        loop={true}
        src="/videos/travel.mp4"
        objectFit="contain"
        sx={{ aspectRatio: "16/9" }}
      />
    </Box>
  );
}
