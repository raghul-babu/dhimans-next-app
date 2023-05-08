import { Layout } from "@/components/Layout";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Category, Product } from "@prisma/client";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Collection() {
  const [products, setProducts] = useState<Product[]>();
  const [filter, setFilter] = useState("Show All");
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/api/collection")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  //whats the difference in fetch by useSwr vs useEffect?
  const { data, error, isLoading } = useSwr<Product[]>(
    "/api/collection",
    fetcher
  );

  const { data: categories } = useSwr<Category[]>("/api/category", fetcher);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  if (isLoading)
    return (
      <Center h="100vh" w={"100vw"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  if (!data) return <p>No data</p>;

  function filterProdcutByCat(e: React.MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const f = target.innerText;
    setFilter(f);
    if (f === "Show All") setProducts(data);
    else {
      const category = categories?.find((cat) => cat.name === target.innerText);

      if (data && category) {
        setProducts(data.filter((d) => d.categoryIDs.includes(category.id)));
      }
    }
  }

  return (
    <Layout>
      <Heading mx="auto" mb={4} textAlign={"center"}>
        Collections
      </Heading>
      <Text fontSize={"md"} fontWeight={"semibold"} color={"gray.700"} ml={4}>
        Select category to filter:
      </Text>
      <Center my={4}>
        <ChevronLeftIcon fontSize="3xl" color={"gray.500"} />
        <Box overflowY="scroll" mx={"5"}>
          <Flex dir="row">
            <Box
              textAlign={"center"}
              key={"all"}
              bg={filter === "Show All" ? "teal.500" : "green.400"}
              borderRadius="25px"
              px={2}
              py={1}
              maxH={10}
              mx={2}
              minW={"max-content"}
              cursor={"pointer"}
              onClick={filterProdcutByCat}
            >
              <Text fontWeight="semibold" color={"white"}>
                Show All
              </Text>
            </Box>
            {categories?.map((category) => (
              <Box
                textAlign={"center"}
                key={category.id}
                bg={filter === category.name ? "teal.500" : "green.400"}
                borderRadius="25px"
                px={4}
                py={1}
                maxH={10}
                mx={2}
                minW={"max-content"}
                cursor={"pointer"}
                onClick={filterProdcutByCat}
              >
                <Text fontWeight="semibold" color={"white"}>
                  {category.name}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
        <ChevronRightIcon fontSize="3xl" color={"gray.600"} />
      </Center>
      <Center my={4}>
        <Text fontWeight={"semibold"} color={"gray.600"}>
          {filter !== "Show All" ? (
            <>
              Showing {products?.length} products for category &quot;{filter}
              &quot;
            </>
          ) : (
            <>Showing {data.length} products from all categories</>
          )}
        </Text>
      </Center>
      <SimpleGrid spacing={4} minChildWidth="300px" spacingY={6} mx={"auto"}>
        {products ? (
          products.map((product) => (
            <Card maxW="400" key={product.id} bg={"gray.50"}>
              <CardBody>
                <Image
                  src={product.images[0]}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <NextLink href="product/[id]" as={`product/${product.id}`}>
                    <Heading size="md" cursor="pointer">
                      {product.title}
                    </Heading>
                  </NextLink>
                  {/* <Text>
                  {product.description.split(" ").splice(0, 15).join(" ")}...
                </Text> */}
                  <Text color="blue.600">
                    ExWork Price: ₹{product.exworkPrice}
                  </Text>
                </Stack>
              </CardBody>
              {/* <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter> */}
            </Card>
          ))
        ) : (
          <Center my={4}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        )}
      </SimpleGrid>
    </Layout>
  );
}

// export async function getStaticProps() {
//     const results = await cloudinary.v2.search
//       .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
//       .sort_by('public_id', 'desc')
//       .max_results(400)
//       .execute()
//     let reducedResults: ImageProps[] = []
