import React from 'react';
import './App.css';
import Dinner from './dinner'


function App() {
  return (
    <div className="App">
      <Dinner a="This is Parent element" b = "This is a child element"/>
  </div>
  )
}

export default App;
