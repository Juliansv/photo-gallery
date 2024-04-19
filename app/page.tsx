import Image from "next/image";
import Link from "next/link";
import { getCollections } from "./lib/get-collections";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Collection {
  sys: {
    id: string;
  };
  fields: {
    title?: string;
    description?: string;
    coverPhoto?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export default async function Home() {
  const collections: Collection[] = await getCollections();

  console.log(collections);

  const defaultAvatar =
    "//png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg";

  return (
    <>
      <div className="grid w-full gap-2 md:hidden">
        {Array.from(collections).map((collection) => (
          <Link
            href={{
              pathname: `/${collection.fields.title}`,
              query: {
                id: collection.sys.id,
              }
            }}
            key={collection.sys.id}
            className="relative hover:text-slate-300"
          >
            <Image
              src={
                "https:" +
                `${collection.fields.coverPhoto ? collection.fields.coverPhoto.fields.file.url : defaultAvatar}`
              }
              alt={collection.sys.id}
              width={800}
              height={100}
              className="max-h-52 w-full object-cover opacity-80"
            />
            <p className="absolute top-[45%] w-full text-center text-3xl font-semibold">
              {collection.fields.title}
            </p>
          </Link>
        ))}
      </div>
      <Carousel className="hidden md:block md:h-full">
        <CarouselContent className="h-full">
          {Array.from(collections).map((collection) => (
            <CarouselItem key={Math.random()}>
              <Link
                href={{
                  pathname: `/${collection.fields.title}`,
                  query: {
                    id: collection.sys.id,
                  }
                }}
                className="relative flex h-full transition-all duration-300 ease-in-out hover:scale-105 hover:text-slate-300"
              >
                <Image
                  src={
                    "https:" +
                    `${collection.fields.coverPhoto ? collection.fields.coverPhoto.fields.file.url : defaultAvatar}`
                  }
                  alt={collection.sys.id}
                  height={800}
                  width={800}
                  className="w-full object-cover opacity-80"
                />
                <div className="absolute top-[50%] w-full text-center">
                  <p className=" text-3xl font-semibold">
                    {collection.fields.title}
                  </p>
                  <p>{collection.fields.description}</p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-8 scale-125 bg-transparent">
          Previous
        </CarouselPrevious>
        <CarouselNext className="absolute right-8 scale-125 bg-transparent">
          Next
        </CarouselNext>
      </Carousel>
    </>
  );
}
