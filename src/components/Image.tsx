type ImageProps = {
  src: string;
  alt: string;
};

function Image({ src, alt }: ImageProps) {
  return (
    <img className=" h-full max-w-full object-cover " src={src} alt={alt} />
  );
}

export default Image;
