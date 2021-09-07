import '../styles/globals.css'
import '../styles/Landing.css'
import Navigation from './components/Navigation';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
