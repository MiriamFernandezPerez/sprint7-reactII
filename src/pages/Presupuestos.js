import React, {useState, useEffect} from 'react';
import Checkbox from '../components/Checkbox';
import Panel from '../components/Panel';
import Boton, {BotonInfo} from '../components/Boton';
import Modal from '../components/Modal';

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

  let totalExtras = (paginas + idiomas) * 30;

  useEffect(()=>{
    try{
      localStorage.setItem('total', total);
      localStorage.setItem('paginas', paginas);
      localStorage.setItem('idiomas', idiomas);
      localStorage.setItem('webChecked', webChecked);
      localStorage.setItem('seoChecked', seoChecked);
      localStorage.setItem('adsChecked', adsChecked);
    } catch (error){
      console.error(error);
    }
  },[total, paginas, idiomas, webChecked, seoChecked, adsChecked]);
  

  const handleInputChange = (event) => {
    const {name, value, checked} = event.target;
    //console.log(name, value, checked);

    checked ? setTotal(total + parseInt(value)) : setTotal(total - parseInt(value))
    
    //Si el onChange es en Web
    if (name == 'web'){
      checked ? setWebChecked( webChecked = true) : setWebChecked( webChecked = false) ;
    }
    
    //Si el onChange es en Seo
    if (name == 'seo'){
      checked ? setSeoChecked( seoChecked = true) :setSeoChecked( seoChecked = false)
    }
    
    //Si el onChange es en Ads
    if (name == 'ads'){
      checked ? setAdsChecked( adsChecked = true) : setAdsChecked( adsChecked= false)
    }
  }
  

 const handleNumberChange = (event) => {
    const {name, value} = event.target;
    name == 'paginas' ? setPaginas( paginas = Number(value) ) : setIdiomas( idiomas = Number(value) )
  }

  const handleClick = (event) =>{
    event.preventDefault();
    const {name} = event.target;
    switch (name){
        case 'masPaginas':
            setPaginas(paginas = paginas+1);
            break;
        case 'menosPaginas':
            if (paginas > 0){
            setPaginas(paginas = paginas-1);
            }
            break;
        case 'masIdiomas':
            setIdiomas(idiomas = idiomas+1);
            break;
        case 'menosIdiomas':
            if (idiomas > 0){
            setIdiomas(idiomas = idiomas-1);
            }
        }
  }
  
  const handleModal = (event) =>{
    event.preventDefault();
    const {id} = event.target;
    console.log(event.target);
    console.log(id);
    
    id == 'infoPaginas' || id =='infoIdiomas' ? setModal( modal = true ) : setModal( modal = false );
    id == 'infoPaginas' ? setModalPag(modalPag = true) : setModalPag(modalPag = false);
    id == 'infoIdiomas' ? setModalId(modalPag = true) : setModalId(modalPag = false);
    
    
  }
  
  const handleGrey = (event) =>{
    event.preventDefault();
    const {id} = event.target;
    console.log(event.target);
    if (id == 'container'){
        setModal(modal = false);
        
    } 
    
    
  }
  
  return (
    <div className="App">
      <div className='container pt-3'>
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
      <h3 className='mt-5 text-start'>¿Qué quieres hacer?</h3>
        <form action="" className="row text-start">
          <div>
            <Checkbox name="web" id="web" value={500} onChange={handleInputChange} label="Una página web (500€)" checked={eval(webChecked)} ></Checkbox>
          </div>
          { (webChecked) && <Panel>
            <div>
              <label className="me-2" htmlFor="paginas">Número de páginas</label>
              <Boton name="masPaginas" onClick={handleClick}>+</Boton>
              <input className="form-control d-inline w-25 text-center" name="paginas" id="paginas" type="number" min={0} onChange={handleNumberChange} value={paginas} />
              <Boton name="menosPaginas" onClick={handleClick}>-</Boton>
              <BotonInfo onClick={handleModal}><i className="fa-solid fa-comment-sms" id="infoPaginas" name="infoPaginas" ></i></BotonInfo>
            </div>
            <div>
              <label className="me-2" htmlFor="idiomas">Número de idiomas</label>
              <Boton name="masIdiomas" onClick={handleClick}>+</Boton>
              <input className="form-control d-inline w-25 mt-2 text-center" name="idiomas" id="idiomas" type="number" min={0} onChange={handleNumberChange} value={idiomas} />
              <Boton name="menosIdiomas" onClick={handleClick}>-</Boton>
              <BotonInfo name="infoIdiomas"><i className="fa-solid fa-comment-sms" id="infoIdiomas" onClick={handleModal} ></i></BotonInfo>
            </div>
          </Panel>}
          <div>
            <Checkbox name="seo" id="seo" value={300} onChange={handleInputChange} label="Una consultoría SEO (300€)" checked={eval(seoChecked)} ></Checkbox>
          </div>
          <div>
          <Checkbox name="ads" id="ads" value={200} onChange={handleInputChange} label="Una campaña de Google Ads (200€)" checked={eval(adsChecked)}></Checkbox>
          </div>
        </form>
        <div className="col-sm-12 text-start">
          <p>Precio: {total+totalExtras} </p>
        </div>
      </div>
    </div>
  );
}

export default App;
