import { useNavigate } from "react-router-dom"
import LoginBackgroud from "../../assets/Login/navio-cargueiro-wilson-sons.png"
import LoginForm from "../../components/LoginForm/LoginForm"
import LoginInput from "../../components/LoginInput/LoginInput"
import LoginButton from "../LoginButton/LoginButton"
import LoginButtonText from "../LoginButtonText/LoginButtonText"
import styles from "./Login.module.scss"


export default function Login(){

  const navigate = useNavigate()

  const irReembolso = () => {
    navigate("/reembolsos")
  }

const irSolicitacao = () => {
    navigate("/solicitacao")
  }



  return (
    <main className ={ styles.login__wrapper }>
      <img src = { LoginBackgroud } className ={ styles.login__background } />

      <section className = { styles.login__content }>
        <div className = { styles.login__contentWrapper }>
          <div className = { styles.login__texts }>
            <h1 className = { styles.login__brand }>Wilson Sons</h1>
            <h2 className = { styles.login__welcome }>Boas Vindas ao Novo Portal SISPAR</h2>
            <p  className = { styles.login__systemName }>Sistema de Emissão de Boletos e Parcelamento</p>
          </div>

          <LoginForm>
            <LoginInput placeholder = "Email" />
            <LoginInput placeholder = "Senha" />
            <LoginButtonText cta = "Esqueci minha senha" onClick = { irSolicitacao }/>
          </LoginForm>

          <div className = { styles.buttons__wrapper }>
            <LoginButton cta = "Entrar" onClick = { irReembolso } />
            <LoginButton cta = "Criar conta" onClick = { irSolicitacao }/>
          </div>

        </div>
      </section>


    </main>
  )
}
