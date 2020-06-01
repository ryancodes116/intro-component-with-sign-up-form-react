import React from 'react';
import './App.css';
import Details from './components/Details';
import Form from './components/Form';

const App = () => {
  return (
    <div className="mainContainer">
      <Details />
      <Form />
    </div>
  );
};

export default App;
