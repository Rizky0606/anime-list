import Link from "next/link";
import AnimeList from "../components/AnimeList";

interface ListAnime {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=6`
  );

  const anime = await response.json();

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Paling Populer</h1>
        <Link
          href="/populer"
          className="text-md xl:text-xl underline hover:text-indigo-500 transition-all"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 px-[20px]">
        {anime.data?.map((data: ListAnime) => {
          return (
            <div key={data.mal_id} className="shadow-xl rounded-md">
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
