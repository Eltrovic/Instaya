import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
function Login () {
  
  return (
    
      
            <div class="demo-container">
              <div class="container"/>
                <div class="row">
                  <div class="col-lg-6 col-12 mx-auto">
                    <div class="text-center image-size-small position-relative">
                    <img src="https://annedece.sirv.com/Images/user-vector.jpg" class="rounded-circle p-2 bg-white"/>
                    <div class="icon-camera">
                    <a href="" class="text-primary"><i class="lni lni-camera"></i></a>
                  
                  
                  
                  </div>
                    
                    <div class="p-2 bg-white rounded shadow-lg">
                      <h1 class="mb-2 text-center pt-2">Iniciar Sesion</h1>
                      </div>
                      <form >
                        <label class="font-500">Correo</label>
                        <input name="" class="form-control form-control-lg mb-3" type="email"/>
                        <label class="font-500">Contraseña</label>
                        <input name="" class="form-control form-control-lg" type="password"/>
                        <p class="m-0 py-4"><a href="" class="text-muted">Recuperar Contraseña?</a></p>
                        <button type = 'submit'class="btn btn-primary btn-lg w-100 shadow-lg">INICIAR</button>
                      </form>
                    <div class="text-center pt-4">
                      <p class="m-0">No Tienes Una Cuenta? <Link to="/Registrar" class="text-dark font-weight-bold">Crear Una</Link></p>
                    </div>          
                     

                  </div>
                </div>
              </div>
            </div>

            
      
  );

}

export default Login;