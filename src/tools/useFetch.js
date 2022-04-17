import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        // Creating an abort controller
        const abortController = new AbortController();

        // Fetching data with the fetch api
        fetch(url, { signal: abortController.signal })
        .then(res => {
            if(!res.ok){
                throw Error('Can not get the requested resource!!!');
            }
          return  res.json();
        })
        .then((data) => {
            setData(data);
            setIsPending(false);
        })
        .catch((err) =>{
            if(err.name === 'AbortError'){
                console.log('Fetch Aborted');
            }
            else{
                setIsPending(false);
                setError(true);
            }
        })
        // Using abort controller to stop the fetch request
        return ()=> abortController.abort();
    }, [url]);


    return {data, isPending, error};
}
 
export default useFetch;