import {
  Input,
  Box,
  Icon,
  Button,
  Text,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
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
    <div>
      <Box
        width="100%"
        height={125}
        bgColor="#20687B"
        position="absolute"
        borderRadius="0 0 20px 20px"
      >
        <Box display="flex">
          <Image
            style={{ marginTop: "15px", marginLeft: "175px" }}
            src="/images/PathokIcon.png"
            alt="PathokIcon"
            position="absolute"
            width={232}
            height={46}
          />
          <InputGroup
            width="40%"
            style={{ marginTop: "20px", marginLeft: "20px" }}
          >
            <InputLeftElement>
              <Button
                width="15%"
                height={37}
                bgColor="#E4DADA"
                borderRadius="20px"
                fontSize={15}
                fontWeight="light"
              >
                {" "}
                All
                <TriangleDownIcon fontSize={10} style={{ marginLeft: "3px" }} />
              </Button>
            </InputLeftElement>
            <Input
              type="text"
              placeholder="   Search by Books"
              width="100%"
              height={39}
              bgColor="#fff"
              borderRadius="20px "
            />
            <InputRightElement>
              <Button
                width="15%"
                height={39}
                bgColor="#FFD707"
                borderRadius="20px"
              >
                <SearchIcon fontSize={20} />
              </Button>
            </InputRightElement>
          </InputGroup>

          <Box
            width={34}
            height={26}
            display="flex"
            justifyContent="center"
            style={{ marginTop: "27px", marginLeft: "50px" }}
          >
            <Icon as={FaShoppingCart} color="#fff" fontSize={30} />
            <Text color="#fff" fontSize={20} paddingLeft={1}>
              0
            </Text>
          </Box>
          <Box style={{ marginTop: "27px", marginLeft: "50px" }}>
            <PathokButton
              text="Login"
              width={105}
              height={30}
              bgColor="#FFD707"
              fontSize="20px"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-evenly"
          color="#fff"
          fontSize={18}
          style={{ marginTop: "15px" }}
        >
          {navLinks.map((link, index) => {
            return (
              <ul>
                <Link href={link.path}>
                  <li textDecoration="none" key={index}>
                    {link.name}
                  </li>
                </Link>
              </ul>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};
