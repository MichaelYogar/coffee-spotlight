import { ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <ListItem>
      <span>{post.meta.publish_date}</span>
      <span> » </span>
      <span>
        <NextLink href={`blog/${post.meta.slug}`}>
          <a className="hover:tw-underline tw-underline-offset-2 tw-text-blue-600">
            {post.meta.title}
          </a>
        </NextLink>
      </span>
    </ListItem>
  );
};

export default Post;
