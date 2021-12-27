import Head from "next/head";
import Error from "../components/Layout/Error";

export default function Custom500() {
  return (
    <div>
      <Head>
        <title>500 | Internal server error</title>
        <meta name="description" content="500 | Internal server error" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta property="og:title" content="500 | Internal server error" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Error
          title="Internal server error"
          subtitle="Oops, something went wrong."
          errorType="server"
        />
      </main>
    </div>
  );
}
