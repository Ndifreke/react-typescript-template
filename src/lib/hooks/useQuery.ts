import { gql,useQuery } from '@apollo/client';

const useQuery_ = () =>{

    const q = gql`
    query GetExchangeRates {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `
    return useQuery(q);
}

export default useQuery_
