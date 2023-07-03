import React from "react";
import BlogPosts from "./BlogPosts";
import { fetchOtherPosts } from "@/app/api/travels";

const OtherPosts = async ({ id }: { id: number }) => {
  const fetchPosts = await fetchOtherPosts(id);
  const { attributes } = fetchPosts;

  const otherPosts = attributes.other_articles.data;

  return <BlogPosts posts={otherPosts} direction="horizontal" />;
};

export default OtherPosts;
