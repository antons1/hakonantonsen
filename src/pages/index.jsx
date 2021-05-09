import React from "react";
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Post from "../components/Post";
import remarkNodeToPost from '../functions/remarkNodeToPost';

export default function Home({ data }) {
  const { allMarkdownRemark: { edges } } = data;
  return (
    <Layout>
      <div className="flex justify-between my-6 flex-wrap md:flex-nowrap">
        <div className={`w-full ${edges[1] ? "md:w-2/3 md:pr-8" : ""} mb-8 md:mb-0 self-stretch`}>
          <Link to={`/blog/${edges[0].node.frontmatter.slug}`}><Post {...remarkNodeToPost(edges[0])} autoPlay={true} /></Link>
        </div>
        {edges[1] && <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div className="mb-8 md:mb-4">
            <Link to={`/blog/${edges[1].node.frontmatter.slug}`}><Post maxContentHeight={8} maxHeadingHeight={4} {...remarkNodeToPost(edges[1])} autoPlay={false} /></Link>
          </div>
          {edges[2] && <div className="mb-8 md:mb-0">
            <Link to={`/blog/${edges[2].node.frontmatter.slug}`}><Post maxContentHeight={8} maxHeadingHeight={4} {...remarkNodeToPost(edges[1])} autoPlay={false} /></Link>
          </div>}
        </div>}
      </div>
    </Layout>);
}

export const query = graphql`
query HomeQuery {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        excerpt(pruneLength: 500)
        html
        timeToRead
        frontmatter {
          author
          date
          title
          slug
          titlePlacement
          image {
            publicURL
          }
          video {
            publicURL
          }
        }
      }
    }
  }
}
`