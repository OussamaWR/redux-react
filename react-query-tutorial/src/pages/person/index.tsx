import { IPerson } from '@/lib/interfaces/IPerson';
import {useQuery , UseQueryResult} from "react-query"
import {FC} from 'react'
const PersonePage : FC = ()=>{

   

    const {isLoading , isError ,error , data }:UseQueryResult<IPerson,Error>=useQuery<IPerson, Error, IPerson,string>("person" , async ()=>{
        const res = await fetch("/api/person");
        return res.json();
       });

       if(isLoading){
        return(
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }

    if(isError){
        return (
            <p>
            Boom Boy  : Error is  -- {error.message}
            </p>
        )
        
    }

    return(
    <>
        <h3>{data?.id}</h3>
        <h3>{data?.age}</h3>
        <h3>{data?.name}</h3>
    </>); 
     
};
export default PersonePage;