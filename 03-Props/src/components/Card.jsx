import React from 'react'

const Card = (props) => {
    console.log(props);  // Object
    console.log(props.name);
    console.log(props.age);

    
    
  return (
    <div className='card'>
        <img src={props.img} alt="Image not found" />
        <h1>{props.name}</h1>
        <p>{props.age}</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card