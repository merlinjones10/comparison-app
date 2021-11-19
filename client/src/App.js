import React, { useEffect, useState } from 'react';
import Result from './components/Result';
import ResultCard from './components/ResultCard';
import './App.css';
import { apiContext } from './context/ApiContext';
import Layout from './components/Layout';
//
function App() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch('/api').then((response) => response.json().then((data) => setBackendData(data)));
  }, []);
  console.log(backendData);

  return (
    <apiContext.Provider value={backendData}>
      <Layout>
        <div>
          <Result></Result>
        </div>
      </Layout>
    </apiContext.Provider>
  );
}

export default App;
