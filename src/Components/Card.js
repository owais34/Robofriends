import React from 'react'

const Card= (props)=>{
  var imgpath='https://robohash.org/'+props.id+'?200x200';
  return (
    <div className='bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5'>
      <img src={imgpath}/>
      <div class='tc'>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
