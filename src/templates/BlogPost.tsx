import * as React from "react";

import { Box, Flex, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogBody from "../contentful/options"
import { ContentfulRichTextGatsbyReference } from "gatsby-source-contentful/rich-text"

type BlogPostProps = {
  data: {
    post: {
      article: {
        raw: string
        references: ContentfulRichTextGatsbyReference[]
      }
      author: {
        fullName: string,
        avatarImage: ImageDataLike,
        title: string
      }
      createdAt: string,
      metaDescription: string,
      keywords: string[],
      title: string,
      categories: string[],
    }
  }
}

const TestPage = ({ data }: BlogPostProps) => {
  const { title, metaDescription, createdAt, keywords, article, author, categories } = data.post;

  const authorImage = getImage(author.avatarImage)
  return (
    <Layout>
      <Seo title={title} description={metaDescription} keywords={keywords} />
      <Box mx={{ base: "0rem", md: "4rem" }}>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(3, 1fr)",
          }}
          templateRows={{ base: "none", md: "1fr" }}
          gap={{ base: "0rem", md: "2rem"}}
          mx="auto"
          textAlign="center"
          mb="8rem"
          role="group"
          pb="-4rem"
          px="1rem"
        >
          <GridItem colspan={1}>
            <Box
              bg="gray.800"
              borderRadius="2xl"
              p={{ base: "1rem", md: "2rem" }}
              position="sticky"
              top="9.5rem"
              mb={{ base: "2rem", md: "0rem"}}
            >
              <Flex justifyContent="space-between" alignItems="center" mb="2rem">
                <Text fontSize="lg">Written by</Text>
                {authorImage && (
                  <GatsbyImage
                    image={authorImage}
                    alt={author.fullName}
                  />
                )}
              </Flex>
              <Flex justifyContent="space-between" alignItems="center" mb="2rem">
                <Text fontSize="lg">Categories</Text>
                <Box>
                  {categories.map((category) => {
                    return (
                      <Link
                        px={3}
                        py={1}
                        ml={2}
                        bg="gray.600"
                        color="gray.100"
                        fontSize="sm"
                        fontWeight="700"
                        rounded="md"
                        _hover={{ bg: "gray.500" }}
                      >
                        {category}
                      </Link>
                    )
                  })}
                </Box>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg">Published</Text>
                <Text fontSize="lg">{createdAt}</Text>
              </Flex>
            </Box>
          </GridItem>

          <GridItem colSpan={2} textAlign="left">
              <Box bg="gray.800" borderRadius="2xl" p={{ base: "1rem", md: "2rem" }}>
                <Heading as="h1" textStyle="heading" mb="2rem">
                  {title}
                </Heading>
                <BlogBody content={article} />
              </Box>
          </GridItem>
        </Grid>
      </Box>

    </Layout>
  )
}

export const blogPostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: contentfulBlogPost(
      slug: { eq: $slug }
    ) {
      article {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
            title
          }
        }
      }
      author {
        fullName
        avatarImage {
          gatsbyImageData(width: 50)
          title
        }
      }
      createdAt(formatString: "MMMM DD, YYYY", locale: "en")
      metaDescription
      keywords
      title
      categories
    }
  }
`

export default TestPage;