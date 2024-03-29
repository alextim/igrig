/* eslint-disable @emotion/syntax-preference */
import { Global, css } from '@emotion/react';

import BODY_PREVENT_SCROLLING from '../../constants/body-prevent-scrolling';

import links from '../../theme/links';
import sizes from '../../theme/sizes';
import colors from '../../theme/colors';
import mq, { breakpoints } from '../../theme/media-queries';
import fonts from '../../theme/fonts';
import lineHeights from '../../theme/line-heights';
import { fontSizes } from '../../theme/font-sizes';
import fontWeights from '../../theme/font-weights';
import { space } from '../../theme/space';

const GlobalStyle = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html,
      body {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeSpeed;
        margin: 0;
        padding: 0;
        overflow-wrap: break-word;
        word-wrap: break-word;
      }

      html {
        scroll-padding-top: calc(${sizes.header.sm} + 1.5rem);
        ${mq.lg} {
          scroll-padding-top: calc(${sizes.header.lg} + 1.5rem);
        }
      }

      html {
        min-height: -webkit-fill-available;
      }

      body {
        min-height: 100vh;
        min-height: -webkit-fill-available;
      }
      /**
      * https://google-webfonts-helper.herokuapp.com/fonts
      */
      /*
      // oswald-700 - cyrillic
      @font-face {
        font-family: 'Oswald';
        font-display: swap;
        font-style: normal;
        font-weight: 700;
        src: local('Oswald Bold'), local('Oswald-Bold'), local('OswaldBold'),
          url('/assets/fonts/oswald-v36-latin_cyrillic-700.woff2') format('woff2');
      }
      @font-face {
        font-family: 'fallback-heading-font';
        advance-override: -0.0923828125; // Letter spacing: -1.5px
        src: local('Arial');
      }
      */
      @font-face {
        font-family: 'Oswald';
        font-display: swap;
        font-style: normal;
        font-weight: 400;
        src: local('Oswald Regular'), local('Oswald-Regular'), local('OswaldRegular'),
          url('/assets/fonts/oswald-v36-latin_cyrillic-regular.woff2') format('woff2');
      }

      @font-face {
        font-family: 'Aclonica';
        font-display: swap;
        font-style: normal;
        font-weight: 400;
        src: local('Aclonica'),
          url('/assets/fonts/aclonica-v11-latin-regular-webfont.woff2') format('woff2');
      }

      body {
        font-family: ${fonts.body};
        line-height: ${lineHeights.body};
        font-weight: ${fontWeights.body};
        color: ${colors.text};
        background-color: ${colors.background};
      }

      a,
      abbr,
      acronym,
      address,
      applet,
      article,
      aside,
      audio,
      b,
      big,
      blockquote,
      html,
      canvas,
      caption,
      center,
      cite,
      code,
      dd,
      del,
      details,
      dfn,
      div,
      dl,
      dt,
      em,
      embed,
      fieldset,
      figcaption,
      figure,
      footer,
      form,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      header,
      hgroup,
      html,
      i,
      iframe,
      img,
      ins,
      kbd,
      label,
      legend,
      li,
      mark,
      menu,
      nav,
      object,
      ol,
      output,
      p,
      pre,
      q,
      ruby,
      s,
      samp,
      section,
      small,
      span,
      strike,
      strong,
      sub,
      summary,
      sup,
      table,
      thtml,
      td,
      tfoot,
      th,
      thead,
      time,
      tr,
      tt,
      u,
      ul,
      var,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
      }

      article,
      aside,
      footer,
      header,
      main,
      nav,
      section {
        display: block;
      }

      /*
        ol,
        ul {
          list-style-type: none;
          -webkit-padding-start: 0;
        }
        */
      a,
      button {
        cursor: pointer;
      }

      a {
        /* color: inherit; */
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
      }

      /* SHARED */
      *:focus {
        /* outline: 1px solid #3740ff; */
        outline: none;
      }

      /* LINKS */
      a {
        /* color: ${colors.text}; */
        color: ${links.color};
      }
      a,
      :link,
      :visited {
        text-decoration: none;
      }

      a:active,
      :link:focus,
      :link:active,
      :visited:focus,
      :visited:active {
        /* outline: 1px solid #3740ff; */
        outline: none;
      }

      a:focus,
      a:active,
      a:hover,
      :link:focus,
      :link:active,
      :link:hover,
      :visited:focus,
      :visited:active,
      :visited:hover {
        text-decoration: underline;
        /* text-decoration: none; */
      }

      a:hover: {
        color: ${colors.highlight};
      }

      /* BUTTONS */
      button {
        min-width: 2rem;
      }

      @media (max-width: ${breakpoints.lg}) {
        .${BODY_PREVENT_SCROLLING} {
          height: 100%;
          position: fixed;
        }
      }

      h1, h2, h3, h4 {
        &:not(:first-of-type) { /* first-child */
          margin-top: 3rem;
        }
        margin-bottom: ${space[4]};
        font-family: ${fonts.heading};
        font-weight: ${fontWeights.heading};
        line-height: ${lineHeights.heading};
        color: ${colors.heading};
      }

      h1, h2, h3 {
        text-transform: uppercase;
      }

      h1 {
        font-size: ${fontSizes[5]};
        text-align: center;
        ${mq.lg} {
          font-size: ${fontSizes[8]};
        }
      }
      h2, h3, h4, h5, h6 {
        text-align: left;
      }

      h2 {
        font-size: ${fontSizes[4]};
        ${mq.lg} {
          font-size: ${fontSizes[6]};
        }
      }

      h3 {
        font-size: ${fontSizes[3]};
        ${mq.lg} {
          font-size: ${fontSizes[5]};
        }
      }

      h5, h6 {
        font-size: ${fontSizes[2]};
        margin-bottom: ${space[2]};
        &:not(:first-of-type) { /* first-child */
          margin-top: 2rem;
        }
      }


      ol,
      ul {
        margin: 0 0 1rem 2rem;
      }

      ul {
        list-style: disc outside;
      }

      ol {
        list-style: decimal outside;
      }

      li > ul,
      li > ol {
        margin: 0 0 0 2rem;
      }

      li {
        margin-bottom: 0.5rem;
        &:last-of-type {
          margin-bottom: 0;
        }
      }

      p {
        margin-bottom: 0.75rem;
        /*
          &:last-of-type {
            margin-bottom: 0;
          }
          */
      }
      p, ul, ol {
        + h2 {
          margin-top: ${space[7]};
        }
        + h3 {
          margin-top: ${space[7]};
        }
        + h4 {
          margin-top: ${space[7]};
        }
      }

      input,
      select,
      textarea {
        margin: 0;
        color: inherit;
        background-color: transparent;
      }
      input:-internal-autofill-selected {
        background-color: transparent !important;
      }

      input[type='text'],
      input[type='email'],
      input[type='phone'],
      select,
      textarea {
        padding: 0.5rem;
        width: 100%;
        min-width: 0;
        border: 1px solid;
        border-radius: 4px;
        font-family: ${fonts.body};
        font-size: inherit;
        line-height: inherit;
      }

      input[type='text'],
      input[type='email'],
      input[type='phone'],
      textarea {
        appearance: none;
      }

      .left,
      .right {
        width: 100%;
        margin-bottom: ${space[2]}
      }

      .left {
        ${mq.lg} {
          float: left;
          margin-right: ${space[2]}
        }
      }

      .right {
        ${mq.lg} {
          float: right;
          margin-left: ${space[2]}
        }
      }
      .clearfix::after {
        content: "";
        clear: both;
        display: block;
      }

      .w-10 {
        ${mq.lg} {
          width: 10%;
        }
      }
      .w-20 {
        ${mq.lg} {
          width: 20%;
        }
      }
      .w-30 {
        ${mq.lg} {
          width: 30%;
        }
      }
      .w-40 {
        ${mq.lg} {
          width: 40%;
        }
      }
      .w-50 {
        ${mq.lg} {
          width: 50%;
        }
      }
      .w-60 {
        ${mq.lg} {
          width: 60%;
        }
      }
      .w-70 {
        ${mq.lg} {
          width: 70%;
        }
      }
      .w-80 {
        ${mq.lg} {
          width: 80%;
        }
      }
      .w-90 {
        ${mq.lg} {
          width: 90%;
        }
      }
      .w-100{
        width: 100%;
      }

      .grid-2,
      .grid-3 {
        display: grid;
        grid-gap: ${space[4]};
        margin-bottom: ${space[4]};
      }

      .grid-2 {
        ${mq.lg} {
          grid-template-columns: 1fr 1fr;
        }
      }

      .grid-3 {
        ${mq.lg} {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }

      img {
        height: auto;
        width: 100%;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        > tbody, > thead {
          display: table-row-group !important;
        }
        td {
          border-width: 1px 0 1px 0;
          border-color: #ced5d9;
        }
        td, th {
          padding: 1.5rem 0.6rem;
          border: 0 solid #ccc';
        }
        th {
          border-width: 0 0 1px 0;
          border-color: ${colors.black};
        }
        tr {
          &:nth-of-type(even) {
            background-color: ${colors.tables.even};
          }
          &:nth-of-type(odd) {
            background-color: ${colors.tables.odd};
          }
        }
        tr {
          &:first-of-type {
            border-width: 0 0 1px 0;
            border-color: ${colors.black};
          }
        }
      }

    `}
  />
);

export default GlobalStyle;
