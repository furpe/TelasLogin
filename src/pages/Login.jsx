import mattelogo from '../assets/mattel.png';
import styles from './Login.module.css';

function Login() {
  return (
    <main className={styles.container}>
      <section className={styles.loginCard}>
        <img
          src={mattelogo}
          alt="Logo Mattel"
          className={styles.logo}
        />

        <div className={styles.formulario}>
          <h1>Fazer Login</h1>

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

          <div className={styles.acoes}>
            <button className={styles.button}>
              Entrar
            </button>

            <a
              href="https://www.youtube.com/watch?v=qGZy0EINP3U"
              className={styles.link}
            >
              Esqueceu a senha?
            </a>

            <a href="/cadastro" className={styles.link}>
              Criar conta
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;