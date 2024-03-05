import { getCollections } from "@/actions/get-images";
import Image from "next/image";
import Link from "next/link";
import getCollectionsNew from "./lib/get-collections";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Home() {
  const collections = await getCollections();
  const newCollections = await getCollectionsNew();
  // console.log(newCollections);

  return (
    <>
      <div className="grid w-full gap-2 md:hidden">
        {Array.from(collections).map(([author, image]) => (
          <Link
            href={`/${author}`}
            key={Math.random()}
            className="relative hover:text-slate-300"
          >
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
      <Carousel className="hidden md:block md:h-full">
        <CarouselContent className="h-full">
          {Array.from(collections).map(([author, image]) => (
            <CarouselItem key={Math.random()}>
              <Link
                href={`/${author}`}
                className="relative flex h-full hover:text-slate-300 hover:scale-105 transition-all ease-in-out duration-300"
              >
                <Image
                  src={image[0]}
                  alt={author}
                  height={800}
                  width={800}
                  className="object-cover w-full opacity-80"
                />
                <div className="absolute top-[50%] w-full text-center">
                  <p className=" text-3xl font-semibold">
                    {author}
                  </p>
                  <p>
                    Descripcion de prueba
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-8 scale-125 bg-transparent">Previous</CarouselPrevious>
        <CarouselNext className="absolute right-8 scale-125 bg-transparent">Next</CarouselNext>
      </Carousel>
    </>
  );
}
