import Form from '../Form'
import styles from './styles.module.css'

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.text}>
          <h1 className={styles.title}>
          Aproveite os melhores descontos nesta Black Friday!
          </h1>
          <h2 className={styles.description}>
          Cadastre-se em nossa newsletter e garanta as melhores promoções!
          </h2>
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </div>
    </section>
  )
}