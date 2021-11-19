import React, { useEffect, useState } from 'react';

import './App.css';
function App() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch('/api').then((response) => response.json().then((data) => setBackendData(data)));
  }, []);
  console.log(backendData);

  return <div></div>;
}

export default App;
