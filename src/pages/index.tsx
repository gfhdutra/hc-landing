import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>HC-Commerce</title>
    </Head>
    <Header />
    <main className={styles.main}>
      <HeroSection /> 
    </main>
    <Footer />
    </>
  )
}