/** @jsx jsx */
import { jsx } from '@emotion/react';

import { siteUrl } from '../../../config/website';
import { prevLink, nextLink, currentLink } from '../../helpers/pagination';

import styleCardsWrap from '../styles/styleCardsWrap';

import LayoutBase from '../Layout/LayoutBase';
import Container, { ContainerFullWidth } from '../Container';
import SEO from '../SEO';
import styleHtml from '../styles/styleHtml';

import IconDefinitions from '../IconDefinitions';
import PostCard from './PostCard';
// import loadable from '@loadable/component';

import PostPagination from './PostPagination';
// import { CategoryWidget, TagsWidget, YearsWidget } from '../components/post-widgets';

const PostList = ({
  data,
  /**
   * keep it for the future!
   */
  /*
  pageContext: { locale, currentPage, numPages, categories, tags, years },
  */
  pageContext: { to, currentPage, numPages },
  title,
}) => {
  const {
    translations,
    address,
    mainNav,
    footerNav,
    socialLinks,
    page: {
      html,
      cover,
      title: defaultTitle,
      metaTitle,
      headline,
      metaDescription,
      noindex,
      locale,
    },
    posts,
  } = data;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const links = [];
  // eslint-disable-next-line no-console
  console.log(to, currentPage);
  if (numPages > 1) {
    if (!isFirst) {
      links.push({
        rel: 'prev',
        href: siteUrl + prevLink(currentPage, to),
      });
    }
    if (!isLast) {
      links.push({
        rel: 'next',
        href: siteUrl + nextLink(currentPage, to),
      });
    }
  }

  return (
    <LayoutBase
      cover={cover}
      title={title || defaultTitle}
      headline={headline}
      context={{ translations, address, mainNav, footerNav, socialLinks }}
    >
      <SEO
        locale={locale}
        title={metaTitle}
        description={metaDescription}
        pathname={currentLink(currentPage, to)}
        noindex={noindex}
        pageType="Blog"
        links={links}
      />
      <IconDefinitions />
      {/*
      <CategoryWidget items={categories} />
      <TagsWidget items={tags} />
      <YearsWidget items={years} />
      */}

      {isFirst && html && (
        <Container>
          <div css={styleHtml} dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      )}
      <ContainerFullWidth>
        <div css={styleCardsWrap}>
          {posts.edges.map(({ node }) => (
            <PostCard key={node.slug} data={node} />
          ))}
        </div>
        <PostPagination currentPage={currentPage} numPages={numPages} slug={to} />
      </ContainerFullWidth>
    </LayoutBase>
  );
};

export default PostList;
