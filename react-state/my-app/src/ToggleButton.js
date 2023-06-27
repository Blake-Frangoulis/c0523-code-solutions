import { useState } from 'react';

function ToggleButton({ text, color, onClick }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState', isClicked);

  function handleClick() {
    console.log('before setter', isClicked);
    setIsClicked(!isClicked);
    console.log('after setter', isClicked);
  }

  const buttonColor = isClicked ? color : 'white';

  return (
    <button onClick={handleClick} style={{ backgroundColor: buttonColor }}>
      {text}
    </button>
  );
}

export default ToggleButton;
