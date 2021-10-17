import * as React from "react"

import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type SEOProps = {
  title: string,
  description?: string,
  lang?: string,
  meta?: Meta,
  keywords?: string[],
}

type NameMetaObj = {
  name: string
  content: string
}

type PropertyMetaObj = {
  property: string
  content: string
}

type Meta = ConcatArray<NameMetaObj | PropertyMetaObj>

type QueryTypes = {
  site: {
    siteMetadata: {
      title: string,
      description: string,
      author: string,
    }
  }
}

export const Seo: React.FC<SEOProps> = ({ description="", lang="en", meta=[], title, keywords}) => {
  const { site } = useStaticQuery<QueryTypes>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
            : []
        )
        .concat(meta)}
    />
  )
}

export default Seo
