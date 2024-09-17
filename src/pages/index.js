import Layout from "@/components/layout";
import Link from "next/link";
import { getPosts } from "../../lib/posts";

export default function Home({ posts }) {
  return (
    <Layout pageTitle="Home">
      <Link href="/about">About</Link>
      <ul>
        {posts.map(({ title }) => {
          return <li>{title}</li>;
        })}
      </ul>
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};
