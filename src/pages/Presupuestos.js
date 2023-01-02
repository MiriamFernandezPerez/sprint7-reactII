import React, { useState, useEffect, useRef } from 'react';
import Checkbox from '../components/Checkbox/Checkbox';
import PanelStyle from '../components/Panel/Panel.styles';
import Boton from '../components/Boton/Boton';
import BotonInfo from '../components/BotonInfo/BotonInfo';
import BotonInicio from '../components/BotonInicio/BotonInicio';
import ModalStyle from '../components/Modal/Modal.styles';
import Lista from '../components/Lista/Lista';

function App() {

  const [total, setTotal] = useState(parseInt(localStorage.getItem('total')) ? parseInt(localStorage.getItem('total')) : 0);
  let [webChecked, setWebChecked] = useState(localStorage.getItem('webChecked') ? (localStorage.getItem('webChecked')) : false);
  let [seoChecked, setSeoChecked] = useState(localStorage.getItem('seoChecked') ? (localStorage.getItem('seoChecked')) : false);
  let [adsChecked, setAdsChecked] = useState(localStorage.getItem('adsChecked') ? (localStorage.getItem('adsChecked')) : false);
  let [paginas, setPaginas] = useState(JSON.parse(localStorage.getItem('paginas')) ? JSON.parse(localStorage.getItem('paginas')) : 0);
  let [idiomas, setIdiomas] = useState(JSON.parse(localStorage.getItem('idiomas')) ? JSON.parse(localStorage.getItem('idiomas')) : 0);
  let [modal, setModal] = useState(false);
  let [modalPag, setModalPag] = useState(false);
  let [modalId, setModalId] = useState(false);
  let [nombrePto, setNombrePto] = useState(localStorage.getItem('nombrePto') ? (localStorage.getItem('nombrePto')) : '');
  let [cliente, setCliente] = useState(localStorage.getItem('cliente') ? (localStorage.getItem('cliente')) : '');
  let [totalExtras, setTotalExtras] = useState(JSON.parse(localStorage.getItem('totalExtras')) ? JSON.parse(localStorage.getItem('totalExtras')) : 0);
  let [id, setId] = useState(JSON.parse(localStorage.getItem('id')) ? JSON.parse(localStorage.getItem('id')) : 0);
  let fecha = new Date();
  let date = (fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear())


  let presupuestos = [];

  //  console.log(webChecked, seoChecked, adsChecked);
  //  console.log(paginas, idiomas);
  //  console.log(nombrePto, cliente);

  useEffect(() => {
    try {
      localStorage.setItem('total', total);
      localStorage.setItem('paginas', paginas);
      localStorage.setItem('idiomas', idiomas);
      localStorage.setItem('webChecked', webChecked);
      localStorage.setItem('seoChecked', seoChecked);
      localStorage.setItem('adsChecked', adsChecked);
      localStorage.setItem('nombrePto', nombrePto);
      localStorage.setItem('cliente', cliente);
      localStorage.setItem('totalExtras', totalExtras);
      localStorage.setItem('date', date);
      localStorage.setItem('id', id);
    } catch (error) {
      console.error(error);
    }
  }, [total, paginas, idiomas, webChecked, seoChecked, adsChecked, nombrePto, cliente, totalExtras, date, id]);


  const handleInputChange = (event) => {
    const { name, value, checked, id } = event.target;

    if (id == 'web' || id == 'seo' || id == 'ads') {
      checked ? setTotal(total + parseInt(value)) : setTotal(total - parseInt(value));
    }

    //Si el onChange es en Web
    if (name == 'web') {
      checked ? setWebChecked(webChecked = true) : setWebChecked(webChecked = false);
    }
    console.log(webChecked);

    //Si el onChange es en Seo
    if (name == 'seo') {
      checked ? setSeoChecked(seoChecked = true) : setSeoChecked(seoChecked = false);
    }

    //Si el onChange es en Ads
    if (name == 'ads') {
      checked ? setAdsChecked(adsChecked = true) : setAdsChecked(adsChecked = false);
    }

    //Guardo el nombre del presupuesto
    if (id == "nombrePto") {
      setNombrePto(nombrePto = value);
    }

    //Guardo el nombre del cliente
    if (id == "nombreCte") {
      setCliente(cliente = value);
    }
  }


  const handleNumberChange = (event) => {
    const { name, value } = event.target;

    if (name == 'paginas') {
      setPaginas(paginas = parseInt(value));
      setTotalExtras(totalExtras = (paginas * idiomas) * 30);
    }
    if (name == 'idiomas') {
      setIdiomas(idiomas = parseInt(value));
      setTotalExtras(totalExtras = (paginas * idiomas) * 30);
    }
  }

  const handleClick = (event) => {
    event.preventDefault();
    const { name } = event.target;
    switch (name) {
      case 'masPaginas':
        setPaginas(paginas = paginas + 1);
        setTotalExtras((paginas + idiomas) * 30);
        break;
      case 'menosPaginas':
        if (paginas > 0) {
          setPaginas(paginas = paginas - 1);
          setTotalExtras((paginas + idiomas) * 30);
        }
        break;
      case 'masIdiomas':
        setIdiomas(idiomas = idiomas + 1);
        setTotalExtras((paginas + idiomas) * 30);
        break;
      case 'menosIdiomas':
        if (idiomas > 0) {
          setIdiomas(idiomas = idiomas - 1);
          setTotalExtras((paginas + idiomas) * 30);
        }
    }
  }

  const handleModal = (event) => {
    event.preventDefault();

    const { id } = event.target;
    console.log(id);

    id == 'infoPaginas' || id == 'infoIdiomas' ? setModal(modal = true) : setModal(modal = false);
    id == 'infoPaginas' ? setModalPag(modalPag = true) : setModalPag(modalPag = false);
    id == 'infoIdiomas' ? setModalId(modalId = true) : setModalId(modalId = false);
  }

  const handleGrey = (event) => {
    event.preventDefault();
    const { id } = event.target;
    if (id == 'container') {
      setModal(modal = false);
    }
  }


  const guardarPresupuesto = () => {
    setId(id = parseInt(id = id + 1));

    presupuestos =
      window.localStorage.getItem("presupuestos") === null ? [] : JSON.parse(window.localStorage.getItem("presupuestos"));

    const presupuesto = {
      id: window.localStorage.getItem("id"),
      nombrePresupuesto: window.localStorage.getItem("nombrePto"),
      nombreCliente: window.localStorage.getItem("cliente"),
      web: window.localStorage.getItem("webChecked"),
      seo: window.localStorage.getItem("seoChecked"),
      ads: window.localStorage.getItem("adsChecked"),
      paginas: window.localStorage.getItem("paginas"),
      idiomas: window.localStorage.getItem("idiomas"),
      fecha: window.localStorage.getItem("date"),
      total: window.localStorage.getItem("total"),
      totalExtras: window.localStorage.getItem("totalExtras")
    };



    presupuestos.push(presupuesto);

    console.log(presupuestos);
    window.localStorage.setItem("presupuestos", JSON.stringify(presupuestos));
    window.location.reload();

  }


  return (
    <div className="App">
      <div className='container-fluid m-5 p-5'>
        {(modal && <ModalStyle className='p-5 d-flex align-content-center' id="container" onClick={handleGrey}>
          <PanelStyle className='m-5'>
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
          </PanelStyle>
        </ModalStyle>)}
        <div className="row">
          <div className="col-md-5">
            <h3>Datos del presupuesto</h3>
            <div className='text-start'>
              <label className="me-2 text-start" htmlFor="nombre">Nombre del Presupuesto</label>
              <input className="form-control form-control-sm" name="nombre" id="nombrePto" type="text" onChange={handleInputChange} placeholder="Nombre" value={nombrePto} />
            </div>
            <div className='text-start'>
              <label className="me-2 text-start" htmlFor="cliente">Cliente</label>
              <input className="form-control form-control-sm" name="cliente" id="nombreCte" type="text" onChange={handleInputChange} placeholder="Nombre" value={cliente} />
            </div>
            <h3 className="mt-3">¿Qué quieres hacer?</h3>
            <form className="text-start" >
              <div>
                <Checkbox name="web" id="web" value={500} onChange={handleInputChange} label="Una página web (500€)" checked={eval(webChecked)} ></Checkbox>
              </div>
              {(webChecked) && <PanelStyle>
                <div>
                  <label className="me-2" htmlFor="paginas">Número de páginas</label>
                  <Boton textBtn="+" name="masPaginas" onClick={handleClick}></Boton>
                  <input className="form-control form-control-sm d-inline w-25 text-center" name="paginas" id="paginas" type="text" min={0} onChange={handleNumberChange} value={paginas} />
                  <Boton textBtn="-" name="menosPaginas" onClick={handleClick}>-</Boton>
                  <BotonInfo className='fa-solid fa-comment-sms fs-3' id="infoPaginas" name="infoPaginas" onClick={handleModal}></BotonInfo>
                </div>
                <div>
                  <label className="me-2" htmlFor="idiomas">Número de idiomas</label>
                  <Boton textBtn="+" name="masIdiomas" onClick={handleClick}>+</Boton>
                  <input className="form-control form-control-sm d-inline w-25 mt-2 text-center" name="idiomas" id="idiomas" type="text" min={0} onChange={handleNumberChange} value={idiomas} />
                  <Boton textBtn="-" name="menosIdiomas" onClick={handleClick}>-</Boton>
                  <BotonInfo className="fa-solid fa-comment-sms fs-3" id="infoIdiomas" name="infoIdiomas" onClick={handleModal}></BotonInfo>
                </div>
              </PanelStyle>}
              <div>
                <Checkbox name="seo" id="seo" value={300} onChange={handleInputChange} label="Una consultoría SEO (300€)" checked={eval(seoChecked)} ></Checkbox>
              </div>
              <div>
                <Checkbox name="ads" id="ads" value={200} onChange={handleInputChange} label="Una campaña de Google Ads (200€)" checked={eval(adsChecked)}></Checkbox>
              </div>
            </form>
            <div className="col-md-12 text-start">
              <p>Precio: {total + totalExtras} </p>
            </div>
            <BotonInicio textBtnInicio="Guardar presupuesto" onClick={guardarPresupuesto}></BotonInicio>
          </div>
          <div className="col-md-7">

            <Lista></Lista>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
