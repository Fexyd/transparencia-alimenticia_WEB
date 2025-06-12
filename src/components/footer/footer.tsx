import styles from "../../styles/footer/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} MiMarca. Todos los derechos reservados.
      </p>
    </footer>
  );
}
