import React from 'react'
import '../Styles/Search.css'

export const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className='Characters-search'>
      <input 
        type="text" 
        value={search} 
        ref={searchInput} 
        onChange={handleSearch} 
        placeholder="Search" 
      />
    </div>
  )
}
