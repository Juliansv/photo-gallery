import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Retrieve the list of collections from Contentful
const getCollectionsNew = async () => {
  const response = await client.getEntries({
    content_type: "collection",
  });

  return response.items;
};

export default getCollectionsNew;
