import styles from './layout.module.scss'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className={styles.customContainer}>
      {children}
      <div className='centering'>
        <Link href="/">
          <a className={styles.backToHome}>Retour à l&apos;accueil</a>
        </Link>
      </div>
    </div>
  )
}