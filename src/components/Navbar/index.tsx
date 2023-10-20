import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex flex-col md:flex-row gap-2 justify-between p-4 items-center">
        <Link href="/" className="font-bold text-white text-2xl">
          ANIMELIST
        </Link>
        <input placeholder="Cari Anime" className="rounded-md p-2" />
      </div>
    </header>
  );
};

export default Navbar;
