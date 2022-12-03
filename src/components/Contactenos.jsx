
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


  
  

function BasicExample() {
  return (
    <>
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="well well-sm">
                <form class="form-horizontal" method="post">
                    <fieldset className='from'>
                        <h1 class="text-center header">Contactenos</h1>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="fname" name="name" type="text" placeholder="Nombre" class="form-control"/>
                            </div>
                            <br/>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="lname" name="name" type="text" placeholder="Apellido" class="form-control"/>
                            </div>
                            <br/>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="email" name="email" type="text" placeholder="Correo" class="form-control"/>
                            </div>
                            <br/>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="phone" name="phone" type="text" placeholder="Telefono" class="form-control"/>
                            </div>
                            <br/>
                       </div>

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button type="submit" class="btn btn-pribtn btn-primary btn-lg w-50 shadow-lgmary btn-lg">Enviar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>


      </>    
  );
}

export default BasicExample;


