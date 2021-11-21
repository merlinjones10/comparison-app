import React, { useEffect, useState } from 'react';
import Result from './components/Result';
import ResultCard from './components/Deal/ResultCard';
import './App.css';
import { apiContext } from './context/ApiContext';
import Layout from './components/Layout/Layout';
import CompareModal from './components/CompareModal';
//
function App() {
  // Add data to list. I get true or false for the id of the item
  const addComparisonItem = (id, state) => {
    setComparisonIds(
      comparisonIds.map((obj) => (obj.deal_id === id ? { ...obj, compare: state } : obj))
    );
    // console.log(state);
  };
  const [comparisonIds, setComparisonIds] = useState([]);
  const [backendData, setBackendData] = useState({});
  // console.log(comparisonIds[0].compare);

  // console.log(comparisonIds[0].compare);
  useEffect(() => {
    try {
      fetch('/api').then((response) =>
        response.json().then((data) => {
          setBackendData(data);
          setComparisonIds(data.deals.map((elem) => ({ ...elem, compare: false })));
        })
      );
      // setComparisonIds(data.deals)
    } catch (error) {
      console.log(error + 'No Backend data');
    }
  }, []);

  return (
    <apiContext.Provider value={backendData}>
      <Layout>
        <div>
          <CompareModal comparisonIds={comparisonIds}></CompareModal>
          <Result onCompare={addComparisonItem}></Result>
        </div>
      </Layout>
    </apiContext.Provider>
  );
}

export default App;
