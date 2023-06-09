import { Box, Text, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { PathokButton, SimpleSlider } from "@/components/atoms";

export const BestSellingBooks = () => {
  return (
    <Box>
      <Box maxW="1110px" height={10} margin="0 auto" >
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          marginLeft={6}
          marginTop={7}
        >
          <Text fontSize={{base:"20px", md:"30px"}} fontWeight={600}>
            {" "}
            Best Selling Books
          </Text>
          <ArrowForwardIcon width={{base:"50px", md:"100px"}} fontSize={30} />
          <PathokButton
            text="Show all"
            width={90}
            height={6}
            color="#000"
            bgColor="#fff"
            fontSize="20px"
            fontWeight={400}
            border="2px solid #F9AB14"
          />
        </Box>
      </Box>
      <Box
        maxW={1110}
        height={490}
        boxShadow="0 4px 4px #00000040"
        margin="20px auto"
        bgColor="#F7F5EE"
        borderRadius={{base: "0px", md:"15px"}}
      >
        <SimpleSlider></SimpleSlider>
      </Box>
    </Box>
  );
};
