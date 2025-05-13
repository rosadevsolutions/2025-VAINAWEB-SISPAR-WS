import { useEffect, useState } from "react";
import IconDelete from "../../assets/Solicitacao/icon-delete.svg";
import Api from "../../services/Api";
import SolicitacaoButton from "../SolicitacaoButton/SolicitacaoButton";
import SolicitacaoTable from "../SolicitacaoTable/SolicitacaoTable";
import styles from "./SolicitacaoForm.module.scss";


export default function SolicitacaoForm({onCreate}){
  // Estados referente a cada campo do form
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

  const [dadosReembolso, setDadosReembolso] = useState([]);

  const [enviado, setEnviado] = useState(false);


  const handleSubmit = () => {
    const objetoReembolso = {
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
    setDadosReembolso(dadosReembolso.concat(objetoReembolso))
    limparCampos()
  }

  const limparCampos = () => {
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
  const enviarParaAnalise = async () => {
    // Tentativa de execução
    try{
      // Criar uma var pra receber a response/resposta a url vai esperar o post da api (caminho/rota/blueprint, argumento/lista/a ser enviado)
      //Faz requisição POST pro endpoint/refunds/new
      //Envia os dados salvos no estado dadosReembolso
      const response = await Api.post("/refunds/new", dadosReembolso);
      console.log("Resposta da API: ", response)
      alert("Reembolso solicitado com sucesso")
      //Só vai enviar os dados se trocar o estado de enviado para true
      setEnviado(true)
    } catch(error){ //caso de
      console.log("Erro ao Enviar: ", error)
    }
  }

  //HOOK USEEFFCT - Reagir a mudanças de states
  useEffect(() => {
    if(enviado){ //se tiver enviado
      setDadosReembolso([]); // limpar dados do form
      setEnviado(false); // o state enviado volta a ser false
    }
  },[enviado]); //Esse efeito só inicializa quando enviado mudar

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

  return (
    <>
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
                value={colaborador}
                onChange={(e) => setColaborador(e.target.value)}
                type="text"
                name="colaborador"
                id="colaborador"
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
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
                type="text"
                name="empresa"
                id="empresa"
              />
            </div>

            <div className={`${styles.form__field} ${styles.form__field__prestacao}`}>
              <label
                className={styles.form__label}
                htmlFor="numeroprestacaocontas"
              >
                Nº Prest. Contas
              </label>
              <input
                className={`${styles.form__input} ${styles.form__input__prestacao}`}
                value={numeroPrestacaoContas}
                onChange={(e) => setNumeroPrestacaoContas(e.target.value)}
                type="text"
                name="numeroprestacaocontas"
                id="numeroprestacaocontas"
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
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                type="text"
                name="descricao"
                id="descricao"
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
                value={data}
                onChange={(e) => setData(e.target.value)}
                type="date"
                name="data"
                id="data"
              />
            </div>

            <div className={`${styles.form__field} ${styles.form__field__tiposdespesas}`}>
              <label
                className={styles.form__label}
                htmlFor="tipodespesa"
              >
                Tipos de Despesas
              </label>
              <select
                className={`${styles.form__select} ${styles.form__select__tiposdespesas}`}
                value={tipoDespesa}
                onChange={(e) => setTipoDespesa(e.target.value)}
                id="tipodespesa"
              >
                <option
                  className={`${styles.form__option} ${styles.form__option__tiposdespesas}`}
                  disabled selected hidden
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
                htmlFor="centrocusto"
              >
                Centro de Custos
              </label>
              <select
                className={styles.form__select}
                value={centroCusto}
                onChange={(e) => setCentroCusto(e.target.value)}
                id="centrocusto"
              >
                <option
                  className={`${styles.form__option} ${styles.form__option__centrocustos}`}
                  value=""
                  disabled selected hidden
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
                  htmlFor="ordeminterna"
                >
                  Ord. Int.
                </label>
                <input
                  className={`${styles.form__input} ${styles.form__input__ordeminterna}`}
                  value={ordemInterna}
                  onChange={(e) => setOrdemInterna(e.target.value)}
                  type="text"
                  name="ordeminterna"
                  id="ordeminterna"
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
                  value={divisao}
                  onChange={(e) => setDivisao(e.target.value)}
                  type="text"
                  name="divisao"
                  id="divisao"
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
                  value={pep}
                  onChange={(e) => setPep(e.target.value)}
                  type="text"
                  name="pep"
                  id="pep"
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
                  value={moeda}
                  onChange={(e) => setMoeda(e.target.value)}
                  type="number"
                  name="moeda"
                  id="moeda"
                />
              </div>

              <div className={`${styles.form__field} ${styles.form__field__distanciakm}`}>
                <label
                  className={styles.form__label}
                  htmlFor="distanciakm"
                >
                  Dist / Km
                </label>
                <input
                  className={`${styles.form__input} ${styles.form__input__distanciakm}`}
                  value={distanciaKm}
                  onChange={(e) => setDistanciaKm(e.target.value)}
                  type="number"
                  name="distanciakm"
                  id="distanciakm"
                />
              </div>

              <div className={`${styles.form__field} ${styles.form__field__valorkm}`}>
                <label
                  className={styles.form__label}
                  htmlFor="valorkm"
                >
                  Valor / Km
                </label>
                <input
                  className={`${styles.form__input} ${styles.form__input__valorkm}`}
                  value={valorKm}
                  onChange={(e) => setValorKm(e.target.value)}
                  type="number"
                  name="valorkm"
                  id="valorkm"
                />
              </div>

              <div className={`${styles.form__field} ${styles.form__field__valorfaturado}`}>
                <label
                  className={styles.form__label}
                  htmlFor="valorfaturado"
                >
                  Val. Faturado
                </label>
                <input
                  className={`${styles.form__input} ${styles.form__input__valorfaturado}`}
                  value={valorFaturado}
                  onChange={(e) => setValorFaturado(e.target.value)}
                  type="number"
                  name="valorfaturado"
                  htmlFor="valortfaturado"
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
                  value={despesa}
                  onChange={(e) => setDespesa(e.target.value)}
                  type="number"
                  name="despesas"
                  id="despesas"
                />
              </div>
            </div>

            <div className={styles.form__container2__bottom__right}>
              <button
                className={`${styles.form__button} ${styles.form__field__maissalvar}`}
                onClick={handleSubmit}
                type="submit"
                name="maissalvar"
                value="salvar"
              >
              + Salvar
              </button>
              <button
                className={`${styles.form__button} ${styles.form__field__limpar}`}
                onClick={limparCampos}
                type="submit"
                name="limpar"
                value="limpar"
              >
                <img
                  src={IconDelete}
                  alt="Delete"
                  title="Delete"
                />
              </button>
            </div>
          </div>
        </div>
      </form>

      <SolicitacaoTable />

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
        onClick={enviarParaAnalise}
      />
      <SolicitacaoButton cta="Cancelar Solicitação" />
    </div>
    </>
  );
}
