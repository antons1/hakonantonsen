import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ReactHelmet from 'react-helmet';

export default function SEO({
    title,
    description,
    type,
    image,
    children
}) {
    const { site: { siteMetadata: { titleEnd } } } = useStaticQuery(graphql`
query SEO {
    site {
      siteMetadata {
        titleEnd
      }
    }
  }
    `)
    return (
        <ReactHelmet>
            <title>{title}{titleEnd}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="og:title" content={title} />
            <meta name="og:type" content={type} />
            <meta name="og:description" content={description} />
            <meta name="og:image" content={image} />
            <meta name="og:locale" content="en_GB" />
            <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
            <meta name="twitter:site" content="@antons1" />
            <meta name="twitter:creator" content="@antons1" />
            {children}
        </ReactHelmet>
    )
}