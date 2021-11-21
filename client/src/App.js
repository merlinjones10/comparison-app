import React, { useEffect, useState } from 'react';
import Result from './components/Result';
import './App.css';
import { apiContext } from './context/ApiContext';
import Layout from './components/Layout/Layout';
import CompareModal from './components/comparison/CompareModal';
//
function App() {
  // Add data to list. I get true or false for the id of the item
  const addComparisonItem = (id, state) => {
    setComparisonIds(
      comparisonIds.map((obj) => (obj.deal_id === id ? { ...obj, compare: state } : obj))
    );
  };
  const [comparisonIds, setComparisonIds] = useState([]);
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    try {
      fetch('/api').then((response) =>
        response.json().then((data) => {
          setBackendData(data);
          setComparisonIds(data.deals.map((elem) => ({ ...elem, compare: false })));
        })
      );
    } catch (error) {
      console.log(error + 'No Backend data');
    }
  }, []);

  // console.log(comparisonIds.filter((deal) => deal.compare).length === 0);
  return (
    <apiContext.Provider value={backendData}>
      <Layout>
        <div>
          {comparisonIds.filter((deal) => deal.compare).length === 0 ? null : (
            <CompareModal comparisonIds={comparisonIds}></CompareModal>
          )}

          <Result onCompare={addComparisonItem}></Result>
        </div>
      </Layout>
    </apiContext.Provider>
  );
}

export default App;
