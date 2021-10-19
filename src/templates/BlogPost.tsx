import * as React from "react";

import { Box, Grid, GridItem, Heading} from "@chakra-ui/react"
import { graphql } from "gatsby"
import { ImageDataLike } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogBody from "../contentful/options"
import { ContentfulRichTextGatsbyReference } from "gatsby-source-contentful/rich-text"

import BlogInfoBox from "../components/BlogInfoBox"
import FeaturedPostsBox from "../components/FeaturedPostsBox"

type BlogPostProps = {
  data: {
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

const BlogPostPage = ({ data }: BlogPostProps) => {
  const { title, metaDescription, createdAt, keywords, article, author, categories } = data.post;
  const featuredBlogPosts = data.featuredBlogPosts;

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
          <GridItem colSpan={1} color="white">
            <Box
              position="sticky"
              top="9.5rem"
            >
              <BlogInfoBox
                author={author}
                categories={categories}
                createdAt={createdAt}
              />

              <FeaturedPostsBox featuredBlogPosts={featuredBlogPosts} />
            </Box>
          </GridItem>

          <GridItem colSpan={2} textAlign="left">
              <Box bg="gray.800" borderRadius="2xl" p={{ base: "1rem", md: "2rem" }}>
                <Heading as="h1" textStyle="heading" mb="2rem" color="white">
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

export const BlogPostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    featuredBlogPosts: allContentfulBlogPost(
      limit: 2
      filter: { slug: { ne: $slug } }
    ) {
      edges {
        node {
          createdAt(formatString: "DD MMMM, YYYY", locale: "sv")
          featureImage {
            gatsbyImageData(aspectRatio: 1.333, width: 100)
            title
          }
          author {
            avatarImage {
              gatsbyImageData(width: 30)
            }
            fullName
          }
          title
          slug
        }
      }
    }
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
          ... on ContentfulCodeBlock {
            contentful_id
            __typename
            language
            code {
              code
            }
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

export default BlogPostPage;