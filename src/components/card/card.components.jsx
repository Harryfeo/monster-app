import React from 'react';

import './card.components.css';

export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&sixe=150X150`} />
        <h2>{props.monster.name}</h2>
        <p> { props.monster.email} </p>
    </div>
);
    
