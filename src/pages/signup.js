import { FacebookIcon } from "@/assets";
import { GoogleIcon } from "@/assets/GoogleIcon";
import { PathokButton } from "@/components/atoms";
import { Footer, Navbar } from "@/components/molecules";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <Box position="unset">
      <Navbar />
      <Box
        maxW={539}
        bgColor="#F7F5EE"
        padding={{ base: "5px 40px 5px 40px", md: "50px auto" }}
        borderRadius={10}
      >
        <Box paddingTop={10}>
          <Text textAlign="center" fontSize={25}>
            {" "}
            Create your Pathok Point Account
          </Text>
          <Box maxW={392} margin="10px auto">
            <FormControl w="100%">
              <FormLabel fontSize={16} fontWeight={400}>
                Full Name
              </FormLabel>
              <Input
                height={9}
                border="1px solid #000"
                type="text"
                placeholder="Enter your full name"
                fontSize={12}
              />
            </FormControl>
            <FormControl w="100%">
              <FormLabel fontSize={16} fontWeight={400}>
                Email
              </FormLabel>
              <Input
                height={9}
                border="1px solid #000"
                type="email"
                placeholder="Enter your email"
                fontSize={12}
              />
            </FormControl>
            <FormControl w="100%">
              <FormLabel fontSize={16} fontWeight={400}>
                Phone Number
              </FormLabel>
              <Input
                height={9}
                border="1px solid #000"
                type="number"
                placeholder="Enter your phone number"
                fontSize={12}
              />
            </FormControl>
            <FormControl w="100%">
              <FormLabel fontSize={16} fontWeight={400}>
                Password
              </FormLabel>
              <Input
                height={9}
                border="1px solid #000"
                type="password"
                placeholder="Enter password"
                fontSize={12}
              />
            </FormControl>
            <FormControl w="100%">
              <FormLabel fontSize={16} fontWeight={400}>
                Confirm Password
              </FormLabel>
              <Input
                height={9}
                border="1px solid #000"
                type="password"
                placeholder="Re-enter your password"
                fontSize={12}
              />
            </FormControl>
          </Box>
          <Box maxW={392} margin="20px auto">
            <PathokButton
              text="Create Account"
              width="100%"
              height={35}
              bgColor="#FFD707"
              fontSize="20px"
              fontWeight={400}
            ></PathokButton>
          </Box>
          <Text fontSize={20} textAlign="center">
            OR
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            maxW={392}
            margin="10px auto"
          >
            <Button
              color="#fff"
              bgColor="#4A65A3"
              width={190}
              height={35}
              _hover={{ color: "#fff", bgColor: "#666563" }}
              leftIcon={
                <Icon
                  as={() => (
                    <FacebookIcon height="27px" width="27px" color="#fff" />
                  )}
                  boxSize={4}
                />
              }
            >
              Facebook
            </Button>
            <Button
              color="#000"
              bgColor="#F8EAD9"
              width={190}
              height={35}
              leftIcon={
                <Icon
                  as={() => (
                    <GoogleIcon height="27px" width="27px" color="#fff" />
                  )}
                  boxSize={4}
                />
              }
            >
              Google
            </Button>
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            maxW={300}
            margin="25px auto 15px auto"
            paddingBottom={10}
          >
            <Text fontSize={16} fontStyle="italic">
              Already have account?
            </Text>
            <Link href="/login">
              <Text color="#4A65A3">Login Now !</Text>
            </Link>
          </Box>
        </Box>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Signup;
