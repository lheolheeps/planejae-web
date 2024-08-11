import { Indie_Flower, Tinos, DM_Sans } from "next/font/google";
import Image from "next/image";
import { redirect } from "next/navigation";

import { GoogleSignInButton } from "@components";
import { getUserSession } from "@lib/next-auth";
import cx from "classnames";

import styles from "./home.module.css";
import { SocialIcons } from "./social-icons";
import { Video } from "./video";

const indie = Indie_Flower({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const tinos = Tinos({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export async function Home() {
  const user = await getUserSession();
  if (user) redirect("/viagens");

  return (
    <div className={styles.home}>
      <Video />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.developedBy}>
            Feito por{" "}
            <a href="https://felipeassuncao.com" target="_blank">
              <i>{`Felipe Assunção'`}</i>
            </a>
            , mochileiro de escritório
          </span>
          <h1 className={cx(styles.title, tinos.className)}>
            <Image src="/icon.png" alt="" width={40} height={40} />
            <span className={indie.className}>Planejaê</span>: Seu próximo
            destino começa aqui!
          </h1>
          <p className={cx(styles.description, dmsans.className)}>
            Bem vindo ao Planejaê, a ferramenta definitiva para você e seus
            amigos planejarem o roteiro e organizar os detalhes de suas
            aventuras.
            <br />
            Experimente, é de graça! \0/
          </p>
          <GoogleSignInButton />
        </div>
      </div>
      <SocialIcons />
    </div>
  );
}
