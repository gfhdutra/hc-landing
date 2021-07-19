import Link from 'next/link'
import Image from 'next/image'
import menuMobile from '../../../public/menu-mobile.svg'
import styles from './styles.module.css'


export default function Header() {
  return (
    <>
    <header className={styles.headerDesktop}>
      <p className={styles.title}>HC-COMMERCE</p>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/'>
          <a>Loja</a>
        </Link>
        <Link href='/'>
          <a>Contato</a>
        </Link>
    </header>
    <header className={styles.headerMobile}>
      <p className={styles.title}>HC-COMMERCE</p>
        <Link href='/'>
          <a><Image src={menuMobile} alt="menu"></Image> </a>
        </Link>
    </header>
    </>
  )
}