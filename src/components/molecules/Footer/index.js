import { Box, Text, Divider, Image } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box
      width="100%"
      height="430px"
      bgColor="#20687B"
      borderRadius="20px 20px 0 0"
      marginTop={10}
    >
      <Box display="flex" justifyContent="space-around">
        <Box color="#fff" marginTop={70}>
          <Text fontSize={23} fontWeight={600} marginBottom={5}>
            Useful Links
          </Text>
          <Text>Categories</Text>
          <Text>Best Selling Books</Text>
          <Text>Authors</Text>
          <Text>Publications</Text>
        </Box>
        <Box color="#fff" marginTop={70}>
          <Text fontSize={23} fontWeight={600} marginBottom={5}>
            Help
          </Text>
          <Text>Books</Text>
          <Text>Electronics</Text>
          <Text>Accessories</Text>
          <Text>Gift Card</Text>
          <Text>Stationery</Text>
        </Box>
        <Box color="#fff" marginTop={70}>
          <Text fontSize={23} fontWeight={600} marginBottom={5}>
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
      <Box display="flex" alignItems="center" justifyContent="center">
        <Text fontSize={24} color="#fff" marginRight={10}>We accept payment via</Text>
        <Box display="flex">
          <Image
            src="/images/Bkash.png"
            width={144}
            height={70}
            alt="BkashImg"
          ></Image>
          <Image
            src="/images/Nagad.png"
            width={144}
            height={75}
            alt="BkashImg"
          ></Image>
        </Box>
      </Box>
      <Divider orientation="horizontal" ></Divider>
      <Text textAlign="center" color="#fff" marginTop={5} fontSize={12}>Copyright © 2023 Pahtok Point</Text>
    </Box>
  );
};
