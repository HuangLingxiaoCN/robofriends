import React from 'react';

const Card = ({name, email, id}) => {
  // ES6 destructuring
  return (
    /* This is actually JSX not html*/
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='photo' src={`https://robohash.org/${name}?size=200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;