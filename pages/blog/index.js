import { Box, UnorderedList } from "@chakra-ui/react";
import PostListItem from "../../components/PostListItem";
import { getAllPosts } from "../../utils";

export default function Blog({ posts }) {
  return (
    <>
      <Box>
        <h1>Blog</h1>
        <Box p={2}>
          <UnorderedList>
            {posts.map((post) => (
              <PostListItem key={post.meta.title} post={post}>
                {post.meta.title}
              </PostListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
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
