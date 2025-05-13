import PropTypes from "prop-types";
import styles from "./LoginForm.module.scss";

LoginForm.propTypes = {
  placeholder : PropTypes.string
}

export default function LoginForm({ children }){
  return (
    <form className = { styles.loginForm__wrapper }>
      { children }
    </form>
  );
}
