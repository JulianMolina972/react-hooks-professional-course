import { useState, useReducer, useMemo, useRef, useCallback} from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { Search } from './Search';
import '../Styles/Characters.css'


const API = 'https://rickandmortyapi.com/api/character/';

const initialState = {
  favorites: [],
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default: 
    return state;
  }
}

export const Characters = () => {
  const [search, setSearch] = useState('');
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  const handleClick = favorite => {
    dispatch({type: 'ADD_TO_FAVORITES', payload: favorite});
  }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = useMemo(() => 
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [search, characters]
  )

  return (
    <main className='Characters'>
      
      <Search search={search} searchInput={searchInput}  handleSearch={handleSearch} />
      <section>
        <h2 className='Favorites'>Favorites</h2>
        <div className="List">
          {favorites.favorites.map(favorite => (
            <img src={favorite.image} key={favorite.id} alt="Rick and Morty image" />
          ))}
        </div>
      </section>
      {filteredUsers.map((character) => (
        <div className='Character' key={character.id}>
          <img src={character.image} alt="Rick and Morty image" />
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)} >Add to favorites</button>
        </div> 
      ))}
    </main>
      
  )
}
