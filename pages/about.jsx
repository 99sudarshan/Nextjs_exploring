import Head from "next/head";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <h1 className={styles.main_header}>About page content</h1>
    </>
  );
};

export default About;
