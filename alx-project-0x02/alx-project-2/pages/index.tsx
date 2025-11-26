import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layout/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ALX Project - Next.js Setup</title>
        <meta name="description" content="Next.js + TypeScript + Tailwind starter for ALX project" />
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to ALX Project</h1>
        <p className="text-gray-700">
          This is a starter Next.js app configured with TypeScript and Tailwind CSS.
          Use this project to build reusable components, pages, and API integrations.
        </p>

        <section className="mt-8 p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">What to do next</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Create components under <code>components/</code></li>
            <li>Define interfaces under <code>interfaces/</code></li>
            <li>Build pages under <code>pages/</code> and test routing</li>
            <li>Fetch data from an external API (e.g. JSONPlaceholder)</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Home;
