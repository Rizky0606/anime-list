import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }: any) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image
        src={images}
        alt=""
        width={350}
        height={350}
        className="w-full max-h-64"
        style={{ borderRadius: "6px 6px 0 0" }}
      />
      <h3 className="text-md lg:text-lg  p-4">{title}</h3>
    </Link>
  );
};

export default AnimeList;
