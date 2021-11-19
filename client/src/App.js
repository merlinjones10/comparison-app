import React, { useEffect, useState } from 'react';
import Result from './components/Result';
import ResultCard from './components/ResultCard';
import './App.css';
function App() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch('/api').then((response) => response.json().then((data) => setBackendData(data)));
  }, []);
  console.log(backendData);

  return (
    <div>
      <Result></Result>
    </div>
  );
}

export default App;
