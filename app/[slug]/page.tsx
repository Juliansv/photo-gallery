import { getImagesByCollection } from "@/actions/get-images";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const name = decodeURIComponent(params.slug.replace(/-/g, "%20"));
  const images = await getImagesByCollection(name);
  return (
    <div>
      <h1 className="p-6 text-center text-3xl font-extrabold">{name}</h1>
      <div className="columns-2 gap-2 space-y-2 px-2 !relative">
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
    </div>
  );
}
