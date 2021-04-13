import { useStaticQuery, graphql } from 'gatsby';

const useAssets = () => {
  const data = useStaticQuery(graphql`
    query AssetsQuery {
      allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        edges {
          node {
            base
            extension
            name
            relativePath
            relativeDirectory
            publicURL
          }
        }
      }
    }
  `);

  return data.allFile.edges;
};

export default useAssets;
