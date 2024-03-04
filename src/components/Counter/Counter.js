'use client';
import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const savedCount = window.localStorage.getItem('saved-count', count);

    if (savedCount === null) {
      return;
    }

    setCount(Number(savedCount));
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('saved-count', count);
  }, [count]);

  return (
    <button className='count-btn' onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default Counter;
