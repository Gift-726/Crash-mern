import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
import { PlusSquareIcon } from "@chakra-ui/icons"
import { Link } from "react-router-dom";
const Navbar = () => {

  const { colorMode, toggleColorMode} = useColorMode();
  return <Container maxW={"1143px"} px={8}>
    <Flex 
        h={16} 
        alignItems={"center"} 
        justifyContent={"space-between"}
        flexDir={{
            base: "column",
            sm: "row" 
        }}>
        <Text
            fontSize={{base: "22", sm: "28"}}
            fontWeight={"bold"}
            textAlign={"center"}
            textTransform={"uppercase"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
        >   
            <Link to={"/"}>Product Store 🛒🛒</Link>
        </Text>
        <HStack>
                <Link to={'/create'}>
                    <Button>
                        <PlusSquareIcon />
                    </Button>
                </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light"? <IoMoon />: <LuSun size={20}/>}
                    </Button>
        </HStack>
    </Flex>
  </Container>
}

export default Navbar
