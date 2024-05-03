// const App = () => {
//   let abc = 12;
//   return (
//     <div>
//       <h1>{abc}</h1>
//       <h1>hello</h1>
//       <p>Lorem ipsum dolor sit amet.</p>
//       <button>click</button>
//     </div>
//   );
// };  

// learn usestate form anywhere


// const App = () => {
//   let age = 12

//   const changehandler = () => {
//     age = 15;
//     console.log(age);
//   }

//   return(
//     <div>
//       <h1>home page</h1>
//       <h2>{age}</h2>
//       <button> change age </button>
//     </div>
//   );
// };


import { useState } from "react";
import Console_form from "./Console_form";


const App = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    settime(new Date().toLocaleTimeString());
  }, 1000);

  return(

    <div>
      <h1>{time}</h1>
<Console_form/>

    </div>



  );
};






export default App;