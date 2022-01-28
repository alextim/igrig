import { useTranslation } from '@/i18n';

import BaseLayout from '@/components/Layout/BaseLayout';
import Container, { ContainerFullWidth } from '@/components/Container';
import SEO from '@/components/SEO';

import IconDefinitions from '@/components/IconDefinitions';

import config from '../../../../igrig.content/config/website';
import { prevLink, nextLink } from './helpers/pagination';

import styleCardsWrap from '../../styles/styleCardsWrap';
import styleHtml from '../../styles/styleHtml';

// import loadable from '@loadable/component';

import PostPagination from './PostPagination';
// import { CategoryWidget, TagsWidget, YearsWidget } from '../components/post-widgets';

const Cards = ({ posts, readMore, cardComponent }) => {
  const { t } = useTranslation();
  const readMoreText = t(readMore || config.readMore);
  return posts.edges.map(({ node }) => cardComponent(node.slug, node, readMoreText));
};

const PostListBase = ({
  data,
  pathname,
  /**
   * keep it for the future!
   */
  /*
  pageContext: { locale, to, currentPage, numPages, categories, tags, years },
  */
  pageContext: { locale, to, currentPage, numPages },
  title,
  readMore,
  cardComponent,
}) => {
  const {
    translations,
    address,
    mainNav,
    socialLinks,
    page: { html, cover, title: defaultTitle, metaTitle, headline, metaDescription, noindex },
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
    <BaseLayout
      cover={cover}
      title={title || defaultTitle}
      headline={headline}
      context={{ translations, address, mainNav, socialLinks }}
    >
      <SEO
        locale={locale}
        title={metaTitle}
        description={metaDescription}
        pathname={pathname}
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
          <Cards posts={posts} readMore={readMore} cardComponent={cardComponent} />
        </div>
        <PostPagination currentPage={currentPage} numPages={numPages} slug={to} />
      </ContainerFullWidth>
    </BaseLayout>
  );
};

export default PostListBase;
