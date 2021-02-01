// import react from 'react'

export default function SimpleFooter() {
  return (
    <div className='SimpleFooter'>
      <div className='SimpleFooter__container'>
        <div className='SimpleFooter__textContainer'>
          <p>Ojala que te haya gustado el articulo :D</p>
       </div>
       <div className='SimpleFooter__linksContainer'>
         <p>Puedes seguir leyendo y aprendiendo con mas articulos: <span className='SimpleFooter__linksContainer-line'></span></p>
         <div>
            <a href="/home">Home</a>
           <a href="/home">Comunidades</a>
         </div>
       </div>
    </div>
    </div>
)
}

