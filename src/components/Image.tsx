type ImageProps = {
  src: string;
  alt: string;
};

function Image({ src, alt }: ImageProps) {
  return <img className="h-auto w-full" src={src} alt={alt} />;
}

export default Image;
