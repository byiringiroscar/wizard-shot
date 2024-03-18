import Image from 'next/image';


interface ImageInterface {
    src: any;
    alt: string;
    width?: number;
    priority?: boolean;
    onClick?: () => void;
    height?: number;
    className?: string;
  }
  
const ImageUse = ({ onClick, className, src, alt, width, height, priority }: ImageInterface) => {
  return (
    <Image
      onClick={onClick}
      className={className}
      priority={priority}
      width={width}
      height={height}
      src={src}
      alt={alt}

    />
  )
}

export default ImageUse;