import { React } from 'react'

import './App.css';

// components
import Nav from '../components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Making sure this works</p>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
