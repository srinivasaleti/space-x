import React from 'react';
import { Header } from './components/Header/Header';
import './styles.css'
import { Launch } from './components/Launch/Launch';

function App() {
  return (
    <div className="App">
      <Header />
      <Launch
        banner="https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg"
        title="FalconSat"
        launchDate="2006-03-25T10:30:00+12:00"
        description="Some Description"
      />

      <Launch
        banner="https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg"
        title="Trailblazer"
        launchDate="2008-08-02T15:34:00+12:00"
        description="Some Description"
      />
    </div>
  );
}

export default App;
