import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Featured = ({ post }) => {
  return (
    <>
      <Box>
        <Heading as="h2" size="xl" mb={5}>
          Most Recent Posts
        </Heading>
      </Box>
      <Box>
        <Stack spacing={2}>
          <Heading as="h3" size="lg">
            {post.meta.title}
          </Heading>
          <Text>
            {post.meta.publish_date} • {post.meta.read_time}
          </Text>
          <Text>{post.meta.excerpt}</Text>
        </Stack>
      </Box>
    </>
  );
};

export default Featured;
