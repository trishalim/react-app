import React, { useState } from 'react';
import { Button, Card, SideNav } from 'react-rollup-boilerplate';

import './App.css';

function App() {

  const [activePage, setActivePage] = useState('Home');

  const items = [
    { name: 'Home', onClick: () => setActivePage('Home') },
    { name: 'Account', onClick: () => setActivePage('Account') },
    { name: 'Settings', onClick: () => setActivePage('Settings') },
    { name: 'Help', onClick: () => setActivePage('Help') }
  ];

  return (
    <div className="App">
      <SideNav items={items} />
      <div className="App__content">
        <Card>
          <h1>{activePage}</h1>
          <Button
            text="Back to Home"
            onClick={() => setActivePage('Home')}
          />
        </Card>
      </div>
    </div>
  );
}

export default App;
