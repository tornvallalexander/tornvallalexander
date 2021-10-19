import * as React from "react"

import Layout from "../components/layout"
import ArticleCard from "../components/ArticleCard";
import { graphql, useStaticQuery } from "gatsby"
import { ImageDataLike } from "gatsby-plugin-image"
import Seo from "../components/seo"

type IndexQueryTypes = {
  allContentfulBlogPost: {
    edges: {
      node: {
        author: {
          fullName: string,
          avatarImage: ImageDataLike,
        }
        updatedAt: string,
        metaDescription: string,
        title: string,
        categories: string[],
        slug: string,
      }
    }[]
  }
}

const IndexPage = () => {
  const { allContentfulBlogPost } = useStaticQuery<IndexQueryTypes>(
    graphql`
      {
        allContentfulBlogPost {
          edges {
            node {
              author {
                fullName
                avatarImage {
                  gatsbyImageData(width: 50)
                }
              }
              updatedAt(formatString: "MMMM DD, YYYY", locale: "en")
              metaDescription
              title
              categories
              slug
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Seo
        title="tornvallalexander"
        description="I solve problems for a living."
      />
      { allContentfulBlogPost.edges.map((post) => {
        const { author, updatedAt, metaDescription, title, categories, slug} = post.node
        return (
          <ArticleCard
            key={title}
            author={author}
            categories={categories}
            metaDescription={metaDescription}
            slug={slug}
            title={title}
            updatedAt={updatedAt}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage
