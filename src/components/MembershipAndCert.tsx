import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../styles/Membership.module.css";

export default function MembershipAndCert() {
  return (
    <Box mt={2} px={2}>
      <Center mb="2">
        <Heading as={"h2"} fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "green.300",
              zIndex: -1,
            }}
          >
            Memberships and Certifications
          </Text>
        </Heading>
      </Center>

      <motion.div className={styles.carousel}>
        <motion.div
          animate={{
            x: [0, -1200, 0],
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
          }}
          className={styles.innercarousel}
        >
          <motion.div className={styles.item}>
            <img src="memberships/gst.png" alt="" />
          </motion.div>
          <motion.div className={styles.item}>
            <img src="memberships/dgft.jpg" alt="" />
          </motion.div>
          <motion.div className={styles.item}>
            <img src="memberships/iec.webp" alt="" />
          </motion.div>
          <motion.div className={styles.item}>
            <img src="memberships/msme.png" alt="" />
          </motion.div>
          <motion.div className={styles.item}>
            <img src="memberships/pngegg.png" alt="" />
          </motion.div>
          <motion.div className={styles.item}>
            <img src="memberships/udyogaadhaar.png" alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
}
