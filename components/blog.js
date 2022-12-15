/** @jsxImportSource theme-ui */
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ColorModeButton from './ColorModeButton'
export default function Blog({ posts }) {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Blog demo
        </h1>
        <p className={styles.description}>
          Static Site Generator
        </p>
        <ColorModeButton />
        <div className={styles.grid}>
          {
            posts.map((post) => (

              <div key={post.id} className={styles.card} sx={{ variant: 'card' }}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>

            ))
          }
        </div>
      </main>
      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  )
}