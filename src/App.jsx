import React from 'react';
import { Header } from './components/Header/Header';
import './styles.css'
import { LaunchList } from './components/LaunchList/LaunchList';

function App() {
  return (
    <div className="App">
      <Header />
      <LaunchList />
    </div>
  );
}

export default App;
