const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/BlogPost.tsx');
    const profile = path.resolve("./src/templates/Profile.tsx")
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulBlogPost.edges;
        posts.forEach((post) => {
          createPage({
            path: `/p/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });
      }),
      graphql(
        `
          {
            allContentfulTeamMember {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const teamMembers = result.data.allContentfulTeamMember.edges;
        teamMembers.forEach((teamMember) => {
          createPage({
            path: `/profile/${teamMember.node.slug}/`,
            component: profile,
            context: {
              slug: teamMember.node.slug,
            },
          });
        });
      })
    );
  })
}