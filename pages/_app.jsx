import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import Script from "next/script";
import React from 'react';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import theme from '../theme';

const SiteHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content="Filipe Lehmann - Front End Developer" />
    <meta name="description" content="Filipe Lehmann - Portfolio" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#252934" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://filipelehmann.vercel.app/" />
    <meta property="og:title" content="Filipe Lehmann - Front End Developer" />
    <meta
      property="og:description"
      content="Filipe Lehmann's personal portfolio"
    />
    <meta property="og:image" content="/logo512.png" />
    <noscript>
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript>
  </Head>
);

import { Box, useColorModeValue } from '@chakra-ui/react';

const PageWrapper = ({ children, title }) => {
  // Gradient backgrounds for light and dark mode (same as Landing.jsx)
  const gradientBgTop = useColorModeValue(
    `linear-gradient(0deg, #fff 10%, rgb(186 230 253 / 0.8) 100%)`, // light
    'linear-gradient(0deg, #1a202c 0%, #2a4365 100%)' // dark
  );
  const gradientBgBottom = useColorModeValue(
    'linear-gradient(180deg, #fff 10%, rgb(186 230 253 / 0.8) 100%)', // light
    'linear-gradient(180deg, #1a202c 0%, #2a4365 100%)' // dark
  );

  return (
    <div className="container relative">
      <Box
        minH="100vh"
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        bg={gradientBgTop}
        transition="background 0.5s"
        position={'absolute'}
        top={0}
        zIndex={-1}
      />
      <Box
        minH="100vh"
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        bg={gradientBgBottom}
        transition="background 0.5s"
        position={'absolute'}
        bottom={0}
        zIndex={-1}
      />
      <SiteHead title={title} />
      <NavBar />

      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  const pathToTitle = {
    '/': 'Filipe Lehmann - Front End Developer',
  };

  return (
    <ChakraProvider theme={theme}>
      <PageWrapper title={pathToTitle[pathname]}>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default App;
