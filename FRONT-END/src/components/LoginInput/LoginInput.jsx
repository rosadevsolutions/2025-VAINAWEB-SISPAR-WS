import PropTypes from "prop-types";
import styles from "./LoginInput.module.scss";

LoginInput.propTypes = {
  placeholder : PropTypes.string
}

export default function LoginInput(props){
  return (
    <label>
      <input type="text" className={ styles.loginInput } placeholder={props.placeholder} />
    </label>
  );
}
