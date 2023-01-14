// Next
import Head from "next/head";
import Hero from "./_partials/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Homepage | Medipol University</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;
