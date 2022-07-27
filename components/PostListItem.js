import { ListItem, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <ListItem>
      <span>{post.meta.publish_date}</span>
      <span> » </span>
      <span>
        <NextLink href={`blog/${post.meta.slug}`}>
          <Link>{post.meta.title}</Link>
        </NextLink>
      </span>
    </ListItem>
  );
};

export default Post;
