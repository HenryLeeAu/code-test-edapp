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
      <div className="postWrapper">
        {auth && currentGenre === null && (
          <button onClick={onClick} className="btnDelete waring sm">
            Delete
          </button>
        )}
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
    </li>
  );
}
