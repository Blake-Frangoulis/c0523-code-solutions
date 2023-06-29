import { useState } from 'react';

function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton />
      <Indicators count={items.length} />
      <NextButton />
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
function PrevButton() {
  return (
    <div>
      <button>Prev</button>
    </div>
  );
}
function Indicators({ count, currentIndex }) {
  const buttonsArray = [];
  for (let i = 0; i < count; i++) {
    buttonsArray.push(<button>{i}</button>);
  }
  return <div>{buttonsArray}</div>;
}
function NextButton() {
  return (
    <div>
      <button>Next</button>
    </div>
  );
}
export default RotatingBanner;
