import * as React from "react";

import { Box, Flex, Text } from "@chakra-ui/react"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import { Link as RouterLink } from "gatsby";

import CustomBadge from "./CustomBadge"

type BlogInfoBoxProps = {
  author: {
    avatarImage: ImageDataLike,
    fullName: string,
  },
  category: string
  createdAt: string,
  slug: string,
}

const BlogInfoBox = ({ author, category, createdAt, slug}: BlogInfoBoxProps) => {
  const { avatarImage, fullName } = author;

  const authorImage = getImage(avatarImage);
  return (
    <Box
      bg="gray.800"
      borderRadius="2xl"
      p={{ base: "1rem", md: "2rem" }}
      mb={{ base: "2rem", md: "0rem"}}
    >
      <Flex justifyContent="space-between" alignItems="center" mb="2rem">
        <Text fontSize="lg">Written by</Text>
        <Box
          as={RouterLink}
          to={`/profile/${slug}`}
          borderRadius="full"
          bg="gray.700"
          transition=".3s"
          border="1px solid #2D3748"
          _hover={{ bg: "gray.800"}}
        >
          {authorImage && (
            <GatsbyImage
              image={authorImage}
              alt={fullName}
            />
          )}
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb="2rem">
        <Text fontSize="lg">Category</Text>
        <Box>
          <CustomBadge>
            {category}
          </CustomBadge>
        </Box>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="lg">Published</Text>
        <Text fontSize="lg">{createdAt}</Text>
      </Flex>
    </Box>
  )
}

export default BlogInfoBox;