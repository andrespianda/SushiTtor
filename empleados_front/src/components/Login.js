import React, { Component } from "react";
import logoLogin from '../assets/Colosal.png'
import './login.css'


export default class Login extends Component {
  constructor(props){
  super(props)
  this.state={
    usuario:'',
    pass:''
  }
}
 prueba = (e)=>{

  if (!this.state.usuario && !this.state.pass ) {
    alert('Por favor diligenciar login y contraseña!!')    
  }

  if (!this.state.usuario && this.state.pass ) {
    alert('Por favor diligenciar login')    
  }
  if (this.state.usuario && !this.state.pass ) {
    alert('Por favor diligenciar la Contraseña')    
  }
  if (this.state.usuario && this.state.pass ) {
    
    alert(`Su Nombre de usuario es: ${this.state.usuario} y su Password es: ${this.state.pass}`)
  }
   }
  render() {
   
    
    return (
      <div className="container ">
        {/* <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo Electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=> this.setState({usuario: e.target.value})}
            />
            {this.state.usuario}
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Recordarme
            </label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.prueba}>
            Ingresar
          </button>
        </form> */}

<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        {/* <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5HnTlHksP9ouFTPhGb7hXAQkd5bB-fVtxw&usqp=CAU"} className="img-fluid" /> */}
        <img src={logoLogin} className="img-fluid"  alt="Colosal"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Ingresar con</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"/>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"/>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in"/>
            </button>
          </div>

          {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}

          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Ingrese un correo valido" 
              onChange={(e)=> this.setState({usuario: e.target.value})}/>
            <label className="form-label" htmlFor="form3Example3">Usuario</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Contraseña" 
              onChange={(e)=> this.setState({pass: e.target.value})}/>
            <label className="form-label" htmlFor="form3Example4">Contraseña</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Recuerdame
              </label>
            </div>
            <a href="#!" className="text-body">Olvido su contraseña?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button  className="btn btn-primary btn-lg pl-2 pr-2" 
            onClick={this.prueba}>Ingresar</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">No tiene una cuenta? <a href="#!" className="link-danger">Registrarse</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    {/* <!-- Copyright --> */}
    <div className="text-white mb-3 mb-md-0">
      Mision TIC - UTP.
    </div>
    {/* <!-- Copyright --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"/>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"/>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"/>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"/>
      </a>
    </div>
    {/* <!-- Right --> */}
  </div>
</section>
      </div>
    );
  }
}