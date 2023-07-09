import { useState, useEffect } from 'react';

export interface Data {
  id: number;
  title: string;
  body: string;
}

function useAsyncHook(url: string): [Data[], React.Dispatch<React.SetStateAction<Data[]>>] {
  const [data, setData] = useState<Data[]>([]);

 const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }


  useEffect(() => {
    fetchData();
  }, [url]);


  return [data, setData];
  
}

export default useAsyncHook;