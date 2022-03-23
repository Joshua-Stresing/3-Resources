import React, { useEffect, useState } from 'react';
import { fetchFamilies } from '../../services/families';

export default function Families() {
  const [families, setFamilies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFamilies();
        setFamilies(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='Families'>
      <h1>Families</h1>
      {error && <p>{error}</p>}
      { families.map((family) => (
        <div key={family.id}>
          <p>{family.name}</p>
        </div>
      ))}
    </div>
  );
}