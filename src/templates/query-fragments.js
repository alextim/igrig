import { graphql } from 'gatsby';

export const mdPageFragment = graphql`
  fragment MdPageFragment on MdPage {
    title
    headline
    metaTitle
    metaDescription
    cover {
      sm {
        publicURL
        childImageSharp {
          # fluid(maxWidth: 480)
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      alt
      title
    }
    noindex
    sections {
      title
      subtitle
      text
      image {
        sm {
          childImageSharp {
            # fluid(maxWidth: 480)
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        alt
        title
      }
      items {
        title
        to
        subtitle
        text
        icon
        image {
          sm {
            childImageSharp {
              # fluid(maxWidth: 480)
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          alt
          title
        }
      }
    }
    html
  }
`;

export const addressFragment = graphql`
  fragment AddressFragment on Address {
    name
    legalName
    alternateName
    description
    postalAddress {
      streetAddress
      addressLocality
      addressRegion
      postalCode
      addressCountry
    }
    contactPoint {
      name
      description
      contactType
      areaServed
      telephone
      email
    }
  }
`;
