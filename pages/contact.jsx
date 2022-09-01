import Head from "next/head";
import styles from "../styles/contact.module.css";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <h1 className={styles.main_header}>contact page</h1>
    </>
  );
};

export default contact;
