import ListaStyle from './Lista.styles';


const Lista = ( presupuestos) => {
//   const {nombrePresupuesto, nombreCliente, web, seo, ads, paginas, idiomas, total, totalExtras, fecha } = presupuestos;

  presupuestos =
      window.localStorage.getItem("presupuestos") === null ? [] : JSON.parse(window.localStorage.getItem("presupuestos"));
      
    console.log(presupuestos);
    console.log(localStorage);
    
    return (
        <div>
            {presupuestos.map( (data) => {
    
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