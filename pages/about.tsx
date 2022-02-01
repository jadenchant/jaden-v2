import Head from 'next/head'
import Header from "../components/Header";
import Social from "../components/Social";
import "../styles/css/about.css";

export default function About() {
  return (
    <main className='about'>
      <Head>
        <title>About Me</title>
        <meta name='description' content='About Jaden Chant' />
        <meta name='keywords' content='Jaden Chant Web-Developer Software Development about' />
        <meta name='author' content='Jaden Chant' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
      <Header />
      <section className='content w-full pt-8'>
        <Social />
      </section>
    </main>
  );
};
