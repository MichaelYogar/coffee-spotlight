import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <li>
      <Link href={`posts/${post.meta.slug}`}>
        <a>{post.meta.title}</a>
      </Link>
    </li>
  );
};

export default Post;
