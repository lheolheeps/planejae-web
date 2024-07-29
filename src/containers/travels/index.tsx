import { Fragment } from "react";

import { Button, EllipsisButton } from "@components";
import {
  faCalendar,
  faLocationDot,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MOCK = [
  {
    destination: "Florianópolis, Brasil",
    period: "17 de Julho a 16 de Agosto",
  },
  {
    destination: "Blumenau, Brasil",
    period: "16 de Agosto a 26 de Agosto",
  },
];

export function Travels() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-zinc-50">Próximas Viagens</h1>
        <Button href="/viagens/nova" label="Nova Viagem" icon={faPlus} />
      </div>
      <div className="rounded-md border border-zinc-500 bg-zinc-900">
        {MOCK.map((travel, idx) => (
          <Fragment key={`viagem-${idx}`}>
            <div className="p-3 cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faLocationDot} width={16} />
                  {travel.destination}
                </p>
                <EllipsisButton
                  accessibleText={`Opções sobre a viagem para ${travel.destination}`}
                  options={[
                    {
                      label: "Alterar local/data",
                      href: "/viagens/atualizar/1",
                    },
                    {
                      label: "Excluir viagem",
                      href: "/viagens/deletar/1",
                    },
                  ]}
                />
              </div>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} width={16} />
                {travel.period}
              </p>
            </div>
            {idx + 1 < MOCK.length && <hr className="border-zinc-500" />}
          </Fragment>
        ))}
      </div>
    </>
  );
}
