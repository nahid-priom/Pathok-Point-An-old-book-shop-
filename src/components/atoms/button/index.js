import { Button } from "@chakra-ui/react";
import React from "react";

export const PathokButton = ({text, height, width, color, bgColor, fontSize}) => {
  return <Button height={height} width={width} color={color} bgColor={bgColor} fontSize={fontSize} textAlign="center">{text} </Button>;
};
