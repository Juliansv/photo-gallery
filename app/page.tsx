import { getCollections } from "@/actions/get-images";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const collections = await getCollections();

  return (
    <div>
      <div className="grid w-full gap-2">
        {Array.from(collections).map(([author, image]) => (
          <Link href={`/${author}`} key={Math.random()} className="relative">
            <Image
              src={image[0]}
              alt={author}
              width={800}
              height={100}
              className="max-h-52 w-full object-cover opacity-80"
            />
            <p className="absolute top-[45%] w-full text-center text-3xl font-semibold">
              {author}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
