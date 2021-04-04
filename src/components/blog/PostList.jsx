/** @jsx jsx */
import { jsx } from '@emotion/react';

import config from '../../../config/website';

import { prevLink, nextLink, currentLink } from '../../helpers/pagination';
import { useTranslation } from '../../i18n';

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

const Cards = ({ posts, readMore }) => {
  const { t } = useTranslation();
  const readMoreText = t(readMore || config.readMore);
  return (
    <div css={styleCardsWrap}>
      {posts.edges.map(({ node }) => (
        <PostCard key={node.slug} data={node} readMore={readMoreText} />
      ))}
    </div>
  );
};

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
  readMore,
}) => {
  const {
    translations,
    address,
    mainNav,
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

  if (numPages > 1) {
    if (!isFirst) {
      links.push({
        rel: 'prev',
        href: config.siteUrl + prevLink(currentPage, to),
      });
    }
    if (!isLast) {
      links.push({
        rel: 'next',
        href: config.siteUrl + nextLink(currentPage, to),
      });
    }
  }

  return (
    <LayoutBase
      cover={cover}
      title={title || defaultTitle}
      headline={headline}
      context={{ translations, address, mainNav, socialLinks }}
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
        <Cards posts={posts} readMore={readMore} />
        <PostPagination currentPage={currentPage} numPages={numPages} slug={to} />
      </ContainerFullWidth>
    </LayoutBase>
  );
};

export default PostList;
