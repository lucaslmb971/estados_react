import './App.css'
import { Card } from './components/Card'

function App() {

  return (
    <>
      
      <h1>TechStore - Tu destino para la Mejor Tecnologia</h1>
      <div className='principal-div'>
        <Card initialCount={11} />
        <Card initialCount={10} />
        <Card initialCount={20} />
        <Card initialCount={30} />   
      </div>

      </>
  )
}

export default App
