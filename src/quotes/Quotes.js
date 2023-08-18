import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quotes() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.api-ninjas.com/v1/quotes?category=dreams', {
      headers: { 'X-Api-Key': 'CswAFd5+15BCNhWkX0QvMQ==2j0HO1d24mVADbcM' },
    })
      .then((response) => {
        setQuote(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = (
      <p>
        Error:
        {' '}
        {error.message}
      </p>
    );
  } else {
    content = <p>{quote ? quote.quote : 'No quote available'}</p>;
  }

  return <div>{content}</div>;
}

export default Quotes;
