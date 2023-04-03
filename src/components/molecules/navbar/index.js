import {
  Input,
  Box,
  Icon,
  Button,
  Text,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  list,
  transition,
} from "@chakra-ui/react";
import {
  List,
  UnorderedList,
} from "@chakra-ui/react";

import { FaShoppingCart } from "react-icons/fa";
import { SearchIcon, TriangleDownIcon } from "@chakra-ui/icons";
import React from "react";
import Image from "next/image";
import { PathokButton } from "@/components/atoms";
import Link from "next/link";
import { navLinks } from "@/utils/navitemdata";

export const Navbar = () => {
  return (
    <>
      <Box
        width="100%"
        height={125}
        bgColor="#20687B"
        position="absolute"
        borderRadius="0 0 20px 20px"
      >
        <Box
          display="flex"
          alignItems="center"
          maxW="1110px"
          justifyContent="space-evenly"
          margin="13px auto"
          paddingRight="15px"
        >
          <Image
            // style={{ marginTop: "15px", marginLeft: "175px" }}
            src="/images/PathokIcon.png"
            alt="PathokIcon"
            position="absolute"
            width={232}
            height={46}
          />
          <Box>
            <InputGroup width="565px">
              <InputLeftElement width="70px">
                <Button
                  width="100%"
                  height={37}
                  bgColor="#E4DADA"
                  borderRadius="20px 0 0 20px"
                  fontSize={15}
                  fontWeight="thin"
                >
                  {" "}
                  All
                  <TriangleDownIcon
                    fontSize={10}
                    style={{ marginLeft: "3px" }}
                  />
                </Button>
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search by Books"
                width="100%"
                // height={39}
                bgColor="#fff"
                borderRadius="20px"
                paddingLeft="80px"
              />
              <InputRightElement>
                <Button
                  width="50px"
                  height={39}
                  bgColor="#FFD707"
                  borderRadius="0px 20px 20px 0px"
                  css={{
                    ":hover": {
                      backgroundColor: "#E4DADA",
                    },
                  }}
                >
                  <SearchIcon fontSize={20} />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          <Box
            width={34}
            height={26}
            display="flex"
            justifyContent="center"
            // style={{ marginTop: "27px", marginLeft: "50px" }}
          >
            <Icon as={FaShoppingCart} color="#fff" fontSize={30} />
            <Text color="#fff" fontSize={20} paddingLeft={1}>
              0
            </Text>
          </Box>
          <Box>
            <PathokButton
              text="Login"
              width={105}
              height={30}
              bgColor="#FFD707"
              fontSize="20px"
              fontWeight={400}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-evenly"
          color="#fff"
          fontSize={18}
          maxW="1034px"
          m="0 auto"
        >
          {navLinks.map((link, index) => {
            return (
              <UnorderedList key={index}>
                <List
                  listStyleType="none"
                  css={{
                    ":hover": {
                      fontSize: "18.5px",
                      color: "#FFD707",

                      transition: "color 0.5s ease",
                    },
                  }}
                >
                  <Link href={link.path}>{link.name}</Link>
                </List>
              </UnorderedList>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
