import Head from 'next/head';
import { Header } from '../src/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next amplify auth</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <h1>Next amplify auth トップページ</h1>
        <p>
          <a href="/mypage">マイページへ</a>
        </p>
      </main>
    </>
  )
}
