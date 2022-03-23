import React, { useEffect, useState } from 'react';
import { fetchDirectors } from '../../services/directors';

export default function Directors() {
  const [directors, setDirectors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDirectors();
        setDirectors(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='Directors'>
      <h1>Directors</h1>
      {error && <p>{error}</p>}
      { directors.map((director) => (
        <div key={director.id}>
          <p>{director.name}</p>
        </div>
      ))}
    </div>
  );
}