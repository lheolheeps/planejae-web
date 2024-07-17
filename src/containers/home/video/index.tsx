import styles from "./video.module.css";

export function Video() {
  return (
    <video className={styles.video} muted loop autoPlay>
      <source src="/bg.mp4" type="video/mp4" />
    </video>
  );
}
