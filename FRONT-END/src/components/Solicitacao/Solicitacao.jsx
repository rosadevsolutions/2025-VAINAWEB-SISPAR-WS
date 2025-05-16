import { useEffect, useState } from "react";
import IconDelete from "../../assets/Solicitacao/icon-delete.svg";
import IconMotivo from "../../assets/Solicitacao/icon-motivo.svg";
import IconTrash from "../../assets/Solicitacao/icon-trash.svg";
import Api from "../../services/Api";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import NavBar from "../NavBar/NavBar";
import SolicitacaoButton from "../SolicitacaoButton/SolicitacaoButton";
import styles from "./Solicitacao.module.scss";

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

export default function Solicitacao(){
  const [colaborador, setColaborador] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [numeroPrestacaoContas, setNumeroPrestacaoContas] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [tipoDespesa, setTipoDespesa] = useState("");
  const [centroCusto, setCentroCusto] = useState("");
  const [ordemInterna, setOrdemInterna] = useState("");
  const [divisao, setDivisao] = useState("");
  const [pep, setPep] = useState("");
  const [moeda, setMoeda] = useState("");
  const [distanciaKm, setDistanciaKm] = useState("");
  const [valorKm, setValorKm] = useState("");
  const [valorFaturado, setValorFaturado] = useState("");
  const [despesa, setDespesa] = useState("");
  const [dataReimbursement, setDataReimbursement] = useState([]);
  const [sent, setSent] = useState(false);


  const handleSubmit = () => {
    const objectReimbursement = {
      colaborador,
      empresa,
      numeroPrestacaoContas,
      descricao,
      data,
      tipoDespesa,
      ordemInterna,
      centroCusto,
      divisao,
      pep,
      moeda,
      distanciaKm,
      valorKm,
      valorFaturado,
      despesa
    }
    setDataReimbursement(dataReimbursement.concat(objectReimbursement))
    clearFormFields()
  }

  const clearFormFields = () => {
    setColaborador(""),
    setEmpresa(""),
    setNumeroPrestacaoContas(""),
    setDescricao(""),
    setData(""),
    setDescricao(""),
    setTipoDespesa(""),
    setCentroCusto(""),
    setOrdemInterna(""),
    setDivisao(""),
    setPep(""),
    setMoeda(""),
    setDistanciaKm(""),
    setValorKm(""),
    setValorFaturado(""),
    setDespesa("");
  };

  //Função assincrona para o código esperar sem travar o restante da app.
  const sendForAnalysis = async () => {
    // Tentativa de execução
    try{
      // Criar uma var pra receber a response/resposta a url vai esperar o post da api (caminho/rota/blueprint, argumento/lista/a ser sent)
      //Faz requisição POST pro endpoint/refunds/new
      //Envia os dados salvos no estado datareimbursement
      const response = await Api.post("/refunds/new", dataReimbursement);
      console.log("Resposta da API: ", response)
      alert("Reembolso solicitado com sucesso")
      //Só vai enviar os dados se trocar o estado de sent para true
      setSent(true)
    } catch(error){ //caso de
      console.log("Erro ao Enviar: ", error)
    }
  }

  //HOOK USEEFFCT - Reagir a mudanças de states
  useEffect(() => {
    if(sent){ //se tiver sent
      setDataReimbursement([]); // limpar dados do form
      setSent(false); // o state sent volta a ser false
    }
  },[sent]); //Esse efeito só inicializa quando sent mudar

  const onSubmitCallback = (e) => {
    e.preventDefault()
    onCreate({
      colaborador,
      empresa,
      numeroPrestacaoContas,
      descricao,
      data,
      tipoDespesa,
      ordemInterna,
      centroCusto,
      divisao,
      pep,
      moeda,
      distanciaKm,
      valorKm,
      valorFaturado,
      despesa
    })
  }

  const [tableData, setTableData] = useState(rawData)




  return (
    <div className={styles.page__wrapper}>
      <NavBar />
      <div className={styles.page__content}>
        <Breadcrumb activePage={`Solicitação`} />

        <main className={styles.main__wrapper}>
          <div className={styles.main__content}>
            <form
              className={styles.form__wrapper}
              onSubmit={onSubmitCallback}
            >
              <div className={styles.form__container1}>
                <div className={styles.form__container1__top}>
                  <div className={`${styles.form__field} ${styles.form__field__nome}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="colaborador"
                    >
                      Nome Completo
                    </label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__nome}`}
                      id="colaborador"
                      name="colaborador"
                      onChange={(e) => setColaborador(e.target.value)}
                      type="text"
                      value={colaborador}
                    />
                  </div>

                  <div className={`${styles.form__field} ${styles.form__field__empresa}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="empresa"
                    >
                      Empresa
                    </label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__empresa}`}
                      id="empresa"
                      name="empresa"
                      onChange={(e) => setEmpresa(e.target.value)}
                      type="text"
                      value={empresa}
                    />
                  </div>

                  <div className={`${styles.form__field} ${styles.form__field__prestacao}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="numeroPrestacaoContas"
                    >
                      Nº Prest. Contas
                    </label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__prestacao}`}
                      id="numeroPrestacaoContas"
                      name="numeroprestacaocontas"
                      onChange={(e) => setNumeroPrestacaoContas(e.target.value)}
                      type="text"
                      value={numeroPrestacaoContas}
                    />
                  </div>
                </div>
                <div className={styles.form__container1__bottom}>
                  <div className={`${styles.form__field} ${styles.form__field__reembolso}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="descricao"
                    >
                      Descrição / Motivo do Reembolso</label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__reembolso}`}
                      id="descricao"
                      name="descricao"
                      onChange={(e) => setDescricao(e.target.value)}
                      type="text"
                      value={descricao}
                    />
                  </div>
                </div>
            </div>

            <div className={styles.form__spacer}></div>

            <div className={styles.form__container2}>
              <div className={styles.form__container2__top}>
                <div className={`${styles.form__field} ${styles.form__field__date}`}>
                  <label
                    className={styles.form__label}
                    htmlFor="data"
                  >
                    Data
                  </label>
                  <input
                    className={`${styles.form__input} ${styles.form__input__date}`}
                    id="data"
                    name="data"
                    onChange={(e) => setData(e.target.value)}
                    type="date"
                    value={data}
                  />
                </div>

                <div className={`${styles.form__field} ${styles.form__field__tiposdespesas}`}>
                  <label
                    className={styles.form__label}
                    htmlFor="tipoDespesa"
                  >
                    Tipos de Despesa
                  </label>
                  <select
                    className={`${styles.form__select} ${styles.form__select__tiposdespesas}`}
                    id="tipoDespesa"
                    onChange={(e) => setTipoDespesa(e.target.value)}
                    value={tipoDespesa}
                  >
                    <option
                      className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                      disabled
                      hidden
                      selected
                    >
                      Selecionar
                    </option>
                    <option
                      className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                      value="alimentacao"
                    >
                      Alimentação
                    </option>
                    <option
                      className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                      value="combustivel"
                    >
                      Combustível
                    </option>
                    <option
                      className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                      value="conducao"
                    >
                      Condução
                    </option>
                    <option
                      className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                      value="estacionamento"
                    >
                      Estacionamento
                    </option>
                    <option
                      className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                      value="viagemAdministrativa"
                    >
                      Viagem Administrativa
                    </option>
                    <option
                      className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                      value="viagemOperacional"
                    >
                      Viagem Operacional
                    </option>
                    <option
                      className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                      value="eventosRepresentacao"
                    >
                      Eventos de Representação
                    </option>
                  </select>
                </div>

                <div className={`${styles.form__field} ${styles.form__field__centrocustos}`}>
                  <label
                    className={styles.form__label}
                    htmlFor="centroCusto"
                  >
                    Centro de Custos
                  </label>
                  <select
                    className={styles.form__select}
                    id="centroCusto"
                    onChange={(e) => setCentroCusto(e.target.value)}
                    value={centroCusto}
                  >
                    <option
                      className={`${styles.form__option} ${styles.form__option__centrocustos}`}
                      disabled
                      selected
                      hidden
                      value=""
                    >
                      Selecionar
                    </option>
                    <option
                      className={`${styles.form__option} ${styles.form__option__centrocustos}`}
                      value="controlesInternos"
                    >
                      1100109002 - FIN CONTROLES INTERNOS MTZ
                    </option>
                    <option
                      className={`${styles.form__option} ${styles.form__option__centrocustos}`}
                      value="vicePresidenciaFinancas"
                    >
                      1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                    </option>
                    <option
                      className={`${styles.form__option} ${styles.form__option__centrocustos}`}
                      value="contabilidade"
                    >
                      1100110102 - FIN CONTABILIDADE MTZ
                    </option>
                  </select>
                </div>
              </div>


              <div className={styles.form__container2__bottom}>
                <div className={styles.form__container2__bottom__left}>
                  <div className={`${styles.form__field} ${styles.form__field__ordeminterna}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="ordemInterna"
                    >
                      Ord. Int.
                    </label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__ordeminterna}`}
                      id="ordemInterna"
                      name="ordemInterna"
                      onChange={(e) => setOrdemInterna(e.target.value)}
                      type="text"
                      value={ordemInterna}
                    />
                  </div>

                  <div className={`${styles.form__field} ${styles.form__field__divisao}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="divisao"
                    >
                      Div.
                    </label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__divisao}`}
                      id="divisao"
                      name="divisao"
                      onChange={(e) => setDivisao(e.target.value)}
                      type="text"
                      value={divisao}
                    />
                  </div>

                  <div className={`${styles.form__field} ${styles.form__field__pep}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="pep"
                    >
                      PEP
                    </label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__pep}`}
                      id="pep"
                      name="pep"
                      onChange={(e) => setPep(e.target.value)}
                      type="text"
                      value={pep}
                    />
                  </div>

                  <div className={`${styles.form__field} ${styles.form__field__moeda}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="moeda"
                    >
                      Moeda
                    </label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__moeda}`}
                      id="moeda"
                      name="moeda"
                      onChange={(e) => setMoeda(e.target.value)}
                      type="number"
                      value={moeda}
                    />
                  </div>

                  <div className={`${styles.form__field} ${styles.form__field__distanciakm}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="distanciaKm"
                    >
                      Dist / Km
                    </label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__distanciakm}`}
                      id="distanciaKm"
                      name="distanciaKm"
                      onChange={(e) => setDistanciaKm(e.target.value)}
                      type="number"
                      value={distanciaKm}
                    />
                  </div>

                  <div className={`${styles.form__field} ${styles.form__field__valorkm}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="valorKm"
                    >
                      Valor / Km
                    </label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__valorkm}`}
                      id="valorKm"
                      name="valorKm"
                      onChange={(e) => setValorKm(e.target.value)}
                      type="number"
                      value={valorKm}
                    />
                  </div>

                  <div className={`${styles.form__field} ${styles.form__field__valorfaturado}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="valorFaturado"
                    >
                      Val. Faturado
                    </label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__valorfaturado}`}
                      htmlFor="valorFaturado"
                      id="valorFaturado"
                      name="valorFaturado"
                      onChange={(e) => setValorFaturado(e.target.value)}
                      type="number"
                      value={valorFaturado}
                    />
                  </div>

                  <div className={`${styles.form__field} ${styles.form__field__despesas}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="despesas"
                    >
                      Despesas
                    </label>
                    <input
                      className={`${styles.form__input} ${styles.form__input__despesas}`}
                      id="despesas"
                      name="despesas"
                      onChange={(e) => setDespesa(e.target.value)}
                      type="number"
                      value={despesa}
                    />
                  </div>
                </div>

                <div className={styles.form__container2__bottom__right}>
                  <button
                    className={`${styles.form__button} ${styles.form__field__maissalvar}`}
                    name="maissalvar"
                    onClick={handleSubmit}
                    type="submit"
                    value="salvar"
                  >
                  + Salvar
                  </button>
                  <button
                    className={`${styles.form__button} ${styles.form__field__limpar}`}
                    name="limpar"
                    onClick={clearFormFields}
                    type="submit"
                    value="limpar"
                  >
                    <img
                      alt="Delete"
                      src={IconDelete}
                      title="Delete"
                    />
                  </button>
                </div>
              </div>
            </div>
          </form>

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
                    {tableData.map(rawData => (
                      <tr key={rawData.id}>
                        <td>
                          <button className={styles.table__button}>
                            <img
                              alt="Trash"
                              className={`${styles.table__icon} ${styles.table__icon__trash}`}
                              src={IconTrash}
                              title="Deletar linha"
                            />
                          </button>
                        </td>
                        <td>{rawData.colaborador}</td>
                        <td>{rawData.empresa}</td>
                        <td>{rawData.numeroPrestacao}</td>
                        <td>{rawData.data}</td>
                        <td>
                          <button className={styles.table__button}>
                            <img
                              alt="Motivo"
                              className={`${styles.table__icon} ${styles.table__icon__motivo}`}
                              src={IconMotivo}
                              title="Motivo" />
                          </button>
                        </td>
                        <td>{rawData.tipoDespesa}</td>
                        <td>{rawData.centroCusto}</td>
                        <td>{rawData.ordemInterna}</td>
                        <td>{rawData.divisao}</td>
                        <td>{rawData.pep}</td>
                        <td>{rawData.moeda} </td>
                        <td>{rawData.distanciaKm} </td>
                        <td>{rawData.ValorKm}</td>
                        <td>{rawData.valorFaturado}</td>
                        <td>{rawData.despesa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.totals__wrapper}>
              <div className={`${styles.totals__content} ${styles.totals__content__totalfaturado}`}>
                <p className={styles.totals__label}>Total Faturado</p>
                <div className={styles.totals__out}>458.78</div>
              </div>
              <div className={`${styles.totals__content} ${styles.totals__content__totaldespesa}`}>
                <p className={styles.totals__label}>Total Despesa</p>
                <div className={styles.totals__out}>70.02</div>
              </div>
              <SolicitacaoButton
                cta="Enviar para Análise"
                onClick={sendForAnalysis}
              />
              <SolicitacaoButton
                cta="Cancelar Solicitação"
                onClick={clearFormFields}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
