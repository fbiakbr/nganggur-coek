// pages/index.js
import Head from 'next/head';
import UnemploymentCounter from '../components/UnemploymentCounter';

export default function Home() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      <Head>
        <title>Nganggur Coek</title>
        <meta name="description" content="Nganggur Coek" />
      </Head>
      <UnemploymentCounter />
    </div>
  );
}