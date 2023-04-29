import { Box, Button, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { Layout } from "@/components/Layout";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function ThankYou() {
  return (
    <Layout>
      <Stack
        textAlign="center"
        py={10}
        px={6}
        alignItems="center"
        minH="60vh"
        gap={8}
      >
        <Image src="/logo.png" height="200" width="400" alt="" />

        <Heading as="h2" size={{ base: "md", sm: "lg" }} mt={6}>
          Thank you for contacting us! <br />
          We shall get back to you very soon.
        </Heading>

        <Link href={"/collection"}>
          <Button variant={"solid"} size={"lg"}>
            Back to collections &nbsp; <BsArrowUpRightCircleFill />
          </Button>
        </Link>
      </Stack>
    </Layout>
  );
}
