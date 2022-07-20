import Post from "../components/Post";
import { getAllPosts } from "../utils";

export default function Home({ posts }) {
  return (
    <>
      <div>
        {posts.map((post) => (
          <Post key={post.meta.title} post={post}>
            {post.meta.title}
          </Post>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const posts = getAllPosts();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
