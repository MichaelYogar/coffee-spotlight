import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  return (
    <li>
      <span>{post.meta.publish_date}</span>
      <span> » </span>
      <span>
        <Link href={`posts/${post.meta.slug}`}>
          <a className="hover:tw-underline tw-underline-offset-2 tw-text-blue-600">
            {post.meta.title}
          </a>
        </Link>
      </span>
    </li>
  );
};

export default Post;
