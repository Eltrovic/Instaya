import './App.css'
import Menu from './components/Menu'
import Login from './components/Login'
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import Contactenos from './components/Contactenos';
import Home from './components/Home'

function App() {
  

  return (
    <div className='App'>

        <BrowserRouter>
        <Menu/>
          <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>} />
            <Route path="/Contactenos" element={<Contactenos/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
