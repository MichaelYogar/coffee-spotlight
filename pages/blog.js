import PostListItem from "../components/PostListItem";
import { getAllPosts } from "../utils";

export default function Blog({ posts }) {
  return (
    <>
      <div>
        <h1>Blog</h1>
        <div className="p-2 ml-6">
          <ul className="list-outside list-disc ">
            {posts.map((post) => (
              <PostListItem key={post.meta.title} post={post}>
                {post.meta.title}
              </PostListItem>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
