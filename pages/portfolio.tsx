import { useState, useEffect } from "react";
import Head from 'next/head'
import Header from "../components/Header";
import Social from "../components/Social";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   if (!portfolio) {
  //     firebase
  //       .database()
  //       .ref("pages/portfolio")
  //       .once("value")
  //       .then(snapshot => {
  //         setPortfolio(snapshot.val());
  //       })
  //       .catch(e => setError("Data Not Found: " + e));
  //   }
  // }, []);

  const headComponent = (
    <Head>
        <title>Portfolio</title>
        <meta name='description' content='Homepage' />
        <meta name='keywords' content='Jaden Chant Web-Developer Software Development home' />
        <meta name='author' content='Jaden Chant' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>
  );

  let portfolioDisplay;
  if (!portfolio) {
    portfolioDisplay = (
      <div className='noInfo'>
        <div>No Info</div>
      </div>
    );
  } else {
    portfolioDisplay = (
      <div className='info'>
        <div>{portfolio.data[0].name}</div>
      </div>
    );
  }

  return (
    <main className='portfolio'>
      {headComponent}
      <Header />
      <section className='content'>
        <div className='flex content-center justify-center py-7'>
          {portfolioDisplay}
        </div>
        <Social />
      </section>
    </main>
  );
};
