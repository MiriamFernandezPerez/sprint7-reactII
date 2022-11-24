import './App.css';
import React, {useState} from 'react';
import Checkbox from './components/Checkbox';

function App() {

  const [total, setTotal] = useState(0);

  const handleInputChange = (event) => {
    const {name, value, checked} = event.target;
    console.log(name, value, checked);

    if(checked){
      setTotal(total + parseInt(value));
    }else{
      setTotal(total - parseInt(value));
    }

  }

  return (
    <div className="App">
      <div className='container'>
      <h3 className='mt-5 text-start'>¿Qué quieres hacer?</h3>
        <form action="" className="row text-start">
          <Checkbox name="web" id="web" value={500} onChange={handleInputChange} label="Una página web (500€)" ></Checkbox>
          <Checkbox name="seo" id="seo" value={300} onChange={handleInputChange} label="Una consultoría SEO (300€)"></Checkbox>
          <Checkbox name="ads" id="ads" value={200} onChange={handleInputChange} label="Una campaña de Google Ads (200€)"></Checkbox>
        </form>
        <div className="col-sm-12 text-start">
          <p>Precio: {total} </p>
        </div>
      </div>
    </div>
  );
}

export default App;
