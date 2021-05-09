import _ from 'lodash';

export default function remarkNodeToPost({ node }) {
    return {
        title: node.frontmatter.title,
        content: node.excerpt,
        readTime: node.timeToRead,
        author: node.frontmatter.author,
        date: new Date(node.frontmatter.date).toLocaleDateString(),
        imageUrl: _.get(node, "frontmatter.image.publicURL"),
        videoUrl: _.get(node, "frontmatter.video.publicURL"),
        bottomTitle: _.get(node, "frontmatter.titlePlacement", "top") === "bottom"
    }
}