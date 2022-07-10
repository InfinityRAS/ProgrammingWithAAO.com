import '../styles/globals.css'
import React, { useState, Suspense } from "react";
import LoadingBar from 'react-top-loading-bar';
import dynamic from 'next/dynamic'
import Spinner from "../Components/Spinner"
import Head from 'next/head';

const Header = dynamic(() => import('../Components/Header'), {
  suspense: true,
})

const About = dynamic(() => import('../Components/About'), {
  suspense: true,
})

const Footer = dynamic(() => import('../Components/Footer'), {
  suspense: true,
})

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  function loader() {
    // e.preventDefault();
    setProgress(100)
  }

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#cedbe6" />
        <meta name="description"
          content="This Website has been Created by Application Aryan Official (AAO), This Website has been created to develop The Coding Skills of a Student, All the Content of this Website is completely free. You can Enroll the Student to see the complete video courses. You can Contact Us about Your Issue, any Problem and We will get back to you!" />
        <meta name="keywords"
          content="Application Aryan Official, Programming, ProgrammingWithAAO, ProgrammingWithAAO.com, Learn Coding, Learn Programming, Coding, Learn Coding for free, Learn Programming for free, Learn Programming and Coding for free, Free Video courses, Contact AAO, Contact ProgrammingWithAAO.com" />
        <meta name="msapplication-navbutton-color" content="#cedbe6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#cedbe6" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        <base href="/" />
      </Head>
      <Suspense fallback={<Spinner />}>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={2.5} />

        <Header loader={loader} />
        <Component {...pageProps} loader={loader} />
        <About />
        <Footer />
      </Suspense>
    </>
  );
}

export default MyApp
