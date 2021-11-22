import * as React from 'react';
import { useContext } from 'react';
import { apiContext } from '../context/ApiContext';
import CompareModal from './comparison/CompareModal';
import ResultCard from './IndividualDeal/ResultCard';
import { Container, LinearProgress, Skeleton } from '@mui/material';

const Result = ({ onCompare }) => {
  const { deals } = useContext(apiContext);
  return (
    <>
      <section>
        {typeof deals === 'undefined' ? (
          <Container>
            <LinearProgress />
            <Skeleton variant="rectangular" height={700} />
          </Container>
        ) : (
          deals.map((deal) => <ResultCard key={deal.deal_id} deal={deal} onCompare={onCompare} />)
        )}
      </section>
    </>
  );
};

export default Result;
