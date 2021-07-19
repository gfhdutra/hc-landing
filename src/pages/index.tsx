import Head from 'next/head'
import Form from '../components/Form'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>HC-Commerce</title>
    </Head>
    <main className={styles.main}>
      <section className={styles.mainSection}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
          Aproveite os melhores descontos nesta Black Friday!
          </h1>
          <h2 className={styles.descricao}>
          Cadastre-se em nossa newsletter e garanta as melhores promoções!
          </h2>
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </section>
    </main>
    </>
  )
}