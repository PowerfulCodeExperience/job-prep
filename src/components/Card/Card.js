import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className="Card">
    
      <div className="Cardhead">{props.name}</div>

      <section className="Cardbody">

      </section>

    </div>
  )
}