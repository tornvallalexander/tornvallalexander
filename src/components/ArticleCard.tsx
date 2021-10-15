import * as React from "react";
import {
  chakra,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"

type ArticleCardQueryTypes = {
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

const ArticleCard = ({ author, updatedAt, metaDescription, title, categories, slug}: ArticleCardQueryTypes) => {
  const authorImage = getImage(author.avatarImage);

  return (
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
        // rounded="lg"
        shadow="lg"
        bg="gray.800"
        maxW={{ base: "md", md: "2xl" }}
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

        <Box mt={2}>
          <Link
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
            color="brand.400"
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
  );
};

export default ArticleCard;