/* eslint-disable no-console */
const path = require('path');

const { cardsPerPage, templatesDir } = require('../../config/website');
const i18n = require('../i18n/i18n');

const { createPages } = require('../../plugins/at-blog');

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
      posts: allMdPost(
        limit: 1000
        filter: { type: { eq: "photography" } }
        sort: { fields: [datePublished], order: DESC }
      ) {
        edges {
          node {
            id
            template
            tags {
              title
              to
            }
            category {
              title
              to
            }
            slug
            type
            locale
            year
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
    return;
  }

  createPages({
    locales: result.data.site.siteMetadata.locales,
    edges: result.data.posts.edges,

    type: 'photography',

    createPage,

    cardsPerPage,

    blogPath: '/photography/',

    templatesDir: path.join(__dirname, '..', templatesDir, 'photography'),

    i18n,

    postListTemplateName: 'photography-list',
    postDefaultTemplateName: 'photography-post',
  });
};
