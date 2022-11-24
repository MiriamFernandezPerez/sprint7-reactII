import React, {useState, useEffect, useRef} from 'react';
import Checkbox from '../components/Checkbox';
import Panel from '../components/Panel';
import Boton, {BotonInfo, BotonInicio} from '../components/Boton';
import Modal from '../components/Modal';
import Tabla from '../components/Tabla';

function App() {
  
  // const [total, setTotal] = useState(0);
  // let [webChecked, setWebChecked] = useState(false);
  // let [seoChecked, setSeoChecked] = useState(false);
  // let [adsChecked, setAdsChecked] = useState(false);
  // let [paginas, setPaginas] = useState(0);
  // let [idiomas, setIdiomas] = useState(0);

  const [total, setTotal] = useState(parseInt(localStorage.getItem('total')) ? parseInt(localStorage.getItem('total')) : 0);
  let [webChecked, setWebChecked] = useState(localStorage.getItem('webChecked') ? (localStorage.getItem('webChecked')) : false);
  let [seoChecked, setSeoChecked] = useState(localStorage.getItem('seoChecked') ? (localStorage.getItem('seoChecked')) : false);
  let [adsChecked, setAdsChecked] = useState(localStorage.getItem('adsChecked') ? (localStorage.getItem('adsChecked')) : false);
  let [paginas, setPaginas] = useState(JSON.parse(localStorage.getItem('paginas')) ? JSON.parse(localStorage.getItem('paginas')) : 0);
  let [idiomas, setIdiomas] = useState(JSON.parse(localStorage.getItem('idiomas')) ? JSON.parse(localStorage.getItem('idiomas')) : 0);
  let [modal, setModal] = useState(false);
  let [modalPag, setModalPag] = useState(false);
  let [modalId, setModalId] = useState(false);
  let [presupuesto, setPresupuesto] = useState(localStorage.getItem('presupuesto') ? (localStorage.getItem('presupuesto')) : '');
  let [cliente, setCliente] = useState (localStorage.getItem('cliente') ? (localStorage.getItem('cliente')) : '');
  let [totalExtras, setTotalExtras] = useState(JSON.parse(localStorage.getItem('totalExtras')) ? JSON.parse(localStorage.getItem('totalExtras')) : 0);
  const date = new Date();
//   let totalExtras = (paginas + idiomas) * 30;

  useEffect(()=>{
    try{
      localStorage.setItem('total', total);
      localStorage.setItem('paginas', paginas);
      localStorage.setItem('idiomas', idiomas);
      localStorage.setItem('webChecked', webChecked);
      localStorage.setItem('seoChecked', seoChecked);
      localStorage.setItem('adsChecked', adsChecked);
      localStorage.setItem('presupuesto', presupuesto);
      localStorage.setItem('cliente', cliente);
      localStorage.setItem('totalExtras',totalExtras);
      localStorage.setItem('date', date);
    } catch (error){
      console.error(error);
    }
  },[total, paginas, idiomas, webChecked, seoChecked, adsChecked, presupuesto, cliente, totalExtras, date]);
  

  const handleInputChange = (event) => {
    const {name, value, checked, id} = event.target;
    console.log(name, value, checked, id);
    if(id == 'web' || id=='seo' || id=='ads'){
        checked ? setTotal(total + parseInt(value)) : setTotal(total - parseInt(value));
    }
        
    //Si el onChange es en Web
    if (name == 'web'){
      checked ? setWebChecked( webChecked = true) : setWebChecked( webChecked = false);
    }
    
    //Si el onChange es en Seo
    if (name == 'seo'){
      checked ? setSeoChecked( seoChecked = true) :setSeoChecked( seoChecked = false);
    }
    
    //Si el onChange es en Ads
    if (name == 'ads'){
      checked ? setAdsChecked( adsChecked = true) : setAdsChecked( adsChecked= false);
    }

    //Guardo el nombre del presupuesto
    if(id=="nombrePto"){
        setPresupuesto( presupuesto = value);
        console.log('Nombre del Pto: '+presupuesto);
    }
    
    //Guardo el nombre del cliente
    if(id=="nombreCte"){
        setCliente( cliente = value);
        console.log('Nombre del Cliente: '+ cliente);
    }
  }
  

 const handleNumberChange = (event) => {
    const {name, value} = event.target;

    if(name =='paginas'){
        setPaginas( paginas = parseInt(value));
        setTotalExtras( totalExtras = (paginas*idiomas) *30);
    }
    if(name =='idiomas'){
        setIdiomas( idiomas = parseInt(value));
        setTotalExtras( totalExtras = (paginas*idiomas) *30);
    }
    console.log(paginas);
    console.log(totalExtras);
  }

  const handleClick = (event) =>{
    event.preventDefault();
    const {name} = event.target;
    switch (name){
        case 'masPaginas':
            setPaginas(paginas = paginas+1);
            setTotalExtras((paginas + idiomas) * 30);
            break;
        case 'menosPaginas':
            if (paginas > 0){
            setPaginas(paginas = paginas-1);
            setTotalExtras((paginas + idiomas) * 30);
            }
            break;
        case 'masIdiomas':
            setIdiomas(idiomas = idiomas+1);
            setTotalExtras((paginas + idiomas) * 30);
            break;
        case 'menosIdiomas':
            if (idiomas > 0){
            setIdiomas(idiomas = idiomas-1);
            setTotalExtras((paginas + idiomas) * 30);
            }
        }
  }
  
  const handleModal = (event) =>{
    event.preventDefault();
    const {id} = event.target;
    
    id == 'infoPaginas' || id =='infoIdiomas' ? setModal( modal = true ) : setModal( modal = false );
    id == 'infoPaginas' ? setModalPag(modalPag = true) : setModalPag(modalPag = false);
    id == 'infoIdiomas' ? setModalId(modalPag = true) : setModalId(modalPag = false);
  }
  
  const handleGrey = (event) =>{
    event.preventDefault();
    const {id} = event.target;
    if (id == 'container'){
        setModal(modal = false);
    } 
  }

//   const guardarPresupuesto = (event) =>{
//     event.preventDefault();
    
//     localStorage.clear();
//     // window.location.reload();
//   }
//   let lista = React.createRef();
//   const guardarPresupuesto = (event) => {
//     event.preventDefault();
//     console.log('volcando a la tabla');
//     const htmlText =+ "<tr><td>{localStorage.getItem('presupuesto')}</td><td>{cliente}</td><td>{webChecked ? 'SI' : 'NO'}</td><td>{seoChecked ? 'SI' : 'NO'}</td><td>{adsChecked ? 'SI' : 'NO'}</td><td>{paginas}</td><td>{idiomas}</td><td>{date.toLocaleDateString('es-ES')}</td><td>{total+totalExtras}</td></tr>";
//     localStorage.clear();
//     return <div dangerouslySetInnerHTML={{ __html: htmlText }} />;
//   }
  
  return (
    <div className="App">
        <div className='container-fluid p-5'>
            {(modal && <Modal className='p-5'>
            <div className="container mt-5 pt-5 text-center w-75" id="container" onClick={handleGrey}>
                <Panel className='mt-5'>
                    {(modalPag && 
                        <>
                            <div>Aquí puedes seleccionar número de páginas que necesitas para tu página web.</div>
                            <div>Actualmente has elegido un total de <b>{paginas}</b> páginas.</div>
                        </>
                    )}
                    {(modalId &&
                        <>
                            <div>Aquí puedes seleccionar número de idiomas que necesitas para tu página web.</div>
                            <div>Actualmente has elegido un total de <b>{idiomas}</b> idiomas.</div>
                        </>
                    )}
                </Panel>
            </div>
            </Modal>)}
            <div className="row">
                <div className="col-md-5">
                <h3>Datos del presupuesto</h3>
                    <div className='text-start'>
                        <label className="me-2 text-start" htmlFor="nombre">Nombre del Presupuesto</label>
                        <input className="form-control form-control-sm" name="nombre" id="nombrePto" type="text" onChange={handleInputChange} placeholder="Nombre" />
                    </div>
                    <div className='text-start'>
                        <label className="me-2 text-start" htmlFor="cliente">Cliente</label>
                        <input className="form-control form-control-sm" name="cliente" id="nombreCte" type="text" onChange={handleInputChange} placeholder="Nombre" />
                    </div>
                    <h3 className="mt-3">¿Qué quieres hacer?</h3>
                    <form className="text-start" >
                        <div>
                            <Checkbox name="web" id="web" value={500} onChange={handleInputChange} label="Una página web (500€)" checked={eval(webChecked)} ></Checkbox>
                        </div>
                        { (webChecked) && <Panel>
                            <div>
                                <label className="me-2" htmlFor="paginas">Número de páginas</label>
                                <Boton name="masPaginas" onClick={handleClick}>+</Boton>
                                <input className="form-control form-control-sm d-inline w-25 text-center" name="paginas" id="paginas" type="text" min={0} onChange={handleNumberChange} value={paginas} />
                                <Boton name="menosPaginas" onClick={handleClick}>-</Boton>
                                <BotonInfo onClick={handleModal}><i className="fa-solid fa-comment-sms fs-3" id="infoPaginas" name="infoPaginas" ></i></BotonInfo>
                            </div>
                            <div>
                                <label className="me-2" htmlFor="idiomas">Número de idiomas</label>
                                <Boton name="masIdiomas" onClick={handleClick}>+</Boton>
                                <input className="form-control form-control-sm d-inline w-25 mt-2 text-center" name="idiomas" id="idiomas" type="text" min={0} onChange={handleNumberChange} value={idiomas} />
                                <Boton name="menosIdiomas" onClick={handleClick}>-</Boton>
                                <BotonInfo name="infoIdiomas"><i className="fa-solid fa-comment-sms fs-3" id="infoIdiomas" onClick={handleModal} ></i></BotonInfo>
                            </div>
                        </Panel>}
                        <div>
                            <Checkbox name="seo" id="seo" value={300} onChange={handleInputChange} label="Una consultoría SEO (300€)" checked={eval(seoChecked)} ></Checkbox>
                        </div>
                        <div>
                            <Checkbox name="ads" id="ads" value={200} onChange={handleInputChange} label="Una campaña de Google Ads (200€)" checked={eval(adsChecked)}></Checkbox>
                        </div>
                    </form>
                    <div className="col-md-12 text-start">
                        <p>Precio: {total+totalExtras} </p>
                    </div>
                    <BotonInicio className="btn-submit" type="submit" /*onClick={guardarPresupuesto}*/>Guardar presupuesto</BotonInicio>
                </div>
                <div className="col-md-7 d-flex flex-column align-items-center">
                <Tabla id="ListadoUsuarios" className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Presupuesto</th>
                            <th>Cliente</th>
                            <th>Web</th>
                            <th>Seo</th>
                            <th>Ads</th>
                            <th>Paginas</th>
                            <th>Idiomas</th>
                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                        
                            <td>{localStorage.getItem('presupuesto')}</td>
                            <td>{localStorage.getItem('cliente')}</td>
                            <td>{localStorage.getItem('webChecked')}</td>
                            <td>{localStorage.getItem('seoChecked')}</td>
                            <td>{localStorage.getItem('adsChecked')}</td>
                            <td>{localStorage.getItem('paginas')}</td>
                            <td>{localStorage.getItem('idiomas')}</td>
                            <td>{date.toLocaleDateString('es-ES')}</td>
                            <td>{total+totalExtras}</td>
                        </tr>
                        
                    </tbody>
                    
                </Tabla>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
