import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))
import { App } from './App.jsx'
import { Card } from './Card.jsx'
import './index.css'
import './Counter.jsx'
import Counter from './Counter.jsx'


const diplomados = [
  {id : 1,
  title : 'Diplomado en React', 
  description: 'Aprende a crear aplicaciones web con React',
  duration: '4 semanas',
  price: 100,
  image: 'src/assets/react.png'
},  
{
  id : 2,
  title: 'Diplomado en Vue', 
  description: 'Aprende a crear aplicaciones web con Vue',
  duration: '4 semanas',
  price: 100,
  image: 'src/assets/vuejs.jpg'
},

]


const Main = () => {
  return (
    <div>
      <h1>Lista de diplomados</h1>
      <div className="cards">
        {diplomados.map((diplomado) => (
          <Card
            key={diplomado.id}
            title={diplomado.title}
            description={diplomado.description}
            duration={diplomado.duration}
            price={diplomado.price}
            image={diplomado.image}
          />
        ))}
      </div>
        <Counter />
    </div>
  )
}

root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
