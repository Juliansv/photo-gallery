import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Retrieve the list of collections from Contentful
export const getCollections = async () => {
  const response = await client.getEntries({
    content_type: "collection",
    select: [
      "sys.id",
      "fields.title",
      "fields.description",
      "fields.coverPhoto",
    ],
  });

  return response.items;
};

export const getCollection = async (id: string) => {
  const response = await client.getEntry(id);

  return response.fields;
};
