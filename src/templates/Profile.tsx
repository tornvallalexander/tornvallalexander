import * as React from "react";

import { Box, Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import { graphql } from "gatsby"
import { ImageDataLike } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ProfileBox from "../components/ProfileBox"
import ArticleCard from "../components/ArticleCard"


type ProfileTemplateProps = {
  data: {
    profile: {
      avatarImage: ImageDataLike,
      fullName: string,
      description: string,
      linkedin: string,
      businessTitle: string,
      blogPosts: {
        title: string,
        author: {
          avatarImage: ImageDataLike,
          fullName: string
        }
        createdAt: string,
        category: string,
        slug: string,
        metaDescription: string,
      }[]
    }
  }
}

const ProfileTemplate = ({ data}: ProfileTemplateProps) => {
  const { profile } = data;
  return (
    <Layout>
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
              position={{ base: "relative", md: "sticky" }}
              top={{ base: "none", md: "9.6rem"}}
            >
              <ProfileBox
                profile={profile}
              />
            </Box>
          </GridItem>

          <GridItem colSpan={2}>
            <Box
              bg="gray.800"
              borderRadius="2xl"
              p={{ base: "1rem", md: "2rem" }}
              color="cyan.50"
              textAlign="left"
            >
              <Text fontSize="lg" fontWeight="medium">
                {profile.description}
              </Text>
              <Divider my="2rem" />
              <Heading>
                Articles
              </Heading>
              {profile.blogPosts.map((post) => {
                return (
                  <ArticleCard key={post.title} data={post} />
                )
              })}
            </Box>
          </GridItem>

        </Grid>
      </Box>
    </Layout>
  )
}

export const ProfileTemplateQuery = graphql`
  query ProfileQuery($slug: String!)
  
  {
    profile: contentfulTeamMember(slug: {eq: $slug}) {
      avatarImage {
        gatsbyImageData(width: 200)
      }
      businessTitle
      description
      fullName
      linkedin
      blogPosts: blog_post {
        title
        author {
          fullName
          avatarImage {
            gatsbyImageData
          }
        }
        createdAt(formatString: "MMMM DD, YYYY", locale: "en")
        category
        slug
        metaDescription
      }
    }
  }
`

export default ProfileTemplate;
