import PropTypes from "prop-types";
import styles from "./SolicitacaoButton.module.scss";

SolicitacaoButton.propTypes = {
  cta : PropTypes.string
}

export default function SolicitacaoButton (props){
  return (
    <button
    type="button"
    className = { styles.solicitacaoButton }
    style = {{
      backgroundColor: props.cta == "Enviar para Análise" ? "#001A3D" : "#A60B2F"
    }}>
      { props.cta }
    </button>
  );
}
