/**
 * The Perils of Rehydration
 * An Eye-Opening Realization about Gatsby and React
 *h ttps://www.joshwcomeau.com/snippets/react-hooks/use-has-mounted/
 * https://www.joshwcomeau.com/react/the-perils-of-rehydration/
 */
import React from 'react';

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

export default useHasMounted;
