/* eslint-disable no-console */
const path = require('path');
const { createPages } = require('@alextim/at-blog');
// const { createPages } = require('../../plugins/at-blog');

const { cardsPerPage, templatesDir } = require('../../igrig.content/config/website');
const i18n = require('../i18n/i18n');

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  console.log('=====createPosts=====');
  const result = await graphql(`
    {
      site {
        siteMetadata {
          siteUrl
          locales {
            code
          }
        }
      }
      posts: allMdPost(limit: 1000, sort: { fields: [datePublished], order: DESC }) {
        edges {
          node {
            id
            template
            slug
            type
            locale
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
    return;
  }
  ['photo-serie', 'photo-project'].forEach((type) => {
    const edges = result.data.posts.edges.filter(({ node }) => node.type === type);
    createPages({
      locales: result.data.site.siteMetadata.locales,
      edges,

      type,

      createPage,

      cardsPerPage,

      blogPath: `/${type}s/`,

      templatesDir: path.join(__dirname, '..', templatesDir, type),

      i18n,

      postListTemplateName: `${type}-list`,
      postDefaultTemplateName: `${type}-post`,
    });
  });
};
