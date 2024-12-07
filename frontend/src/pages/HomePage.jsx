import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductstore } from "../store/product";
import { ProductCard } from "../components/ProductCard.jsx";

const HomePage = () => {

  const {fetchProduct, products} = useProductstore();
  useEffect(() => { 
    fetchProduct();
  }, [fetchProduct])

  console.log(products)
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          Current Products  🚀 🚀
        </Text>
        <SimpleGrid columns={{
          base: 1,
          md: 2,
          lg: 3,
        }} spacing={10} w={"full"}>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
  ))}
        </SimpleGrid>
        {products.length == 0 && (
          <Text fontSize="xl" fontWeight={"bold"} textAlign={"center"} color="gray.500">
          No products Found 😥
          <Link to={"/create"}>
            <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
              Create a product
            </Text>
          </Link>
        </Text>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage