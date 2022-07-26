import { useState, useEffect} from 'react'
import '../Styles/Characters.css'

export const Characters = () => {

  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setCharacters(data.results);
  }
  useEffect(()  =>  {
    fetchData();
  }, []);

  return (
    <div className='Characters'>
      {characters.map((character) => (
        <>
        <div className='Character'>
          <img src={character.image} alt="Rick and Morty image" />
          <h2>{character.name}</h2>
        </div>
        </>  
      ))}
    </div>
      
  )
}
