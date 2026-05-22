import mattelogo from '../assets/mattel.png';
import styles from './Cadastro.module.css';

function Cadastro() {
  return (
    <main className={styles.container}>
      <section className={styles.cadastroCard}>
        <img
          src={mattelogo}
          alt="Logo Mattel"
          className={styles.logo}
        />

        <div className={styles.formulario}>
          <h1>Cadastro</h1>

          <label className={styles.label}>Email</label>

          <input
            type="text"
            placeholder="Digite seu email"
            className={styles.input}
          />

          <label className={styles.label}>Senha</label>

          <input
            type="password"
            placeholder="Digite sua senha"
            className={styles.input}
          />

          <label className={styles.label}>
            Confirmar Senha
          </label>

          <input
            type="password"
            placeholder="Confirme sua senha"
            className={styles.input}
          />

          <div className={styles.acoes}>
            <button className={styles.button}>
              Cadastrar
            </button>

            <a href="/" className={styles.link}>
              Já tem uma conta? Faça Login
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cadastro;