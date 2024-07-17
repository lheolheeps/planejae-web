import Image from "next/image";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./social-icons.module.css";

export function SocialIcons() {
  return (
    <div className={styles.socialIcons}>
      <a href="mailto:contato@felipeassuncao.com" className={styles.btn}>
        <FontAwesomeIcon icon={faEnvelope} width={16} />
      </a>
      <span className={styles.btn}>
        <Image src="/icon.png" alt="" width={36} height={36} />
      </span>
      <a
        href="https://instagram.com/planejae"
        target="_blank"
        className={styles.btn}
      >
        <FontAwesomeIcon icon={faInstagram} width={16} />
      </a>
    </div>
  );
}
