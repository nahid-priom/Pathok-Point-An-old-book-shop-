import {
  Input,
  Box,
  Icon,
  Button,
  Text,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { List, UnorderedList } from "@chakra-ui/react";

import { FaShoppingCart } from "react-icons/fa";
import { SearchIcon, TriangleDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import Image from "next/image";
import { PathokButton } from "@/components/atoms";
import Link from "next/link";
import { navLinks } from "@/utils/navitemdata";

export const Navbar = () => {
  return (
    <>
      <Box
        w="100%"
        height={{ base: "140px", md: "125px" }}
        bgColor="#20687B"
        position="unset"
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          maxW="1110px"
          justifyContent="space-evenly"
          margin="0 auto"
          paddingTop={3}
        >
          <Box display={{ base: "none", md: "block" }}>
            <Link href="/">
              <Image
                src="/images/PathokIcon.png"
                alt="PathokIcon"
                width={260}
                height={46}
              />
            </Link>
          </Box>

          <Box
            display={{ base: "flex", md: "none" }}
            justifyContent="space-around"
            width="100%"
          >
            <Menu>
              <MenuButton
                as={IconButton}
                
                icon={
                  <HamburgerIcon
                    display={{ base: "block", md: "none" }}
                    color="#fff"
                    fontSize={25}
                  />
                }
                variant="outline"
              />
              <MenuList zIndex={5}>
                <MenuItem as="a" href="/login">Log in</MenuItem>
                <MenuItem as="a" href="/signup">Sign Up</MenuItem>
                <MenuItem as="a" href="#">Fiction</MenuItem>
                <MenuItem as="a" href="#">Non-Fiction</MenuItem>
                <MenuItem as="a" href="#">Authors</MenuItem>
                <MenuItem as="a" href="#">Publishers</MenuItem>
                <MenuItem as="a" href="#">Islamic Books</MenuItem>
                <MenuItem as="a" href="#">University Books</MenuItem>
                <MenuItem as="a" href="#">HSC Admission</MenuItem>
                
              </MenuList>
            </Menu>
            {/* <HamburgerIcon
              display={{ base: "block", md: "none" }}
              color="#fff"
              fontSize={33}
            /> */}
            <Link href="/">
              <Image
                src="/images/PathokIcon.png"
                alt="PathokIcon"
                width={260}
                height={46}
              />
            </Link>
            <Icon
              as={FaShoppingCart}
              display={{ base: "block", md: "none" }}
              color="#fff"
              fontSize={30}
            />
          </Box>

          <Box>
            <InputGroup width={{ base: "350px", md: "450px" }}>
              <InputLeftElement width="12%">
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
                bgColor="#fff"
                borderRadius="20px"
                paddingLeft="80px"
              />
              <InputRightElement>
                <Button
                  width="12%"
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
            display={{ base: "none", md: "flex" }}
            justifyContent="center"
          >
            <Icon as={FaShoppingCart} color="#fff" fontSize={30} />
            <Text
              color="#fff"
              fontSize={20}
              paddingLeft={1}
              top={{ base: "0" }}
            >
              0
            </Text>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Link href="/login">
              <PathokButton
                text="Login"
                width={105}
                height={30}
                bgColor="#FFD707"
                fontSize="20px"
                fontWeight={400}
              ></PathokButton>
            </Link>
          </Box>
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          justifyContent="space-evenly"
          color="#fff"
          fontSize={18}
          maxW="1034px"
          m="15px auto"
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
