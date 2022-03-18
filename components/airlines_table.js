import styles from './airlines_table.module.scss'

export default function AirlinesTable({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={`row ${styles.header}`}>
        <div className="col-sm">
          Nom
        </div>
        <div className="col-sm">
          IATA
        </div>
        <div className="col-sm">
          Européenne
        </div>
        <div className="col-sm">
          Modifier
        </div>
        <div className="col-sm">
          Supprimer
        </div>
      </div>
      {children}
    </div>
  )
}