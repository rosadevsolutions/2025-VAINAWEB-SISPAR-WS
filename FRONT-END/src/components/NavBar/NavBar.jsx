import { useNavigate } from "react-router-dom";
import IconExit from "../../assets/NavBar/icon-exit.svg";
import IconHistory from "../../assets/NavBar/icon-history.svg";
import IconHome from "../../assets/NavBar/icon-home.svg";
import IconMenu from "../../assets/NavBar/icon-menu.svg";
import IconReembolso from "../../assets/NavBar/icon-money.svg";
import IconSearch from "../../assets/NavBar/icon-search.svg";
import IconUser from "../../assets/NavBar/icon-user.svg";
import styles from "./NavBar.module.scss";


export default function NavBar() {
  const navigate = useNavigate()

  return (
    <nav className={styles.navbar__wrapper}>
      <section className={styles.navbar__content}>

        <button className={styles.menu__button}>
          <img className={styles.menu__icon} src={IconMenu} alt="Menu" title="Menu" />
        </button>

        <div className={styles.userTools__wrapper}>
          <button className={styles.user__button}>
            <img className={styles.user__icon} src={IconUser} alt="User" title="User" />
          </button>

          <div className={styles.tools__wrapper}>
            <button className={styles.tools__button} onClick={ () => { navigate("/") } }>
              <img className={styles.tools__icon} src={IconHome} alt="Home" title="Home"/>
            </button>

            <button className={styles.tools__button} onClick={ () => { navigate("/reembolsos") } }>
              <img className={styles.tools__icon} src={IconReembolso} alt="Reembolsos" title="Reembolsos"/>
            </button>

            <button className={styles.tools__button} onClick={ () => { navigate("/solicitacao") } }>
              <img className={styles.tools__icon} src={IconSearch} alt="Busca" title="Busca" />
            </button>

            <button className={styles.tools__button} onClick={ () => { navigate("/") } }>
              <img className={styles.tools__icon} src={IconHistory} alt="Histórico" title="Histórico" />
            </button>
          </div>
        </div>

        <button className={styles.exit__button} onClick={ () => { navigate("/") } }>
          <img className={styles.exit__icon} src={IconExit} alt="Sair" title="Sair" />
        </button>

      </section>
    </nav>
  );
}
