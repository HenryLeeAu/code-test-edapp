import React from 'react';

export default ({
  auth,
  currentGenre,
  onClick,
  poster,
  title,
  genres,
  descripition,
}) => {
  return (
    
      <div>
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
      <h4>{title}</h4>
      <p>{descripition}</p>
      </div>
    
  );
};
