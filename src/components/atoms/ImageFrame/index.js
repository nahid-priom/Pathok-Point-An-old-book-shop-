import { Image } from '@chakra-ui/react';
export const ImageFrame = ({boxSize, objectFit,src,alt,width,height,marginRight,borderRadius,marginBottom})=>{
    return(
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
      />
    );
}