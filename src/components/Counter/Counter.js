'use client';
import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const savedValue =
      window.localStorage.getItem('saved-count');

    // `savedValue` will either be:
    // • A string (eg. '4')
    // • null

    if (savedValue === null) {
      return;
    }

    setCount(Number(savedValue));
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('saved-count', count);
  }, [count]);

  return (
    <button
      className="count-btn"
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </button>
  );
}

export default Counter;
