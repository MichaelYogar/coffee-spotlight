import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Featured = ({ post }) => {
  console.log(post);
  return (
    <>
      <div>
        <Heading as="h2" size="xl" className="tw-mb-5">
          Featured Post
        </Heading>
      </div>
      <Divider />
      <div>
        <Stack spacing={2} className="tw-mt-5">
          <Heading as="h3" size="lg">
            {post.meta.title}
          </Heading>
          <Text>
            {post.meta.publish_date} • {post.meta.read_time}
          </Text>
          <Text>{post.meta.excerpt}</Text>
        </Stack>
      </div>
    </>
  );
};

export default Featured;
