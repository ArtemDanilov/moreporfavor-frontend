import { InstagramPosts } from "../ts/types";

const ID = process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_ID;
const TOKEN = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

const InstagramFeed: () => Promise<InstagramPosts> = async () => {
  const getData = await fetch(
    `https://graph.instagram.com/${ID}/media?fields=caption,media_type,media_url,permalink&access_token=${TOKEN}`,
    { cache: "no-store" }
  );

  if (getData.status == 200) {
    return getData.json();
  } else {
    return undefined;
  }
};

export default InstagramFeed;
