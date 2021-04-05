module.exports = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `
    type Author {
      familyName: String
      givenName: String
    }

    interface Post implements Node {
      id: ID!
      title: String!
      headline: String
      metaTitle: String
      metaDescription: String
      cover: Image

      category: [Link]
      tags: [Link]
      # author: Author

      featured: Boolean
      datePublished: Date
      dateModified: Date,

      template: String
      noindex: Boolean

      html: String!
      htmlAst: JSON!
      excerpt(pruneLength: Int = 180): String!
      timeToRead: Int

      type: String!
      locale: String!
      slug: String!
      year: Int
    }

    type MdPost implements Post & Node  @dontInfer {
      title: String!
      headline: String
      metaTitle: String
      metaDescription: String
      cover: Image

      category: [Link]
      tags: [Link]

      featured: Boolean
      datePublished: Date
      dateModified: Date,

      template: String
      noindex: Boolean

      html: String! @mdpassthrough(fieldName: "html")
      htmlAst: JSON! @mdpassthrough(fieldName: "htmlAst")
      excerpt(pruneLength: Int = 180): String! @mdpassthrough(fieldName: "excerpt")
      timeToRead: Int @mdpassthrough(fieldName: "timeToRead")

      type: String!
      locale: String!
      slug: String!
      year: Int
    }
    `,
  ];

  createTypes(typeDefs);
};
