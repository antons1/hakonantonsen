import React from 'react';
import Layout from '../components/Layout';
import Post from '../components/Post';
import SEO from '../components/SEO';
import remarkNodeToPost from '../functions/remarkNodeToPost';

export default function blogPost({ pageContext }) {
    const { title, content, imageUrl, date, author } = remarkNodeToPost({ node: pageContext });
    return (
        <Layout>
            <SEO title={title}
                 description={content}
                 type="article"
                 image={imageUrl}>
                <meta name="article:published_time" content={date} />
                <meta name="article:author" content={author} />
                <meta name="article:section" content="Blog" />
                <meta name="article:tag" content="" />
            </SEO>
            <div className="my-8">
                <Post {...remarkNodeToPost({ node: pageContext })} content={pageContext.html} autoPlay={true} />
            </div>
        </Layout>
    )
}