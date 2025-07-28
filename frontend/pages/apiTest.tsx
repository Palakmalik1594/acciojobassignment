// frontend/pages/apiTest.tsx
import { useEffect, useState } from 'react';

export default function ApiTest() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000') // Make sure this matches your backend URL
      .then((res) => {
        if (!res.ok) {
          throw new Error('API request failed');
        }
        return res.text(); // or res.json() depending on backend
      })
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch from backend');
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Backend Response:</h1>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{message}</p>}
    </div>
  );
}
