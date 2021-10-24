import * as React from "react";

import { Box, Heading, Link } from "@chakra-ui/react"

import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import CustomBadge from "./CustomBadge"
import { LinkIcon } from "@chakra-ui/icons"

type ProfileBoxProps = {
  profile: {
    avatarImage: ImageDataLike,
    fullName: string,
    description: string,
    businessTitle: string,
    linkedin: string,
  }
}

const ProfileBox = ({ profile }: ProfileBoxProps) => {
  const { avatarImage, fullName, businessTitle, linkedin } = profile;

  const profileImage = getImage(avatarImage)
  return (
    <Box
      bg="gray.800"
      borderRadius="2xl"
      p={{ base: "1rem", md: "2rem" }}
      mb={{ base: "2rem", md: "0rem"}}
    >
      <Box>
        { profileImage && (
          <GatsbyImage image={profileImage} alt={fullName} />
        )}
        <Heading as="h1" fontSize="3xl" mb=".5rem">
          {fullName}
        </Heading>
        <CustomBadge>
          {businessTitle}
        </CustomBadge>
        <Box mt="2rem">
          <Link
            href={linkedin}
            target="_blank"
          >
            Find me on LinkedIn
            <LinkIcon ml="4px" />
          </Link>
        </Box>
      </Box>

    </Box>
  )
}

export default ProfileBox;