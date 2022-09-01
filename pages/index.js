import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      {/* adding html head tag */}
      <Head>
        <title>Home Page</title>
        {/* optional tags*/}
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web practices" />
        <meta name="keywords" content="HTML, CSS, JavaScript Next.js" />
        <meta name="author" content="Sudarhan" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        {/* optional tags closed */}
      </Head>

      <h1 className={styles.main_header}>Hello world</h1>
    </>
  );
};
export default Home;
