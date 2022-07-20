import fs from "fs";
import path from "path";
import { sync } from "glob";
const POST_PATH = path.join(process.cwd(), "pages", "posts");
import matter from "gray-matter";

export const getPostFromSlug = (slug) => {
  const buffer = fs.readFileSync(`${POST_PATH}/${slug}.mdx`);
  const { content, data } = matter(buffer);
  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt,
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      publish_date: (data.publish_date ?? new Date()).toString(),
    },
  };
};

export const getAllPosts = () =>
  getPostSlugs()
    .map((slug) => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return -1;
      if (a.meta.date < b.meta.date) return 1;
      return 0;
    });

export const getPostSlugs = () =>
  sync(`${POST_PATH}/*.mdx`).map((file) => path.basename(file, ".mdx"));
