import PropTypes from "prop-types";
import styles from "./LoginButtonText.module.scss";

LoginButtonText.propTypes = {
  onClick : PropTypes.string,
  cta : PropTypes.string
}

export default function LoginButtonText (props){
  return (
    <button
    type="button"
    className = { styles.loginButtonText }
    onClick = { props.onClick }>
      { props.cta }
    </button>
  );
}
