import { getAllPosts } from "../utils";

export default function Home() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export async function getStaticProps(context) {
  const posts = getAllPosts();
  console.log(posts);

  return {
    props: {},
  };
}
