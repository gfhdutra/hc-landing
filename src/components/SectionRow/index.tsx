import styles from './styles.module.css'

export default function SectionRow() {
  return (
    <section className={styles.standardSection} >
      <div className={styles.standardContent} >

        <div className={styles.leftContent}>
          <h1 className={styles.title}>
            Left Title
          </h1>
          <h2 className={styles.description}>
            Left description
          </h2>
        </div>

        <div className={styles.rightContent}>
          <h1 className={styles.title}>
            Right Title
          </h1>
          <h2 className={styles.description}>
            Right description
          </h2>
        </div>

      </div>
    </section>
  )
}