import { useStaticQuery, graphql } from 'gatsby';

const useAssets = () => {
  const data = useStaticQuery(graphql`
    query AssetsQuery {
      allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        edges {
          node {
            relativePath
            extension
          }
        }
      }
    }
  `);

  return data.allFile.edges;
};

export default useAssets;
