import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import styles from "./Breadcrumb.module.scss"

Breadcrumb.propTypes = {
  page : PropTypes.string,
  activePage : PropTypes.string.isRequired
}


export default function Breadcrumb(props) {
  const navigate = useNavigate()
  const irHome = () => {
    navigate("/")
  }

  const irReembolsos = () => {
    navigate("/reembolsos")
  }

  return (
    <div className={styles.breadcrumb__wrapper}>
      <ul className={styles.breadcrumb__list}>
        <li className={styles.breadcrumb__item__home} onClick={ irHome }>Home</li>
        { props.page === "Reembolsos" ?
          <li className={styles.breadcrumb__item__page} onClick={ irReembolsos }>
            <p>{ props.page }</p>
          </li> : null
        }
        <li className={styles.breadcrumb__item__activepage}>
          <p>{ props.activePage }</p>
        </li>
      </ul>
    </div>
  );
}
