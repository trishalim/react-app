import React from 'react';
import Example from './submodule/Example';

function App() {
  return (
    <div className="App">
      <div>
        <Example text="Example component used from App.js" />
      </div>
    </div>
  );
}

export default App;
