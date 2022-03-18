import styles from './form.module.scss'

export default function Form({ children }) {
  return (
    <div className="centering">
      <div className={styles.form}>{children}</div>
    </div>
  )
}