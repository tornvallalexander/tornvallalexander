import * as React from "react";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData
} from "gatsby-source-contentful/rich-text";
import { Options } from "@contentful/rich-text-react-renderer";
import { Text, Heading, Box } from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

type BlogBodyProps = {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

type ChildrenProps = {
  children: React.ReactNode;
}

type ImageProps = {
  children: any;
}

export const Bold = ({ children }: ChildrenProps) => <strong>{children}</strong>;

export const Italic = ({ children }: ChildrenProps) => <em>{children}</em>;

export const Underline = ({ children }: ChildrenProps) => <u>{children}</u>;

export const UList = ({ children }: ChildrenProps) => (
  <ul style={{ paddingLeft: "30px", marginBottom: "2rem" }}>{children}</ul>
);

export const OList = ({ children }: ChildrenProps) => (
  <ol style={{ paddingLeft: "30px", marginBottom: "2rem" }}>{children}</ol>
);

export const ListItem = ({ children }: ChildrenProps) => (
  <li style={{ marginBottom: "-1rem" }}>{children}</li>
);

export const HorizontalRule = () => (
  <hr style={{ marginBottom: "4rem", marginTop: "4rem" }} />
);

export const EmbeddedAsset = ({ children }: ImageProps) => {
  const image = getImage(children.data.target);

  return (
    <Box mt="40px" mb="40px" borderRadius="2xl">
      {image ? (
        <GatsbyImage
          image={image}
          alt={children.data.target.title}
          style={{ borderRadius: "16px", transform: "translateZ(0)"}}
        />
      ) : null}
    </Box>
  );
};

const BlogBody = ({ content}: BlogBodyProps) => {
  const richTextOptions: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text mb="1rem" color="cyan.50" fontSize="lg">{children}</Text>,
      [BLOCKS.HEADING_1]: (node, children) => <Heading as="h1">{children}</Heading>,
      [BLOCKS.HEADING_2]: (node, children) => <Heading as="h2">{children}</Heading>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading as="h3">{children}</Heading>,
      [BLOCKS.HEADING_4]: (node, children) => <Heading as="h4">{children}</Heading>,
      [BLOCKS.HEADING_5]: (node, children) => <Heading as="h5">{children}</Heading>,
      [BLOCKS.HEADING_6]: (node, children) => <Heading as="h6">{children}</Heading>,
      [BLOCKS.QUOTE]: (node, children) => children,

      [BLOCKS.UL_LIST]: (node, children) => <UList>{children}</UList>,
      [BLOCKS.OL_LIST]: (node, children) => <OList>{children}</OList>,
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
      [BLOCKS.HR]: () => <HorizontalRule />,

      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <EmbeddedAsset>{node}</EmbeddedAsset>
      ),

    },
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: (text) => <Italic>{text}</Italic>,
      [MARKS.UNDERLINE]: (text) => <Underline>{text}</Underline>,
    }
  }
  return (
    <Box as="article">
      {renderRichText(content, richTextOptions)}
    </Box>
  )
}

export default BlogBody;