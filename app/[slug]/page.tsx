import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getCollection } from "../lib/get-collections";

interface Collection {
  title?: String;
  description?: String;
  coverPhoto?: {
    sys: {
      id: String;
    };
    fields: {
      title: String;
      file: {
        url: String;
      };
    };
  };
  photos?: Array<{
    sys: {
      id: String;
    };
    fields: {
      title: String;
      file: {
        url: String;
      };
    };
  }>;
}

export default async function Page({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const collection: Collection = await getCollection(searchParams.id);

  const title = collection.title?.toString() || "Undefined Title";

  const images = Array.from(collection.photos || []);

  return (
    <div className="md:flex md:h-full md:flex-col">
      <h1 className="p-6 text-center text-3xl font-extrabold">{title}</h1>
      <div className="!relative columns-1 gap-2 space-y-2 px-2 sm:columns-2 md:hidden">
        {images.map((image) => (
          <Image
            key={image.sys.id.toString()}
            src={"https:" + image.fields.file.url.toString()}
            alt={image.fields.title.toString()}
            fill={true}
            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 100vw"
            className="!relative"
          />
        ))}
      </div>
      <div className="mb-1 flex max-h-full flex-1 overflow-hidden">
        <Carousel
          id="Carousel-parent"
          className="static hidden justify-center md:flex md:flex-1"
        >
          <CarouselContent id="carousel-content" className="m-0 h-full">
            {Array.from(images).map((image) => (
              <CarouselItem
                key={Math.random()}
                id="Carousel-item"
                className="relative flex justify-center overflow-hidden p-0"
              >
                <Image
                  src={"https:" + image.fields.file.url.toString()}
                  alt={image.fields.title.toString()}
                  height={500}
                  width={500}
                  className="h-auto w-auto"
                  id="Carousel-Image"
                />
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
      </div>
    </div>
  );
}
