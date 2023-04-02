import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodecampLogo from './images/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);  //0 will be the default value for the state

  const handleClic = () => {
    setNumClics(numClics + 1);
  };

  const handleReset = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img
          className='freecodecamp-logo'
          src={freeCodecampLogo}
          alt='FreeCodeCamp Logo'
        />
      </div>
      <div className='main-container'>
        <Counter 
          numClics={numClics}
        />
        <Button
          text='Clic'
          clicButton={true}
          handleClic={handleClic}           
        />
        <Button 
          text='Reset'
          clicButton={false}
          handleClic={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
