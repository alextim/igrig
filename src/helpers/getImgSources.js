const getImgSources = (src, path, ext) =>
  Object.keys(src).reduce(
    (acc, w) => {
      let defaultSrc;
      let { srcset, sizes } = acc;
      if (srcset) {
        srcset += ', ';
        sizes += ', ';
      }
      srcset += `${path}${w}w.${ext} ${w}w`;
      if (src[w] !== '') {
        sizes += `(max-width: ${w}px) `;
        sizes += `${src[w]}px`;
      } else {
        sizes += `${w}px`;
        defaultSrc = `${path}${w}w.${ext}`;
      }
      return { srcset, sizes, defaultSrc };
    },
    { srcset: '', sizes: '' },
  );

export default getImgSources;
