import { useState } from 'react';

function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext(event) {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  }

  function handlePrev(event) {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
  }

  function handleSelect(index) {
    setCurrentIndex(index);
  }
  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton onPrev={handlePrev} />
      <Indicators
        count={items.length}
        onSelect={handleSelect}
        currentIndex={currentIndex}
      />
      <NextButton onNext={handleNext} />
    </div>
  );
}
function Banner({ item, currentIndex }) {
  return (
    <div>
      <h1>{item}</h1>
    </div>
  );
}
function PrevButton({ onPrev }) {
  return (
    <div>
      <button
        onClick={onPrev}
        type="button"
        style={{ backgroundColor: 'white' }}>
        Prev
      </button>
    </div>
  );
}
function Indicators({ count, currentIndex, onSelect }) {
  const buttonsArray = [];
  for (let i = 0; i < count; i++) {
    buttonsArray.push(
      <button
        key={i}
        type="button"
        onClick={() => onSelect(i)}
        style={{ backgroundColor: i === currentIndex ? 'lightblue' : 'white' }}>
        {i}
      </button>
    );
  }
  return <div>{buttonsArray}</div>;
}
function NextButton({ onNext }) {
  return (
    <div>
      <button
        onClick={onNext}
        type="button"
        style={{ backgroundColor: 'white' }}>
        Next
      </button>
    </div>
  );
}
export default RotatingBanner;
