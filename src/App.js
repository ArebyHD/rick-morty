import './App.css';
import imagen1 from './img/rick-morty.png'
import {useState} from 'react';
import Character from './Components/Characters';

function App() {

  const [characters, setCharacters] = useState (null);

  const reqApi = async () => {
    const api = await fetch ("https://rickandmortyapi.com/api/character");
    console.log (api);

    const characterApi  = await api.json();
   // console.log (characterApi);
    //console.log(characters);
    setCharacters (characterApi.results);
    //console.log(characters);
    }



  return (
    <div className="App">
    <header className= "App-header">
      <h1 className='title'> Rick & Morty </h1>
      
      {characters ? (
      <Character characters ={characters}></Character>
      ):(
        <>
      <img src={imagen1} alt="Rick & Morty" className="img-home"></img>
      <button  onClick ={reqApi} className="btn-search">
        Buscar Personaje</button>
        </>
      )}

    </header>
  </div>
  );
} 

export default App;
