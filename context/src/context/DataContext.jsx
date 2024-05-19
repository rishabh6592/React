import { createContext, useState } from 'react'
export const datacontext = createContext(null);


const  DataContext =(props)=> {
  // const [count, setCount] = useState(0)
  const [data, setdata]= useState("Data  access to globally!")
  console.log(props)
  return(
   <datacontext.Provider value={[data,setdata]}>
    {props.children}
   </datacontext.Provider>
  )
}

export default DataContext;