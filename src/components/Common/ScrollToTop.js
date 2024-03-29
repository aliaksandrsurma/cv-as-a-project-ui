import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// TODO: document me!
// Is it still relevant?
// See https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
