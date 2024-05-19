import React, { useContext } from 'react';
import { datacontext } from './context/DataContext';

const App = () => {
  const [data,setdata] = useContext(datacontext);
  console.log("data")
  return(
         <div>app</div>
        )
}

export default DataContext;