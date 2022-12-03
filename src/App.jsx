import './App.css'
import Menu from './components/Menu'
import Login from './components/Login'
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import Contactenos from './components/Contactenos';
import Home from './components/Home'
import Registrar from './components/Registrar'
import Crearservicio from './components/Crearservicio'
import Servicios from './components/Servicios'
function App() {
  

  return (
    <div className='App'>

        <BrowserRouter>
        <Menu/>
          <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>} />
            <Route path="/Contactenos" element={<Contactenos/>} />
            <Route path="/Registrar" element={<Registrar/>} />
            <Route path="/Crearservicio" element={<Crearservicio/>} />
            <Route path="/Servicios" element={<Servicios/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
