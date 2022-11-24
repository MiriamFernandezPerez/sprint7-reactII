import React from "react";
import{Link} from "react-router-dom";
import {BotonInicio} from '../components/Boton';
import '../App.css';

const Home = () => {
  return <div>

    <div className="container mt-5">
        <div className="row text-center">
            <div className="col-md-12">
                <h1>Calculadora de presupuestos</h1>
                <img className="img" src="https://www.microtech.es/hubfs/Fotos%20blog/planificacion_presupuestos.jpg" alt="Ilustración presupuesto" width="300px" style={{border: "3px solid #000"}}/>
                <p>En esta página podrás elaborar presupuestos para tus desarrollos Web</p>

                <Link to='/Presupuestos'>
                    <BotonInicio>Calcular presupuesto</BotonInicio>
                </Link>
            </div>        
        </div>
        
    </div>
    
  </div>;
};

export default Home;