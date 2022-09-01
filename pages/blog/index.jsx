import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/blog.module.css";

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const Blog = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <h1>Blog Page</h1>
        <Image
          src="https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="blogImage"
          height="100"
          width="200"
        />
        {data.slice(0, 6).map((item, i) => {
          const { id, title } = item;
          return (
            <div key={i} className={styles.card}>
              <span className={styles.circle}>{id}</span>
              <Link href={`/blog/${id}`}>
                <h3 className={styles.title}>{title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blog;
