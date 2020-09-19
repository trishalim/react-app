import React from 'react';
import './App.css';
import Example from './submodule/Example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to my app.
      </header>
      <div>
        <h3>Here's a component reused from the library</h3>
        <Example text="Example component used from App.js" />
      </div>
    </div>
  );
}

export default App;
