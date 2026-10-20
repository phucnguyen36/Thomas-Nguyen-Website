import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import OfferPage from './OfferPage.tsx';
import './index.css';
import { Analytics } from '@vercel/analytics/react';

function RootRouter() {
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/+$/, '') || '/');
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const updateRoute = () => {
      setPath(window.location.pathname.replace(/\/+$/, '') || '/');
      setHash(window.location.hash);
    };
    window.addEventListener('popstate', updateRoute);
    window.addEventListener('hashchange', updateRoute);
    return () => {
      window.removeEventListener('popstate', updateRoute);
      window.removeEventListener('hashchange', updateRoute);
    };
  }, []);

  const isOfferRoute = path === '/offer' || hash === '#/offer' || hash === '#offer';

  return isOfferRoute ? <OfferPage /> : <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootRouter />
    <Analytics />
  </StrictMode>,
);
