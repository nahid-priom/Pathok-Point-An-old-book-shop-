import { Box, Text, Divider, Image } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box
      width="100%"
      height="100%"
      bgColor="#20687B"
      borderRadius={{ base: "0px", md: "20px 20px 0 0" }}
      // paddingLeft={{ base: "30px", md:"150px" }}
    >
      <Box
        display="flex"
        flexDirection="row"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        justifyContent="space-around"
        alignItems="baseline"
        paddingTop={{ base: "20px", md: "40px" }}
        paddingLeft={{ base: "30px", md: "300px" }}
      >
        <Box
          fontSize={{ base: "12px", md: "16px" }}
          color="#fff"
          paddingBottom="20px"
          flex={{ base: "50%", md: "1" }}
        >
          <Text fontSize={{ base: "16px", md: "23px" }} fontWeight={600}>
            Useful Links
          </Text>
          <Text>Categories</Text>
          <Text>Best Selling Books</Text>
          <Text>Authors</Text>
          <Text>Publications</Text>
        </Box>
        <Box
          color="#fff"
          fontSize={{ base: "12px", md: "16px" }}
          paddingBottom="20px"
          flex={{ base: "50%", md: "1" }}
          paddingLeft={{ base: "35px", md: "0px" }}
        >
          <Text fontSize={{ base: "16px", md: "23px" }} fontWeight={600}>
            Help
          </Text>
          <Text>Books</Text>
          <Text>Electronics</Text>
          <Text>Accessories</Text>
          <Text>Gift Card</Text>
          <Text>Stationery</Text>
        </Box>
        <Box
          color="#fff"
          fontSize={{ base: "12px", md: "16px" }}
          paddingBottom="20px"
          flex={{ base: "1px", md: "1" }}
        >
          <Text fontSize={{ base: "16px", md: "23px" }} fontWeight={600}>
            Payment
          </Text>
          <Text>Order Track</Text>
          <Text>Contact Us</Text>
          <Text>Find My Product</Text>
          <Text>Guide</Text>
          <Text>FAQ</Text>
          <Text>FAQ – Happy Return</Text>
        </Box>
      </Box>
      <Divider orientation="horizontal" marginTop={5}></Divider>
      <Box
        display={{ base: "flex", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Text fontSize={24} color="#fff" padding={{ md: "15px" }}>
            We accept payment via
          </Text>
          <Box display="flex" justifyContent="center">
            <Image
              src="/images/Bkash.png"
              width={{ base: "80px", md: "144px" }}
              height={{ base: "50px", md: "70px" }}
              alt="BkashImg"
            ></Image>
            <Image
              src="/images/Nagad.png"
              width={{ base: "80px", md: "144px" }}
              height={{ base: "50px", md: "70px" }}
              alt="BkashImg"
            ></Image>
          </Box>
        </Box>
      </Box>
      <Divider orientation="horizontal"></Divider>
      <Text
        textAlign="center"
        color="#fff"
        marginTop={5}
        fontSize={12}
        paddingBottom={3}
      >
        Copyright © 2023 Pahtok Point
      </Text>
    </Box>
  );
};
