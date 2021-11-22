import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Result from './components/Result';
import { apiContext } from './context/ApiContext';
import Layout from './components/layout/Layout';
import CompareModal from './components/comparison/CompareModal';

//
function App() {
  // Copy of original data with 'compare' state added to Object. I get true or false for the id of the item when compare is clicked.
  const addComparisonItem = (id, state) => {
    setComparisonIds(
      comparisonIds.map((obj) => (obj.deal_id === id ? { ...obj, compare: state } : obj))
    );
  };
  const [comparisonIds, setComparisonIds] = useState([]);
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api');
      setBackendData(result.data);
      setComparisonIds(result.data.deals.map((elem) => ({ ...elem, compare: false })));
      console.log(result.data);
    };
    fetchData();
    // fetch('/api').then((response) =>
    //   response.json().then((data) => {
    //     setBackendData(data);
    //     setComparisonIds(data.deals.map((elem) => ({ ...elem, compare: false })));
    //   })s
    // );
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
