import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next blog demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Blog demo
        </h1>

        <div className={styles.grid}>
          <Link href="/ssr">
            <div className={styles.card}>
              SSR
            </div>
          </Link>
          <Link href="/ssg">
            <div className={styles.card}>
              SSG
            </div>
          </Link>
        </div>

      </main>

      <footer className={styles.footer}>
        <span>Posts count: </span>
      </footer>
    </div>
  )
}

export async function getStaticProps() {

  const req = await fetch('https://63965ff1a68e43e418027940.mockapi.io/post');
  const data = await req.json();


  return {
    props: { posts: data },
  }
}

