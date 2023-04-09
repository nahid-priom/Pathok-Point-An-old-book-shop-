import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Text, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { HomepageSliderImage } from "@/utils/homepagesliderdata";
import Link from "next/link";
import { StarIcon } from "@chakra-ui/icons";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

export const BestBook = () => {
  return (
    <Box maxW={1110} margin="40px auto">
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        marginLeft={6}
      >
        <Text fontSize={{base:"20px", md:"30px"}} fontWeight={600}>
          {" "}
          Best Book of the week
        </Text>
        <ArrowForwardIcon width={100} fontSize={30} />
      </Box>
      <Box
        maxW={1110}
        height={{ base: "410px", md: "600px" }}
        boxShadow="0 4px 4px #00000040"
        margin="20px auto"
        bgColor="#FCEBE3"
        borderRadius={{base: "0px", md:"15px"}}
      >
        <Slider {...settings}>
          {HomepageSliderImage.map((data, index) => {
            return (
              <Box key={index}>
                <Box>
                  <Box display="flex" justifyContent="space-evenly" margin="35px auto">
                    <Box display="flex" flexDirection="column" justifyContent="center">
                      <Box >
                        <Text
                          fontSize={{ base: "20px", md: "42px" }}
                          width="100%"
                          fontWeight={500}
                        >
                          {data.title}
                        </Text>
                        <Text
                          fontSize={{ base: "15px", md: "27px" }}
                          fontStyle="italic"
                          fontWeight={400}
                        >
                          {data.writer}
                        </Text>
                      </Box>
                      <Box>
                        <Box
                          color="#E72F2F"
                          display="flex"
                          justifyContent="center"
                          fontSize={{ base: "13px", md: "25px" }}
                          marginTop={{base:"25px" , md: "60px"}}
                        >
                          <StarIcon></StarIcon>
                          <StarIcon></StarIcon>
                          <StarIcon></StarIcon>
                          <StarIcon></StarIcon>
                          <StarIcon></StarIcon>
                        </Box>
                        <Box display="flex" justifyContent="center">
                          <Text
                            marginRight={2}
                            textDecoration="line-through"
                            fontSize={{ base: "18px", md: "28px" }}
                          >
                            {data.price}
                          </Text>
                          <Text
                            fontWeight={600}
                            fontSize={{ base: "20px", md: "32px" }}
                          >
                            {data.discountPrice}
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                    <Link href={`book/${data.id}`}>
                      <Image
                        src={data.src}
                        alt={data.alt}
                        width={{ base: "180px", md: "320px" }}
                        height={{ base: "300px", md: "490px" }}
                        borderRadius={15}
                      />
                    </Link>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};
