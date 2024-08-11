import Link from "next/link";
import { Fragment } from "react";

import { Button, EllipsisButton } from "@components";
import {
  faCalendar,
  faLocationDot,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";

import styles from "./travels.module.css";

const MOCK = [
  {
    id: "1",
    destination: "Florianópolis, Brasil",
    period: "17 de Julho a 16 de Agosto",
  },
  {
    id: "2",
    destination: "Blumenau, Brasil",
    period: "16 de Agosto a 26 de Agosto",
  },
  {
    id: "3",
    destination: "Porto Alegre, Brasil",
    period: "16 de Setembro a 26 de Setembro",
  },
  {
    id: "4",
    destination: "Salvador, Brasil",
    period: "16 de Dezembro a 26 de Dezembro",
  },
];

export function Travels() {
  return (
    <>
      <div
        className={cn(styles.pageTitle, "flex gap-2 flex-col justify-between")}
      >
        <h1 className="text-2xl text-zinc-50">Próximas viagens</h1>
        <Button href="/viagens/nova" label="Nova viagem" icon={faPlus} />
      </div>
      <div className="rounded-md bg-zinc-900">
        {MOCK.map((travel, idx) => (
          <Fragment key={`viagem-${idx}`}>
            <div className="flex w-full p-2">
              <Link href={`/viagens/${travel.id}`} className="w-full relative">
                <p className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon icon={faLocationDot} width={16} />
                  {travel.destination}
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendar} width={16} />
                  {travel.period}
                </p>
              </Link>
              <EllipsisButton
                accessibleText={`Opções sobre a viagem para ${travel.destination}`}
                options={[
                  {
                    label: "Alterar local/data",
                    href: `/viagens/${travel.id}/atualizar`,
                  },
                  {
                    label: "Excluir viagem",
                    href: `/viagens/${travel.id}/deletar`,
                  },
                ]}
              />
            </div>
            {idx + 1 < MOCK.length && (
              <div className="px-2">
                <hr className="border-zinc-500" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </>
  );
}
