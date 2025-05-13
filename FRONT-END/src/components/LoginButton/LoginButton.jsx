import PropTypes from "prop-types";
import styles from "./LoginButton.module.scss";

LoginButton.propTypes = {
  onClick : PropTypes.string,
  cta : PropTypes.string
}

export default function LoginButton (props){
  return (
    <button
    type="button"
    className = { styles.loginButton }
    style = {{
      backgroundColor: props.cta === "Entrar" ? "#001A3D" : "#00BEDD"
    }}
    onClick = { props.onClick }>
      { props.cta }
    </button>
  );
}
