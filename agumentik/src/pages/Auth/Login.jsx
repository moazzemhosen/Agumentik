import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../../Redux/auth/action";
import { LOGINREJECTED, LOGINSUCCESS } from "../../Redux/auth/action.types";

export default function Login() {
  const toast = useToast();
  const navigate=useNavigate()
  const location=useLocation()
  const dispatch=useDispatch()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit=()=>{
    console.log(form);
    dispatch(login(form)).then((res) => {
      if (res.status === LOGINSUCCESS) {
        toast({
          title: "Logedin Successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });

        // if the user is logined Successfully redirect him to the homepage
        setTimeout(() => {
          toast({
            title: `Welcome HOME ${res.user.name}`,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
          navigate(location?.state ? location.state.from.pathname: "/");
        }, 2000);
      } else if (res.status === LOGINREJECTED) {
        toast({
          title: "Invalid Email or Password !",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "bottom",
        });
      }
    });
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handlechange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={form.password}
                onChange={handlechange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Box
                  onClick={() =>
                    toast({
                      title: "Don't worry we get back soon.",
                      description: "We've created your account for you.",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    })
                  }
                  color={"blue.400"}
                >
                  Forgot password?
                </Box>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have an account?{" "}
                <Link to="/register" color={"blue.400"}>
                  Sign Up 
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
