import { gql,useQuery } from '@apollo/client';
import { GetUsers } from 'lib/@types/GetUsers';

const useQuery_ = () =>{

    const q = gql`
    query GetUsers{
      names(search: "USD") {
        currency
        rate
      }
    }
  `
    return useQuery<GetUsers,any>(q).data?.names.length;
}

export default useQuery_
