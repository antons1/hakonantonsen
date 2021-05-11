import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Post from '../components/Post';
import SEO from '../components/SEO';
import remarkNodeToPost from '../functions/remarkNodeToPost';

export default function blog({ data }) {
    const { allMarkdownRemark: { edges }} = data;
    return(
        <Layout>
            <SEO title="Blog"
                 description={`Håkon Antonsen's blog.
                 ${edges.length} posts, last updated ${edges[0].node.frontmatter.date}`}
                 type="website"
                 image={edges[0].node.frontmatter.image.publicURL} >
                <meta name="robots" content="noindex" />
            </SEO>
            {edges.map((post) => <div className="my-4"><Link to={`/blog/${post.node.frontmatter.slug}`}><Post {...remarkNodeToPost(post)} /></Link></div>)}
        </Layout>
    );
}

export const query = graphql`
query blogQuery {
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