import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
function ColorSchemesExample() {
  return (
    <>
       
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div class="container px-4">
                <Link class="navbar-brand" to="/">APLICATIVO INSTAYA</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        
                        <li class="nav-item"><Link class="nav-link" to="/Servicios">Servicios</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/Contactenos">Contactenos</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/Login">inicia sesion</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
}

export default ColorSchemesExample;