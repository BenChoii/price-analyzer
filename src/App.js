import React from 'react';
import URLAnalyzer from './components/URLAnalyzer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rental Price Analyzer</h1>
        <p>Analyze Airbnb and VRBO listings with Claude AI</p>
      </header>
      <main>
        <URLAnalyzer />
      </main>
    </div>
  );
}

export default App;