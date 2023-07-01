import { Route, Routes} from 'react-router-dom'
import Home from './routes/Home'
import Contacto from './routes/Contacto'
import Detalle from './routes/Detalle'
import Destacados from './routes/Destacados'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/detalle/:id' element={<Detalle/>}/>
        <Route path='/destacados' element={<Destacados/>}/>
        <Route path='/*' element={<div>404</div>}/>
      </Routes>
    </>
  )
}

export default App
