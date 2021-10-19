import * as React from "react";

import { Box, Flex, Text } from "@chakra-ui/react"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"

import CustomBadge from "./CustomBadge"

type BlogInfoBoxProps = {
  author: {
    avatarImage: ImageDataLike,
    fullName: string,
  },
  categories: string[]
  createdAt: string,
}

const BlogInfoBox = ({ author, categories, createdAt}: BlogInfoBoxProps) => {
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
        {authorImage && (
          <GatsbyImage
            image={authorImage}
            alt={fullName}
          />
        )}
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb="2rem">
        <Text fontSize="lg">Categories</Text>
        <Box>
          {categories.map((category) => {
            return (
              <CustomBadge>
                {category}
              </CustomBadge>
            )
          })}
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