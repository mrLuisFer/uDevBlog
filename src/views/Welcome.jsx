import React from "react"
import { useHistory } from "react-router-dom"
// Assets
import welcomeBlogPost from "../assets/welcome-blog-post.svg"

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
      <h1 className="WelcomeView__title">Bienvenido a uDevBlog</h1>
      {/* Line */}
      <p className="WelcomeView__text">
        En este blog estaran las tecnologias, herramientas de la programacion,
        asi como comunidades en español
      </p>
      <div>
        <button className="WelcomeView__btn" onClick={pushToHome}>
          Vamos a conocer a mas comunidades🌟
        </button>
        <div className="WelcomeView__links-container">
          <a href="/">Repositorio</a>
          <a href="/">Conocer Mas</a>
          <a href="/">Integrantes</a>
        </div>
      </div>
    </div>
  )
}
