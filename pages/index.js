import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Coolest Blog Ever</title>
      </Head>
      <Layout />
    </div>
  );
}