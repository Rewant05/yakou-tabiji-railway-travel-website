import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface RouterContextValue {
  pathname: string;
  navigate: (to: string) => void;
}

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

const RouterContext = createContext<RouterContextValue | null>(null);

const getPathname = () => window.location.pathname || '/';

export const RouterProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const handlePopState = () => setPathname(getPathname());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback(
    (to: string) => {
      if (to === pathname) {
        return;
      }

      window.history.pushState(null, '', to);
      setPathname(getPathname());
    },
    [pathname],
  );

  const value = useMemo(() => ({ pathname, navigate }), [navigate, pathname]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
};

export const useLocation = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useLocation must be used within RouterProvider');
  }

  return { pathname: context.pathname };
};

export const Link: React.FC<LinkProps> = ({ to, onClick, target, ...props }) => {
  const context = useContext(RouterContext);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      target
    ) {
      return;
    }

    event.preventDefault();
    context?.navigate(to);
  };

  return <a href={to} target={target} onClick={handleClick} {...props} />;
};
