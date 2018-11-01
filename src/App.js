import React from 'react';
import Button from '@material/react-button';
import './App.css';

function App() {
  return (
    <Button
      raised
      className="button--terminate"
      onClick={() => console.log('clicked!')}
    >
      Click Me!
    </Button>
  );
}

export default App;
