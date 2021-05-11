/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    titleEnd: " | Hakonantonsen.no"
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-lodash",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "post",
        path: `${__dirname}/blog`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Plugins configs
        plugins: ["gatsby-remark-prismjs", "gatsby-remark-copy-linked-files", {
          resolve: `gatsby-remark-videos`,
          options: {
            pipelines: [
              {
                name: 'vp9',
                transcode: chain =>
                  chain
                    .videoCodec('libvpx-vp9')
                    .noAudio()
                    .outputOptions(['-crf 20', '-b:v 0']),
                maxHeight: 480,
                maxWidth: 900,
                fileExtension: 'webm',
              },
              {
                name: 'h264',
                transcode: chain =>
                  chain
                    .videoCodec('libx264')
                    .noAudio()
                    .addOption('-profile:v', 'main')
                    .addOption('-pix_fmt', 'yuv420p')
                    .outputOptions(['-movflags faststart'])
                    .videoBitrate('1000k'),
                maxHeight: 480,
                maxWidth: 900,
                fileExtension: 'mp4',
              },
            ],
          }
        }, "gatsby-remark-images", "gatsby-remark-autolink-headers"],
      },
    },
  ],
}
