import * as React from 'react';
import { useContext } from 'react';
import { apiContext } from '../context/ApiContext';
import CompareModal from './CompareModal';
import ResultCard from './Deal/ResultCard';

const Result = ({ onCompare }) => {
  const { deals } = useContext(apiContext);
  return (
    <>
      <article>{/* <CompareModal></CompareModal> */}</article>
      <section>
        {typeof deals === 'undefined' ? (
          <p>Loading...</p>
        ) : (
          deals.map((deal) => <ResultCard key={deal.deal_id} deal={deal} onCompare={onCompare} />)
        )}
      </section>
    </>
  );
};

export default Result;
