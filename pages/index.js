import React from 'react';
import Head from 'next/head';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-37409930-1');

import { NavBar } from './../components/NavBar';
import { Header } from './../components/Header';
import { About } from './../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Github } from '../components/Github';
import { CTA } from '../components/CTA';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Danwakeem's online portfolio. Check it out." />
        <meta name="author" content="Danwakeem" />
        <meta name="description" content="DanWakeem Portfolio" />
        <meta name="author" content="DanWakeem" />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:site" content="@danwakeem" />
        <meta name="twitter:creator" content="@danwakeem" />
        <meta name="twitter:description" content="Danwakeem's online portfolio. Check it out." />
        <meta property="og:title" content="Danwakeem.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.danwakeem.com/" />
        <meta property="og:image" content="banner.jpg" />
        <meta name="og:description" content="Danwakeem's online portfolio. Check it out." />
        <title>Danwakeem | Creative</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Github />
      <CTA />
    </>
  )
}
