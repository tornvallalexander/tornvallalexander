import * as React from "react";
import {
  chakra,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import CustomBadge from "./CustomBadge"

type ArticleCardProps = {
  author: {
    fullName: string,
    avatarImage: ImageDataLike,
  },
  updatedAt: string,
  metaDescription: string,
  title: string,
  categories: string[],
  slug: string,
}

const ArticleCard = ({ author, updatedAt, metaDescription, title, categories, slug}: ArticleCardProps) => {
  const authorImage = getImage(author.avatarImage);

  return (
    <Box mx="1rem">
      <Flex
        p={{ base: "0", md: "50"}}
        pb={{ base: "10", md: "50"}}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          px={8}
          py={4}
          shadow="lg"
          bg="gray.800"
          maxW={{ base: "md", md: "2xl" }}
          borderRadius="2xl"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <chakra.span
              fontSize="sm"
              color="gray.400"
            >
              {updatedAt}
            </chakra.span>
            <Box>
              { categories.map((category) => {
                return (
                  <CustomBadge
                    key={category}
                  >
                    {category}
                  </CustomBadge>
                  )
              })}
            </Box>
          </Flex>

          <Box mt={2}>
            <Link
              as={RouterLink}
              to={`/p/${slug}`}
              fontSize="2xl"
              color="white"
              fontWeight="700"
              _hover={{
                color: "gray.200",
                textDecor: "underline",
              }}
            >
              {title}
            </Link>
            <chakra.p mt={2} color="gray.300">
              {metaDescription}
            </chakra.p>
          </Box>

          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Link
              as={RouterLink}
              to={`/p/${slug}`}
              color="white"
              _hover={{ textDecor: "underline" }}
            >
              Read more
            </Link>

            <Flex alignItems="center">
              <Box
                mx={4}
                w={10}
                h={10}
                rounded="full"
                fit="cover"
                display={{ base: "none", sm: "block" }}
              >
                { authorImage ? (
                  <GatsbyImage image={authorImage} alt={author.fullName} />
                ): null}
              </Box>
              <Link
                color="gray.200"
                fontWeight="700"
                cursor="pointer"
              >
                {author.fullName}
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ArticleCard;