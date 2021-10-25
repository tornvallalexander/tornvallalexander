import * as React from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react"

import { Link as RouterLink } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import CustomBadge from "./CustomBadge"

// featureimage, title, created at, author fullname, author avatarimage, slug, category, bg color

type ArticlePreviewProps = {
  data: {
    author?: {
      fullName: string,
      avatarImage: ImageDataLike,
    },
    featureImage: ImageDataLike,
    createdAt: string,
    metaDescription: string,
    title: string,
    category: string,
    slug: string,
  }
}

const ArticlePreview = ({ data }: ArticlePreviewProps) => {
  const { slug, featureImage, createdAt, title, category } = data;

  const featImage = getImage(featureImage)
  return (
    <Box
      transition=".3s"
      _hover={{ transform: "translateY(-.5rem)" }}
      shadow="lg"
      bg="gray.700"
      maxW={{ base: "md", md: "2xl" }}
      borderRadius="2xl"
      color="cyan.50"
      >
      <Link
        as={RouterLink}
        to={`/p/${slug}`}
        _hover={{
          textDecoration: "none"
        }}
      >
        <Box>
          { featImage && (
            <GatsbyImage alt={title} image={featImage} style={{ borderRadius: "16px", transform: "translateZ(0)"}}/>
          )}
        </Box>
        <Box p="1rem">
          <Flex mb="1rem" justifyContent="space-between">
            <CustomBadge>
              {category}
            </CustomBadge>
            <Text
              fontSize="lg"
            >
              {createdAt}
            </Text>
          </Flex>
          <Heading as="h4" fontSize="2xl" textAlign="left">{title}</Heading>
        </Box>
      </Link>
    </Box>
  )
}

export default ArticlePreview;