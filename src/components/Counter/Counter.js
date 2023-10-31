'use client';
import React from 'react';

import Spinner from '../Spinner';

function Counter() {
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    const savedValue =
      window.localStorage.getItem('saved-count');

    setCount(savedValue ? Number(savedValue) : 0);
  }, []);

  React.useEffect(() => {
    if (typeof count === 'number') {
      window.localStorage.setItem(
        'saved-count',
        count
      );
    }
  }, [count]);

  return (
    <button
      className="count-btn"
      onClick={() => setCount(count + 1)}
    >
      Count:{' '}
      {typeof count === 'number' ? count : <Spinner />}
    </button>
  );
}

export default Counter;
