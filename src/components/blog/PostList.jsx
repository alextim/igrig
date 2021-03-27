/** @jsx jsx */
import { jsx } from '@emotion/react';

import { siteUrl } from '../../../config/website';
import { prevLink, nextLink } from '../../helpers/pagination';

import styleCardsWrap from '../styles/styleCardsWrap';

import LayoutBase from '../Layout/LayoutBase';
import Container, { ContainerFullWidth } from '../Container';
import SEO from '../SEO';
import styleHtml from '../styles/styleHtml';

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
  pageContext: { currentPage, numPages },
  title,
  subpath,
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
      slug,
    },
    posts,
  } = data;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const links = [];

  if (numPages > 1) {
    if (!isFirst) {
      links.push({
        rel: 'prev',
        href: siteUrl + prevLink(currentPage, slug),
      });
    }
    if (!isLast) {
      links.push({
        rel: 'next',
        href: siteUrl + nextLink(currentPage, slug),
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
        pathname={slug}
        noindex={noindex}
        pageType="Blog"
        links={links}
      />
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
        <PostPagination currentPage={currentPage} numPages={numPages} slug={subpath || slug} />
      </ContainerFullWidth>
    </LayoutBase>
  );
};

export default PostList;
