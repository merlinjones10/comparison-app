import * as React from "react"
import { useContext } from "react"
import { apiContext } from "../context/ApiContext"
import DealCard from "./IndividualDeal/DealCard"
import { Container, LinearProgress, Skeleton } from "@mui/material"

const Result = ({ onCompare }) => {
  const { deals } = useContext(apiContext)
  return (
    <>
      <section>
        {typeof deals === "undefined" ? (
          <Container>
            <LinearProgress />
            <Skeleton variant="rectangular" height={700} />
          </Container>
        ) : (
          deals.map((deal) => (
            <DealCard key={deal.deal_id} deal={deal} onCompare={onCompare} />
          ))
        )}
      </section>
    </>
  )
}

export default Result
