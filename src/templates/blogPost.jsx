import React from 'react';
import Layout from '../components/Layout';
import Post from '../components/Post';
import remarkNodeToPost from '../functions/remarkNodeToPost';

export default function blogPost({ pageContext }) {
    return (
        <Layout>
            <div className="my-8">
                <Post {...remarkNodeToPost({ node: pageContext })} content={pageContext.html} autoPlay={true} />
            </div>
        </Layout>
    )
}