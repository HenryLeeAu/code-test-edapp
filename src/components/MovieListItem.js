import React from 'react';

export default function({
  auth,
  currentGenre,
  onClick,
  poster,
  title,
  genres,
}) {
  return (
    <li>
      {auth && currentGenre === null && (
        <button onClick={onClick}>Delete</button>
      )}
      <div className="postWrapper">
        <img src={poster} alt={title} />
        {currentGenre === null && (
          <div className="tag">
            {genres.map(genre => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        )}
      </div>
      <div>{title}</div>
      {auth && currentGenre === null && (
        <button onClick={onClick}>Delete</button>
      )}
    </li>
  );
}
