import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Social from '../components/Social'
// import styles from '../styles/Home.module.css'

export default function IndexPage(){
  return (
    <main className='index'>
      <Head>
        <title>Jaden Chant</title>
        <meta name='description' content='Homepage' />
        <meta name='keywords' content='Jaden Chant Web-Developer Software Development home' />
        <meta name='author' content='Jaden Chant' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3e90cc" />
      </Head>
      <Header />
      <section className='content bg-gray-300'>
        <h1 className='text-3xl px-8 py-10 font-bold uppercase'>Home</h1>
        <div className='text-2xl px-8 py-0 text-center'>
          <p>
            Hello, I'm Jaden Chant. I am an aspiring Web Developer. I love to
            learn new skills and develop beautiful websites.
          </p>
        </div>
        <div className='container pages'></div>
        <Social />
      </section>
    </main>
  );
};
