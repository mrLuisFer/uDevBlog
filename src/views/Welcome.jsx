import React from "react"
import { useHistory } from "react-router-dom"
// Assets
import welcomeBlogPost from "../assets/welcome-blog-post.svg"
// Utils
import { fadeInUp, fadeInUpBig } from "../utils/animateCss"

export default function WelcomeView() {
  let history = useHistory()

  const pushToHome = () => {
    history.push("/home")
  }

  return (
    <div className="WelcomeView">
      {/* Hero illustration */}
      <img
        src={welcomeBlogPost}
        alt="welcome-blog-spot"
        className="WelcomeView__hero-illustration"
      />
      <h1 className="WelcomeView__title">
        Bienvenid@ a <span>uDevBlog!</span>
      </h1>
      {/* Optional Line */}
      <p className={fadeInUp + " WelcomeView__text"}>
        En este blog estaran las tecnologias, herramientas de la programacion,
        asi como comunidades en español
      </p>
      <div>
        <div className="WelcomeView__btn-div">
          <button
            className={fadeInUpBig + "  WelcomeView__btn-div__btn"}
            onClick={pushToHome}
          >
            Conozcamos a mas <br /> comunidades!🌟
          </button>
        </div>
        <div className="WelcomeView__links-div">
          <a className="WelcomeView__links-div__link" href="/">
            Repositorio
          </a>
          <a className="WelcomeView__links-div__link" href="/">
            Conocer Mas
          </a>
          <a className="WelcomeView__links-div__link" href="/">
            Integrantes
          </a>
        </div>
      </div>
    </div>
  )
}
