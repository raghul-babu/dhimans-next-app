import { Layout } from "@/components/Layout";
import MembershipAndCert from "@/components/MembershipAndCert";
import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import styles from "../styles/Landing.module.css";

import Service from "@/components/Service";
import Link from "next/link";
import { BsArrowDownCircle, BsArrowUpRightCircleFill } from "react-icons/bs";
import { BiMessageDots } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhimans</title>
        <meta name="description" content="Dhimans" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <Layout>
          <Heading
            as={"h1"}
            textAlign={"center"}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            // color={"green.400"}
          >
            Welcome to the world of
            <br />
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
              Metal Wall Art
            </Text>
          </Heading>
          <Center>
            <Flex alignItems={"center"} gap={4} my={6}>
              <Link href={"/collection"}>
                <Button variant={"solid"} size={"lg"}>
                  Explore &nbsp; <BsArrowUpRightCircleFill />
                </Button>
              </Link>
              <Link href={"#"}>
                <Button variant={"outline"} size={"lg"}>
                  Learn More &nbsp; <BsArrowDownCircle />
                </Button>
              </Link>
            </Flex>
          </Center>
          <AnimatePresence>
            <motion.div
              className={styles.hero}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              exit={{ opacity: 0 }}
            >
              <article className={styles.article}>
                <img src="/img2.jpeg" className={styles.img} />
              </article>
              <article className={styles.article}>
                <img src="/img4.jpeg" className={styles.img} />
              </article>
              <article className={styles.article} id="img1">
                <img src="/img1.jpeg" className={styles.img} />
              </article>
              <article className={styles.article}>
                <img src="/img5.jpeg" className={styles.img} />
              </article>
              <article className={styles.article}>
                <img src="/img3.jpeg" className={styles.img} />
              </article>
            </motion.div>
          </AnimatePresence>
          <Service />
          <MembershipAndCert />
          <Center mt={8}>
            <Flex
              alignItems={"center"}
              gap={4}
              my={6}
              direction={{ base: "column", sm: "row" }}
            >
              <Link href={"/collection"}>
                <Button variant={"solid"} size={"lg"}>
                  Browse our collections &nbsp; <BsArrowUpRightCircleFill />
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button variant={"outline"} size={"lg"}>
                  Contact Us &nbsp; <BiMessageDots />
                </Button>
              </Link>
            </Flex>
          </Center>
        </Layout>
      </main>
    </>
  );
}
