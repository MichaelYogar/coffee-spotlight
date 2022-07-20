import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <>
      <div>
        <Link href={`posts/${post.meta.slug}`}>
          <a>{post.meta.title}</a>
        </Link>
      </div>
    </>
  );
};

export default Post;
