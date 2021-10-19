import * as React from "react";

import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "gatsby"

type FeaturedPostsBoxProps = {
  featuredBlogPosts: {
    edges: {
      node: {
        createdAt: string,
        featureImage: ImageDataLike,
        author: {
          avatarImage: ImageDataLike,
          fullName: string,
        }
        slug: string,
        title: string,
      }
    }[]
  }
}

const FeaturedPostsBox = ({ featuredBlogPosts }: FeaturedPostsBoxProps) => {
  return (
    <Box
      bg="gray.800"
      borderRadius="2xl"
      p={{ base: "1rem", md: "2rem" }}
      mt="2rem"
      mb={{ base: "2rem", md: "0rem"}}
    >
      {featuredBlogPosts.edges.map((post, index) => {
        const { createdAt, author, featureImage, title, slug } = post.node;

        const authorImage = getImage(author.avatarImage)
        const resFeatureImage = getImage(featureImage)

        const mb = index === 0 ? "2rem": "0rem"
        return (
          <Link
            key={index}
            as={RouterLink}
            to={`/p/${slug}`}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Flex mb={mb} alignItems="center">
              {resFeatureImage && (
                <Box>
                  <GatsbyImage
                    image={resFeatureImage}
                    alt="hello"
                    style={{ borderRadius: "8px", width: "100px", transform: "translateZ(0)"}}
                  />
                </Box>
              )}

              <Box ml="1rem" textAlign="left">
                <Heading as="p" fontSize="md">{title}</Heading>

                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="sm">{createdAt}</Text>
                  {authorImage && (
                    <GatsbyImage
                      image={authorImage}
                      alt={author.fullName}
                    />
                  )}
                </Flex>
              </Box>
            </Flex>
          </Link>
        )
      })}
    </Box>
  )
};

export default FeaturedPostsBox;