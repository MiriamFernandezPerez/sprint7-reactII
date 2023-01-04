import ListaStyle from './Lista.styles';
import BotonOrdenar from '../BotonOrdenar/BotonOrdenar';
import InputBuscar from '../InputBuscar/InputBuscar';
import { useState } from 'react';

const Lista = (presupuestos) => {

    presupuestos = window.localStorage.getItem("presupuestos") === null ? [] : JSON.parse(window.localStorage.getItem("presupuestos"));
    let [mostrarLista, setMostrarLista] = useState(presupuestos);
    let listaOrdenada =[...presupuestos];
    
    
    const handleOrdenar = (event) => {
        const { name } = event.target;
        console.log(name);

        if (name === "alfa") {
            listaOrdenada.sort(function (a, b) {
                if (a.nombrePresupuesto > b.nombrePresupuesto) {
                return 1;
                }
                if (a.nombrePresupuesto < b.nombrePresupuesto) {
                return -1;
                }
                return 0;
            });
        }
        else if (name === "fecha") {
            listaOrdenada.sort(function (a, b) {
                if (a.fecha > b.fecha) {
                return 1;
                }
                if (a.fecha < b.fecha) {
                return -1;
                }
                return 0;
            });
        }else {
            listaOrdenada.sort(function (a, b) {
                if (a.id > b.id) {
                return 1;
                }
                if (a.id < b.id) {
                return -1;
                }
                return 0;
            });
        }
        setMostrarLista(mostrarLista = listaOrdenada);
    }
    
    const handleBuscar = (event) =>{
        const busqueda = event.target.value;
    
        let resultBusqueda = listaOrdenada.filter ((lista) => {
            if (lista.nombrePresupuesto.toLowerCase( ).includes (busqueda.toLowerCase( ))) {
            return true;
            }
            return false;
        });
    
        setMostrarLista(mostrarLista = resultBusqueda);
    }

  
    return (
        <div>
            <BotonOrdenar textBtnInicio="Orden alfabético" onClick={handleOrdenar} name="alfa"></BotonOrdenar>
            <BotonOrdenar textBtnInicio="Orden por fecha" onClick={handleOrdenar} name="fecha"></BotonOrdenar>
            <BotonOrdenar textBtnInicio="Reiniciar Listado" onClick={handleOrdenar} name="id"></BotonOrdenar>
            <InputBuscar name="buscar" id="buscar" onChange={handleBuscar}></InputBuscar>
            { 
                mostrarLista.map( (data) => {

                return <ListaStyle key={data.id}>
                    

                    <h5>Presupuesto: {data.nombrePresupuesto}</h5>
                    <li>
                        <ul>Nombre cliente: {data.nombreCliente}</ul>
                        
                        <ul>Número de páginas: {data.paginas}</ul>
                        
                        <ul>Número de idiomas: {data.idiomas}</ul>
                        
                        <ul>Consultoría SEO: { data.seo =='true' ? "Incluido" : "No incluido"} </ul>
                        
                        <ul>Campaña Google Ads: { data.ads=='true' ? "Incluido" : "No incluido"}</ul>
                        
                        <ul>Fecha: {data.fecha}</ul>
                        
                        <ul>Precio total: {parseInt(data.total) + parseInt (data.totalExtras)} €</ul>
                        
                    </li>
                </ListaStyle>
            })}
        </div>
    );
    
}
export default Lista;