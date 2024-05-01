// import { useState } from "react";

// const App = () => {
//     const [username, setUsername] = useState("");

//     const submitHandler = (e) =>{
//         e.preeventDefault();
//         console.log({username})
//     };
    


//     return (
//     <div>
//         <h1>two way binding</h1>
        
//         <form onSubmit={submitHandler}>
//            <input type="text" name="username" placeholder="Username"/>
//            <br />
//            <br />
//            <input type="radio" name="gender" />
           
//             <button>submit</button>
//         </form>
        

//     </div>

//     );
    
// };

// export default App;



















const App = () => {
    const submitHandler = (event) => {
        event.preventDefault();

        // console.log(event.target[0].value);
        // console.log(event.target[1].value);

        console.log(event.target.username.value);
        console.log(event.target.email.value);
        
    };
    


    return (
    <div>
        <h1>binding</h1>
        
        <form onSubmit={submitHandler}>
            <input name="username" type="text" placeholder="Username"/>
            <br/>
            <br />
            <input type="radio" name="" id="" />
            <br />
            <input type="radio" name="" id="" />
            <br /> <br />
            <select name="city">
                <option value="delhi">delhi</option>
                <option value="mumbai">mumbai</option>
                <option value="lucknow">lucknow</option>
                <option value="banglore">banglore</option>
            </select>

            {/* <input name="email" type="text" placeholder="Email@email.com"/> */}
            <br />
            <br />
            <button>Submit</button>
        </form>
        

    </div>

    );
    
};

export default App;