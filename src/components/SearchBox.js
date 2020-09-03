import React from 'react';

const SearchBox = ({ searchfield, searchChange }) =>{
  return (
    <div className='pa2'>
      <input  // Tachyons syntax
        className='pa3 ba b--green bg-lightest-blue' 
        type='search' 
        placeholder='search robots'
        // When the text in search box changes, the event
        // triggers the searchChange function
        onChange = {searchChange} 
      />
    </div>
    
  );
}

export default SearchBox;