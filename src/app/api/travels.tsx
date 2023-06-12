import { BlogEntries, ImageFromat } from "../ts/types";

export const fetchTravelBlogs: () => Promise<BlogEntries[]> = async () => {
  try {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/travels?populate=*`
    );
    const res = await req.json();

    const travelBlogs = res.data.map((post: any) => {
      const attributes = post.attributes;
      const image = attributes.image.data;
      const category = attributes.travel_category.data;
      const imageAttributes = image.attributes;
      const imageFormats = image.attributes.formats;

      const imageFormat = (format: string): ImageFromat => {
        const imgFormat = imageFormats[format];

        return {
          name: imgFormat.name,
          hash: imgFormat.hash,
          mime: imgFormat.mime,
          path: imgFormat.path,
          width: imgFormat.width,
          height: imgFormat.height,
          size: imgFormat.size,
          url: imgFormat.url,
        };
      };

      return {
        id: post.id,
        title: attributes.title,
        slug: attributes.slug,
        createdAt: attributes.createdAt,
        updatedAt: attributes.updatedAt,
        publishedAt: attributes.publishedAt,
        content: attributes.content,
        short_description: attributes.short_description,
        travel_category: {
          title: category.attributes.name,
          slug: category.attributes.slug,
        },
        image: {
          id: image.id,
          name: imageAttributes.name,
          url: imageAttributes.url,
          alternativeText: imageAttributes.alternativeText,
          caption: imageAttributes.caption,
          width: imageAttributes.width,
          height: imageAttributes.height,
          size: imageAttributes.size,
          formats: {
            thumbnail: imageFormat("thumbnail"),
            small: imageFormat("small"),
            medium: imageFormat("medium"),
            large: imageFormat("large"),
          },
        },
      };
    });

    return travelBlogs;
  } catch (err) {
    throw err;
  }
};
