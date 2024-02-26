import React, { useState } from 'react';
import WebcamComponent from './WebcamComponent';
import ResultsComponent from './ResultsComponent';
import LoadModelsComponent from './LoadModelsComponent';

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <h1>Live Facial Recognition</h1>
      <LoadModelsComponent/>
      <WebcamComponent setResults={setResults} />
      <ResultsComponent results={results} />
    </div>
  );
};

export default App;
