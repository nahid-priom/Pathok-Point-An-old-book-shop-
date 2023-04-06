import { Image, position } from "@chakra-ui/react";
export const ImageFrame = ({
  boxSize,
  objectFit,
  src,
  alt,
  width,
  height,
  marginRight,
  borderRadius,
  marginBottom,
  position,
  boxShadow

}) => {
  return (
    <Image
      boxSize={boxSize}
      objectFit={objectFit}
      src={src}
      alt={alt}
      width={width}
      height={height}
      marginRight={marginRight}
      borderRadius={borderRadius}
      marginBottom={marginBottom}
      position={position}
      boxShadow={boxShadow}
    />
  );
};
