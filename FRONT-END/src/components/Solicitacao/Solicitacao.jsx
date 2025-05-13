import Breadcrumb from "../Breadcrumb/Breadcrumb";
import NavBar from "../NavBar/NavBar";
import SolicitacaoForm from "../SolicitacaoForm/SolicitacaoForm";
import styles from "./Solicitacao.module.scss";

export default function Solicitacao() {
  return (
    <div className={styles.page__wrapper}>
      <NavBar />
      <div className={styles.page__content}>
        <Breadcrumb activePage={`Solicitação`} />

        <main className={styles.main__wrapper}>
          <div className={styles.main__content}>
            <SolicitacaoForm />
          </div>
        </main>
      </div>
    </div>
  )
}
