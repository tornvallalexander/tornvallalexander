import * as React from "react";

import { Box, Heading } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { ImageDataLike } from "gatsby-plugin-image"

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
      slug: string,
      title: string,
    }
  }
}

const TestPage = ({ data }: BlogPostProps) => {
  const { title, metaDescription, createdAt, keywords, article, slug, author } = data.post;
  return (
    <Layout>
      <Seo title={title} description={metaDescription} />

      <Box maxW="700px" mx="auto" px="1rem" my="4rem">
        <Heading as="h1" textStyle="heading" mb="2rem">
          {title}
        </Heading>

        <BlogBody content={article} />
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
      createdAt(formatString: "MMMM DD YYYY", locale: "en")
      metaDescription
      keywords
      slug
      title
    }
  }
`

export default TestPage;