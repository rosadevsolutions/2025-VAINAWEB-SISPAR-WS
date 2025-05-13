import { useState } from "react";
import IconMotivo from "../../assets/Solicitacao/icon-motivo.svg";
import IconTrash from "../../assets/Solicitacao/icon-trash.svg";
import styles from "./SolicitacaoTable.module.scss";

const rawData = [
  {
    colaborador: "Romulo Rosa",
    empresa: "Rosadev Solutions",
    numeroPrestacao: "329456",
    data: "2025-03-10",
    descricao: true,
    tipoDespesa: "Desp. de viagem administrativa",
    centroCusto: "1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ",
    ordemInterna: "0003",
    divisao: "002",
    pep: "001",
    moeda: "BRL",
    distanciaKm: 434,
    ValorKm: 0.65,
    valorFaturado: 242.10,
    despesa: 40.05
  },
  {
    colaborador: "Samuel Silvério",
    empresa: "Vai na Web",
    numeroPrestacao: "987789",
    data: "2025-03-09",
    descricao: true,
    tipoDespesa: "Desp. de viagem administrativa",
    centroCusto: "1100110102 - FIN CONTABILIDADE MTZ",
    ordemInterna: "0002",
    divisao: "005",
    pep: "001",
    moeda: "ARS",
    distanciaKm: 289,
    ValorKm: 0.37,
    valorFaturado: 106.93,
    despesa: 0.00
  },
  {
    colaborador: "Karyne Moreira",
    empresa: "Wilson Sons",
    numeroPrestacao: "546791",
    data: "2025-03-08",
    descricao: true,
    tipoDespesa: "Eventos de prestação",
    centroCusto: "1100109002 - FIN CONTROLES INTERNOS MTZ",
    ordemInterna: "0001",
    divisao: "005",
    pep: "001",
    moeda: "USD",
    distanciaKm: 197,
    ValorKm: 0.75,
    valorFaturado: 109.75,
    despesa: 29.97
  }
]

export default function SolicitacaoTable() {
  const [tableData, setTableData] = useState(rawData)

  return (
    <div className={styles.table__wrapper}>
      <table className={styles.table__content}>
        <thead className={styles.table__head}>
          <tr>
            <th></th>
            <th>Colaborador(a)</th>
            <th className={`${styles.table__line} ${styles.table__line__empresa}`}>Empresa</th>
            <th>Nº Prest.</th>
            <th>Data</th>
            <th>Motivo</th>
            <th className={`${styles.table__line} ${styles.table__line__tipodespesas}`}>Tipo de Despesa</th>
            <th className={`${styles.table__line} ${styles.table__line__centrocustos}`}>Ctr. Custo</th>
            <th>Ord. Int.</th>
            <th>Div.</th>
            <th>PEP</th>
            <th>Moeda</th>
            <th>Dist. Km</th>
            <th>Val. Km</th>
            <th>Val. Faturado</th>
            <th>Despesa</th>
          </tr>
        </thead>
        <tbody className={styles.table__body}>
          {tableData.map(rowData => (
          <tr>
            <td>
              <button className={styles.table__button}>
                <img
                  className={`${styles.table__icon} ${styles.table__icon__trash}`}
                  src={IconTrash}
                  alt="Trash"
                  title="Deletar linha"
                />
              </button>
            </td>
            <td>{rowData.colaborador}</td>
            <td>{rowData.empresa}</td>
            <td>{rowData.numeroPrestacao}</td>
            <td>{rowData.data}</td>
            <td>
              <button className={styles.table__button}>
                <img
                  className={`${styles.table__icon} ${styles.table__icon__motivo}`}
                  src={IconMotivo}
                  alt="Motivo"
                  title="Motivo" />
              </button>
            </td>
            <td>{rowData.tipoDespesa}</td>
            <td>{rowData.centroCusto}</td>
            <td>{rowData.ordemInterna}</td>
            <td>{rowData.divisao}</td>
            <td>{rowData.pep}</td>
            <td>{rowData.moeda} </td>
            <td>{rowData.distanciaKm} </td>
            <td>{rowData.ValorKm}</td>
            <td>{rowData.valorFaturado}</td>
            <td>{rowData.despesa}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
