import { getImagesByCollection } from "@/actions/get-images";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Page({ params }: { params: { slug: string } }) {
  const name = decodeURIComponent(params.slug.replace(/-/g, "%20"));
  const images = await getImagesByCollection(name);
  return (
    <div>
      <h1 className="p-6 text-center text-3xl font-extrabold">{name}</h1>
      <div className="columns-2 gap-2 space-y-2 px-2 !relative md:hidden">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.download_url}
            alt={image.author}
            fill={true}
            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 100vw"
            className="!relative"
          />
        ))}
      </div>
      <Carousel className="hidden md:block md:h-full">
        <CarouselContent className="h-full">
          {Array.from(images).map((image) => (
            <CarouselItem key={Math.random()}>
                <Image
                  src={image.download_url}
                  alt={image.author}
                  height={800}
                  width={800}
                  className="object-cover w-full opacity-80"
                />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-8 scale-125 bg-transparent">Previous</CarouselPrevious>
        <CarouselNext className="absolute right-8 scale-125 bg-transparent">Next</CarouselNext>
      </Carousel>
    </div>
  );
}
