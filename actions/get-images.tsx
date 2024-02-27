interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export async function getImagesByCollection(author: string) {
  const images: [Image] = await fetch(
    "https://picsum.photos/v2/list?limit=50",
  ).then((res) => res.json());

  const filteredImages = images.filter((image) => image.author === author);

  return filteredImages;
}

export async function getCollections() {
  const images: [Image] = await fetch(
    "https://picsum.photos/v2/list?limit=50",
  ).then((res) => res.json());

  const collections = new Map();

  images.forEach((image) => {
    if (!collections.has(image.author)) {
      collections.set(image.author, [image.download_url]);
    }
  });

  return collections;
}
