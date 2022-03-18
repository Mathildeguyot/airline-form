import styles from './back_home_button.module.scss'
import Link from 'next/link'

export default function backHomeButton({ children }) {
  return (
    <Link href="/" className={styles.backToHome}>
      <a>Retour à laccueil {children}</a>
    </Link>
  )
}