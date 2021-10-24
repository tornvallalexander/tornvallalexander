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
        createdAt: string,
        metaDescription: string,
        title: string,
        category: string,
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
              createdAt(formatString: "MMMM DD, YYYY", locale: "en")
              metaDescription
              title
              category
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
        return (
          <ArticleCard
            data={post.node}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage
