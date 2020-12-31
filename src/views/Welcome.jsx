import React from "react"
import { useHistory } from "react-router-dom"

export default function WelcomeView() {
  let history = useHistory()

  const pushToHome = () => {
    history.push("/home")
  }

  return (
    <div className="WelcomeView">
      {/* Some hero img */}
      <h1>Bienvenido a uDevBlog</h1>
      {/* Line */}
      <p>
        En este blog estaran las tecnologias, herramientas de la programacion,
        asi como comunidades en español
      </p>
      {/* Some img */}
      <div>{/* Some Social media or information */}</div>
      <div>
        <button onClick={pushToHome}>
          Vamos a conocer a mas comunidades🌟
        </button>
      </div>
    </div>
  )
}
