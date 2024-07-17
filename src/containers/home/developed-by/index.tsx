import styles from "./developed-by.module.css";

export function DevelopedBy() {
  return (
    <div className={styles.developedBy}>
      <p>
        Desenvolvido por{" "}
        <a href="https://felipeassuncao.com" target="_blank">
          <i>{`Felipe Assunção'`}</i>
        </a>
      </p>
    </div>
  );
}
