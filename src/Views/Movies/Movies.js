import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../../services/movies';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='Movies'>
      <h1>Movies</h1>
      {error && <p>{error}</p>}
      { movies.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
}