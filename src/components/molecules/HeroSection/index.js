import { ImageFrame, PathokButton, Timer } from "@/components/atoms";
import { Box, Text } from "@chakra-ui/react";

export const HeroSection = () => {
  return (
    <Box
      display="flex"
      padding="188px"
      maxW="1440px"
      margin="0 auto"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box position="relative">
        <ImageFrame
          src="/images/hero1.jpg"
          alt="PathokIcon"
          width="508px"
          height="600px"
          objectFit="cover"
          marginRight="81px"
          borderRadius="15px"
        />
        <Text
          position="absolute"
          top="440px"
          left="73px"
          color="#000"
          fontWeight={600}
          fontSize="30px"
          textDecoration="Background"
          alignItems="center"
          border="2px solid #FFD707"
          borderRadius="10px"
          paddingLeft="10px"
          paddingRight="10px"
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
          position="absolute"
          top="505px"
          left="165px"
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <Box position="relative">
          <ImageFrame
            src="/images/hero2.jpg"
            alt="PathokIcon"
            width="523px"
            height="275px"
            objectFit="cover"
            borderRadius="15px"
            marginBottom="50px"
          />
          <Text
            position="absolute"
            top="60px"
            left="43px"
            color="#FFD707"
            fontWeight={800}
            fontSize="22px"
            textDecoration="Background"
            alignItems="center"
            borderRadius="10px"
            paddingLeft="10px"
            paddingRight="10px"
          >
            Best Seller
          </Text>
          <Text
            position="absolute"
            top="90px"
            left="65px"
            color="#fff"
            fontWeight={800}
            fontSize="22px"
            textDecoration="Background"
            alignItems="center"
            borderRadius="10px"
            paddingLeft="10px"
            paddingRight="10px"
          >
            Books
          </Text>
          <PathokButton
            text="Shop Now"
            width={90}
            height={6}
            bgColor="#FFD707"
            fontSize="14px"
            fontWeight={400}
            position="absolute"
            top="140px"
            left="63px"
          />
        </Box>
        <Box position="relative">
          <ImageFrame
            src="/images/OIP.jpg"
            alt="PathokIcon"
            width="523px"
            height="275px"
            objectFit="cover"
            borderRadius="15px"
          />
          <Text
            position="absolute"
            top="60px"
            left="43px"
            color="#000438"
            fontWeight={800}
            fontSize="24px"
            textDecoration="Background"
            alignItems="center"
            borderRadius="10px"
            paddingLeft="10px"
            paddingRight="10px"
          >
            Best Deal
          </Text>
        </Box>
        <Box
          bgColor="#FD6C03"
          width="-webkit-fit-content"
          textColor="white"
          position="absolute"
          top="620px"
          fontSize="22px"
          left="802px"
          fontWeight={800}
          padding="2px 10px 0 10px"
          borderRadius="10px"
        >
          <Timer color="#fff" duration={20 * 24 * 60 * 60 * 1000}></Timer>
          <Box display="flex" fontWeight="500" >
            <Text fontSize={10} padding="0 5px 5px 3px" >Days</Text>
            <Text fontSize={10}padding="0 5px 5px 12px">Hours</Text>
            <Text fontSize={10}padding="0 5px 5px 12px">Mins</Text>
          </Box>
          <PathokButton
            text="Shop Now"
            width={90}
            height={6}
            color="#000"
            bgColor="#FFD707"
            fontSize="14px"
            fontWeight={400}
            position="absolute"
            top="70px"
            left="24px"
          />
        </Box>
      </Box>
    </Box>
  );
};
