import React from 'react';

export default function(props) {
  return (
    <li onClick={props.onClick} className={props.clicked ? 'clicked' : ''}>
      <img src={props.poster} alt={props.title} />
      <div>{props.title}</div>
      <div>{props.genres}</div>
    </li>
  );
}
