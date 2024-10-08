import './App.css'
import { Card } from './components/Card'

function App() {

  return (
    <>
    
      <h1>TechStore - Tu destino para la Mejor Tecnologia</h1>
      <div className='principal-div'>
        <Card name="Laptop" price="$1500" description="Potente portátil diseñada para rendir al máximo en todas tus tareas, ya sea en casa o en movimiento." initialCount={11} />
        <Card name="Smartphone" price="$800" description="Dispositivo móvil inteligente con cámaras avanzadas y un rendimiento rápido para mantenerte siempre conectado." initialCount={10} />
        <Card name="Monitor" price="$200" description=" Pantalla de alta resolución para disfrutar de imágenes nítidas y colores vibrantes, ideal para trabajar o jugar." initialCount={20} />
        <Card name="Auriculares" price="$300" description="Audio de calidad superior para sumergirte en tu música o juegos con comodidad durante horas." initialCount={30} />   
      </div>

      </>
  )
}

export default App
