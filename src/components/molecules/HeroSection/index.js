import { ImageFrame, PathokButton, Timer } from "@/components/atoms";
import { Box, Text } from "@chakra-ui/react";

export const HeroSection = () => {
  return (
    <Box
      display={{ base: "flex", md: "flex" }}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ base: "center" }}
      maxW="1110px"
      alignItems="center"
      margin={{ base: "0px", md: "50px auto" }}
    >
      <Box
        bgImg="/images/hero1.jpg"
        w={{ base: "100%", sm: "100%", md: "508px" }}
        h={{ base: "460px", md: "600px" }}
        bgSize="cover"
        position="relative"
        borderRadius={{ base: "none", md: "15px" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginRight={{ md: "30px", lg: "50px", xl: "70px" }}
        boxShadow="0 4px 4px #00000040"
      >
        <Box
          position="absolute"
          borderRadius={{ base: "none", md: "15px" }}
          w="100%"
          h="100%"
          bgColor="#000"
          top="0px"
          opacity={0.4}
        ></Box>
        <Text
          color="#fff"
          fontWeight={600}
          fontSize={{ base: "25px", md: "25px", xl: "30px" }}
          textDecoration="Background"
          textAlign="center"
          borderRadius="10px"
          paddingBottom="20px"
          zIndex={1}
        >
          Featured Books of March{" "}
        </Text>
        <PathokButton
          text="Shop Now"
          width={181}
          height={42}
          bgColor="#FFD707"
          fontSize="20px"
          fontWeight={400}
          
        />
      </Box>
      <Text
        variant="h2"
        display={{ base: "block", md: "none" }}
        margin="15px 0"
        fontSize={20}
        fontWeight={600}
        textAlign="center"
      >
        Top Rated Seller
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={{ md: "space-between" }}
        w={{ base: "100%", sm: "100%", md: "508px" }}
        h="600px"
      >
        <Box
          bgImage="/images/hero2.jpg"
          w="100%"
          height="275px"
          bgSize="cover"
          borderRadius={{ base: "none", md: "15px" }}
          display={{ base: "flex", md: "flex" }}
          flexDirection="column"
          justifyContent="center"
          boxShadow="0 4px 4px #00000040"
        >
          <Text
            color="#FFD707"
            fontWeight={800}
            fontSize={{ base: "18px", md: "22px" }}
            textDecoration="Background"
            alignItems="center"
            paddingLeft="45px"
            borderRadius="10px"
          >
            Best Selling
          </Text>
          <Text
            color="#fff"
            fontWeight={800}
            fontSize={{ base: "18px", md: "22px" }}
            textDecoration="Background"
            alignItems="center"
            borderRadius="10px"
            paddingLeft={{ base: "70px", md: "75px" }}
            width="auto"
          >
            Books
          </Text>
          <PathokButton
            text="Shop Now"
            width={{ base: "70px", md: "90px" }}
            height={6}
            bgColor="#FFD707"
            fontSize="14px"
            fontWeight={400}
            marginLeft="61px"
            marginTop="10px"
          />
        </Box>
        <Text
          variant="h2"
          display={{ base: "block", md: "none" }}
          margin="15px 0"
          fontSize={20}
          fontWeight={600}
          textAlign="center"
        >
          Upcoming Deals
        </Text>
        <Box
          bgImage="/images/OIP.jpg"
          width="100%"
          height="275px"
          borderRadius={{ base: "none", md: "15px" }}
          bgSize="cover"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          boxShadow="0 4px 4px #00000040"
        >
          <Text
            color="#000438"
            fontWeight={800}
            fontSize="24px"
            textDecoration="Background"
            alignItems="center"
            borderRadius="10px"
            paddingLeft="70px"
          >
            Best Deal
          </Text>
          <Box
            bgColor="#FD6C03"
            width="-webkit-fit-content"
            textColor="white"
            fontSize="22px"
            fontWeight={800}
            padding="2px 10px 0 10px"
            borderRadius="10px"
            marginLeft="56.5px"
            marginTop={1}
            marginBottom={13}
          >
            <Timer color="#fff" duration={20 * 24 * 60 * 60 * 1000}></Timer>
            <Box display="flex" fontWeight="500">
              <Text fontSize={10} padding="0 5px 5px 3px">
                Days
              </Text>
              <Text fontSize={10} padding="0 5px 5px 12px">
                Hours
              </Text>
              <Text fontSize={10} padding="0 5px 5px 12px">
                Mins
              </Text>
            </Box>
          </Box>
          <PathokButton
            text="Shop Now"
            width={90}
            height={6}
            color="#000"
            bgColor="#FFD707"
            fontSize="14px"
            fontWeight={400}
            boxShadow="2px 2px #6E6A6A"
            marginLeft="79px"
          />
        </Box>
      </Box>
    </Box>
  );
};
