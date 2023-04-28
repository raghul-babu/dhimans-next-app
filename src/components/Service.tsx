import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function Service() {
  const text = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <Box my={10} py={18} px={2}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={text}
      >
        <Text
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          fontWeight={"500"}
        >
          We export <br />
          <Text
            as={"span"}
            fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
            fontWeight={"600"}
          >
            High Quality, Curated and Customized{" "}
          </Text>{" "}
          <br />
          Metal Wall Art from India for the World.
        </Text>
      </motion.div>
    </Box>
  );
}
