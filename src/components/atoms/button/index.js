import { Button, position } from "@chakra-ui/react";
import React from "react";

export const PathokButton = ({
  text,
  height,
  width,
  color,
  bgColor,
  fontSize,
  fontWeight,
  position,
  top,
  left
}) => {
  return (
    <Button
      height={height}
      width={width}
      color={color}
      bgColor={bgColor}
      fontSize={fontSize}
      textAlign="center"
      fontWeight={fontWeight}
      position={position}
      top={top}
      left={left}
      
    >
      {text}{" "}
    </Button>
  );
};
