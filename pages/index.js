import { Flex } from "@chakra-ui/react";
import Featured from "../components/Featured";
import { getPostFromSlug } from "../utils";
import AboutMe from "../components/AboutMe";

export default function Home({ post }) {
  return (
    <>
      <Flex className="tw-flex-col">
        <AboutMe />
        <Featured grow post={post} />
      </Flex>
    </>
  );
}

export async function getStaticProps(context) {
  const post = getPostFromSlug("about");
  return {
    props: {
      post,
    },
  };
}
