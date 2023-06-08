import { Links } from "../ts/types";

export const fetchLinks: () => Promise<Links> = async () => {
  try {
    const req = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/links`);
    const res = await req.json();

    const links: Links = res.data.map(
      ({
        id,
        attributes,
      }: {
        id: number;
        attributes: { link_name: string; link_url: string };
      }) => {
        return {
          id: id,
          title: attributes.link_name,
          url: attributes.link_url,
        };
      }
    );

    return links;
  } catch (err) {
    throw err;
  }
};
