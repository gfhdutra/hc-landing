import styles from './styles.module.css'

export default function SectionColumn() {
  return (
    <section className={styles.standardSection} >
      <div className={styles.standardContent} >

        <div className={styles.upContent}>
          <h1 className={styles.title}>
            Up Title
          </h1>
          <h2 className={styles.description}>
            Up description
          </h2>
        </div>

        <div className={styles.downContent}>
          <h1 className={styles.title}>
            Down Title
          </h1>
          <h2 className={styles.description}>
            Down Description
          </h2>
        </div>

      </div>
    </section>
  )
}