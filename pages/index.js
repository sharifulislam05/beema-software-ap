import Head from "next/head";
import Layout from "../src/components/Layout/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
