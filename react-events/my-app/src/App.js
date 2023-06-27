import CustomButton from './CustomButton';
import './App.css';

function App() {
  function handleCustomClick(text) {
    alert(`Clicked ${text}`);
  }
  return (
    <div className="App">
      <CustomButton color="Red" text="One" onCustomClick={handleCustomClick} />
      <CustomButton color="Blue" text="Two" onCustomClick={handleCustomClick} />
      <CustomButton
        color="Green"
        text="Three"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
