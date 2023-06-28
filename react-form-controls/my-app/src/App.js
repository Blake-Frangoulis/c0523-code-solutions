import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

function App() {
  return (
    <div>
      <div>
        <h1>Registration Form (Uncontrolled)</h1>
        <RegistrationFormUncontrolled />
      </div>
      <div>
        <h1>Registration Form (Controlled)</h1>
        <RegistrationFormControlled />
      </div>
    </div>
  );
}

export default App;
