// ResultsComponent.js
import React from 'react';

const ResultsComponent = ({ results }) => {
  return (
    <div>
      {results.map((result, index) => (
        <div key={index}>
          <p>Face {index + 1}:</p>
          <p>Age: {result.age}</p>
          <p>Gender: {result.gender}</p>
          <p>Emotions: {JSON.stringify(result.expressions)}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsComponent;