import React, { useEffect, useState } from 'react';
import Result from './components/Result';
import ResultCard from './components/ResultCard';
import './App.css';
import { apiContext } from './context/ApiContext';
import Layout from './components/Layout';
//
function App() {
  // Add data to list. I get true or false for the id of the item
  const addComparisonItem = (id, state) => {
    console.log('Clicked!!', id, state);
  };
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch('/api').then((response) => response.json().then((data) => setBackendData(data)));
  }, []);

  return (
    <apiContext.Provider value={backendData}>
      <Layout>
        <div>
          <Result onCompare={addComparisonItem}></Result>
        </div>
      </Layout>
    </apiContext.Provider>
  );
}

export default App;
