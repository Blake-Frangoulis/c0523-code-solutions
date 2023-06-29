import { useState } from 'react';

function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function Banner({ item, currentIndex }) {
    return (
      <div>
        <h1>{item}</h1>
      </div>
    );
  }
  function PrevButton() {
    return (
      <div>
        <button>Prev</button>
      </div>
    );
  }
  function Indicators({ count, current }) {
    return (
      <div>
        {items.map((item, index) => (
          <button>{index + 1}</button>
        ))}
      </div>
    );
  }
  function NextButton() {
    return (
      <div>
        <button>Next</button>
      </div>
    );
  }
  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton />
      <Indicators count={items.length} current={currentIndex} />
      <NextButton />
    </div>
  );
}

export default RotatingBanner;
