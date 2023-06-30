import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleDown(event) {
    const countDown = count - 1;
    setCount(countDown);
  }

  function handleUp(event) {
    const countUp = count + 1;
    setCount(countUp);
  }

  return (
    <div>
      <button onClick={handleDown}>Down</button> {count}{' '}
      <button onClick={handleUp}>Up</button>
    </div>
  );
}

export default Counter;
