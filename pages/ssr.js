import Blog from "../components/blog";

export default function SSR({ posts }) {
  return <Blog posts={posts} />
}

export async function getServerSideProps() {

  const req = await fetch('https://63965ff1a68e43e418027940.mockapi.io/post');
  const data = await req.json();


  return {
    props: { posts: data },
  }
}

