import React, { useEffect, useState } from 'react';
import Result from './components/Result';
import { apiContext } from './context/ApiContext';
import Layout from './components/layout/Layout';
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
    fetch('/api').then((response) =>
      response.json().then((data) => {
        setBackendData(data);
        setComparisonIds(data.deals.map((elem) => ({ ...elem, compare: false })));
      })
    );
  }, []);

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
