import React from 'react';
import Button from '@material/react-button/dist'; // /index.js is implied
import './App.css';

function App() {
  return (
    <Button
      raised
      className="button-alternate"
      onClick={() => console.log('clicked!')}
    >
      Click Me!
    </Button>
  );
}

export default App;
