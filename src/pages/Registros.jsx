import styles from './Registros.module.css';

function Registros() {
  return (
    <main className={styles.mainContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <td>Modelo</td>
            <td>Marca</td>
            <td>Ano</td>
            <td>Editar</td>
            <td>Excluir</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Corsa</td>
            <td>Chevrolet</td>
            <td>2001</td>
            <td>📝</td>
            <td>🗑️</td>
          </tr>
          <tr>
            <td>Uno Escada dupla</td>
            <td>Fiat</td>
            <td>2000</td>
            <td>📝</td>
            <td>🗑️</td>
          </tr>
          <tr>
            <td>Manverik</td>
            <td>Ford</td>
            <td>1980</td>
            <td>📝</td>
            <td>🗑️</td>
          </tr>
          <tr>
            <td>Onix</td>
            <td>Chevrolet</td>
            <td>2019</td>
            <td>📝</td>
            <td>🗑️</td>
          </tr>
          <tr>
            <td>Fusca</td>
            <td>Volkswagen</td>
            <td>1975</td>
            <td>📝</td>
            <td>🗑️</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Registros;