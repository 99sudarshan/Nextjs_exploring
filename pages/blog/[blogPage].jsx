import { useRouter } from "next/router";
import styles from "../../styles/blog.module.css";

export const getStaticPaths = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      paths: data.map((item) => {
        return {
          params: {
            blogPage: item.id.toString(),
          },
        };
      }),
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps = async (context) => {
  try {
    const id = context.params.blogPage;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
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

const blogPage = ({ data }) => {
  const route = useRouter();
  const page = route.query.blogPage;
  return (
    <>
      <div className={styles.detail}>
        <h1>Blog {page} details</h1>
        <h2 className={styles.page}>{data.title}</h2>
        <p> {data.body}</p>
      </div>
    </>
  );
};

export default blogPage;

// dynamic routing page
