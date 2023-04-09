import React from "react";
import Slider from "react-slick";
import { Box, Image, Text } from "@chakra-ui/react";
import { HomepageSliderImage } from "@/utils/homepagesliderdata";
import { StarIcon } from "@chakra-ui/icons";
import Link from "next/link";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },

  ]
};

export const SimpleSlider = () => {
  return (
    <Box>
      <Slider {...settings}>
        {HomepageSliderImage.map((data, index) => {
          return (
            <Box marginTop={10} key={index}>
              <Link href={`book/${data.id}`}>
                <Image
                  margin="0 auto"
                  src={data.src}
                  alt={data.alt}
                  width={170}
                  height={300}
                  cursor="pointer"
                />
              </Link>
              <Text
                textAlign="center"
                fontWeight="600"
                fontSize={18}
                marginTop={2}
              >
                {data.title}
              </Text>
              <Link href={`author/${data.id}`}>
                <Text textAlign="center" fontWeight="400" fontSize={15}>
                  {data.writer}
                </Text>
              </Link>
              <Box
                color="#E72F2F"
                display="flex"
                justifyContent="center"
                fontSize={10}
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
                  fontSize={16}
                >
                  {data.price}
                </Text>
                <Text fontWeight={600} fontSize={18}>
                  {data.discountPrice}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};
