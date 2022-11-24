import React, {useState} from 'react';
import Checkbox from './components/Checkbox';
import Panel from './components/Panel';
import Boton from './components/Boton';

function App() {

  const [total, setTotal] = useState(0);
  const [isChecked, setChecked] = useState(false);
  let [paginas, setPaginas] = useState(0);
  let [idiomas, setIdiomas] = useState(0);
  let totalExtras = (paginas + idiomas) * 30;
  

  const handleInputChange = (event) => {
    const {name, value, checked} = event.target;
    console.log(name, value, checked);

    if(checked){
      setTotal(total + parseInt(value));
    }else{
      setTotal(total - parseInt(value));
    }

    if (name == 'web'){
      //Y está seleccionado sumo precio
      if (checked == true){
        setChecked(true);
      }else{
        setChecked(false);
      }
    }

  }

  const handleNumberChange = (event) => {
    const {name, value} = event.target;
    console.log(name, value);
    if (name == 'paginas'){
      setPaginas( paginas = Number(value) );
    }else{
      setIdiomas( idiomas = Number(value) );
    }
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

  console.log('Paginas '+paginas, 'Idiomas '+ idiomas);
  return (
    <div className="App">
      <div className='container'>
      <h3 className='mt-5 text-start'>¿Qué quieres hacer?</h3>
        <form action="" className="row text-start">
          <Checkbox name="web" id="web" value={500} onChange={handleInputChange} label="Una página web (500€)" ></Checkbox>

          { (isChecked) && <Panel>
            <div>
              <label className="me-2" htmlFor="paginas">Número de páginas</label>
              <Boton name="masPaginas" onClick={handleClick}>+</Boton>
              <input className="form-control d-inline w-25 text-center" name="paginas" id="paginas" type="number" min={0} onChange={handleNumberChange} value={paginas} />
              <Boton name="menosPaginas" onClick={handleClick}>-</Boton>
            </div>
            <div>
              <label className="me-2" htmlFor="idiomas">Número de idiomas</label>
              <Boton name="masIdiomas" onClick={handleClick}>+</Boton>
              <input className="form-control d-inline w-25 mt-2 text-center" name="idiomas" id="idiomas" type="number" min={0} onChange={handleNumberChange} value={idiomas} />
              <Boton name="menosIdiomas" onClick={handleClick}>-</Boton>
            </div>
          </Panel>}

          <Checkbox name="seo" id="seo" value={300} onChange={handleInputChange} label="Una consultoría SEO (300€)"></Checkbox>
          <Checkbox name="ads" id="ads" value={200} onChange={handleInputChange} label="Una campaña de Google Ads (200€)"></Checkbox>
        </form>
        <div className="col-sm-12 text-start">
          <p>Precio: {total+totalExtras} </p>
        </div>
      </div>
    </div>
  );
}

export default App;
