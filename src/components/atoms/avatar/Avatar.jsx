import Image from "next/image";

const Avatar = ({ src, size, style }) => {
  return (
    <Image
      src={src}
      width={100}
      height={100}
      className={`h-${size} w-${size} rounded-full shadow ${style}`}
      alt=""
    />
  );
};
export default Avatar;
