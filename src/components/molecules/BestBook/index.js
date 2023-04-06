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
    <Box maxW={1110} margin="0 auto">
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        marginLeft={6}
      >
        <Text fontSize="30px" fontWeight={600}>
          {" "}
          Best Book of the week
        </Text>
        <ArrowForwardIcon width={100} fontSize={30} />
      </Box>
      <Box
        maxW={1110}
        height={600}
        boxShadow="0 4px 4px #00000040"
        margin="33px auto"
        bgColor="#FCEBE3"
        borderRadius={15}
        position="relative"
      >
        <Slider {...settings}>
          {HomepageSliderImage.map((data, index) => {
            return (
              <Box key={index}>
                <Box marginTop={10}>
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    position="relative"
                  >
                    <Box marginTop={20} marginLeft={20}>
                      <Text fontSize={42} fontWeight={500}>
                        {data.title}
                      </Text>
                      <Text fontSize={27} fontStyle="italic" fontWeight={400}>
                        {data.writer}
                      </Text>
                    </Box>
                    <Box position="absolute" top={280} left={350}>
                      <Box
                        color="#E72F2F"
                        display="flex"
                        justifyContent="center"
                        fontSize={25}
                        marginTop={1}
                      >
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                      </Box>
                      <Box display="flex" justifyContent="center" marginTop={2}>
                        <Text
                          marginRight={2}
                          textDecoration="line-through"
                          fontSize={28}
                        >
                          {data.price}
                        </Text>
                        <Text fontWeight={600} fontSize={32}>
                          {data.discountPrice}
                        </Text>
                      </Box>
                    </Box>
                    <Link href={`book/${data.id}`}>
                      <Image
                        src={data.src}
                        alt={data.alt}
                        Width="320px"
                        height={490}
                        borderRadius={15}
                        marginBottom={5}
                        marginRight={10}
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
