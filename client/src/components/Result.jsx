import * as React from 'react';
import { useContext } from 'react';
import { apiContext } from '../context/ApiContext';
import ResultCard from './ResultCard';

const Result = ({ onCompare }) => {
  const { deals } = useContext(apiContext);
  //   console.log(typeof deals);
  return (
    <>
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
