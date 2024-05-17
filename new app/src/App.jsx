// import { useState } from "react";

// const App = () => {
//     const [users, setusers] = useState([]);

//     const [username, setUsername] = useState("");
//     const [gender, setGender] = useState("male");
//     const [city, setCity] = useState("mumbai");
//     const [desc, setDesc] = useState("");
//     const [accept, setAccept] = useState(false);
//     const SubmitHandler = (e) => {
//         e.preventDefault();

//         const newuser = { username, gender, city, desc };

//         const copyuser = [...users];
//         copyuser.push(newuser);
//         setusers(copyuser);

//         // setusers([...users, newuser])

//         setUsername("");
//         setCity("mumbai");
//         setGender("male");
//         setDesc("");
//         setAccept(false);
//     };

//     let listrender =
//         users.length > 0 ? (
//             users.map((user, index) => {
//                 return (
//                     <div key={index}>
//                         <h1>{user.username}</h1>
//                         {user.gender} <br/>
//                         {user.city} <br/>
//                         {user.desc} <br/>
//                         {user.accept}
//                     </div>
//                 );
//             })
//         ) : (
//             <h1>No data present</h1>
            
//         );

//         const x = { color:"#000" }

        
//         const DeleteHandler = (id) => {
//           settasks(tasks.filter((t) => t.id != id));
//           localStorage.setItem(
//               "tasks",
//               JSON.stringify(tasks.filter((t) => t.id != id))
//           );
//       };



            
//     return (
//         <div>
//             <h1 style={x} >New form</h1>
//             {/* <h1 style={{color:"red"}}>Two Way Binding</h1> */}
//             <form onSubmit={SubmitHandler}>
//                 <input
//                     onChange={(e) => setUsername(e.target.value)}
//                     value={username}
//                     type="text"
//                     placeholder="username"
//                 />
//                 <br /> <br />
//                 <input
//                     onChange={(e) => setGender(e.target.value)}
//                     value="male"
//                     checked={gender === "male" ? true : false}
//                     type="radio"
//                     name="gender"
//                 />
//                 Male
//                 <input
//                     onChange={(e) => setGender(e.target.value)}
//                     value="female"
//                     checked={gender === "female" ? true : false}
//                     type="radio"
//                     name="gender"
//                 />
//                 Female
//                 <br /> <br />
//                 <select
//                     defaultValue={city}
//                     onChange={(e) => setCity(e.target.value)}
//                 >
//                     <option value="delhi">Delhi</option>
//                     <option value="pune">Pune</option>
//                     <option value="mumbai">Mumbai</option>
//                     <option value="kolkata">Kolkata</option>
//                 </select>
//                 <br /> <br />
//                 <textarea
//                     onChange={(e) => setDesc(e.target.value)}
//                     value={desc}
//                     placeholder="enter text here"
//                 ></textarea>
//                 <br /> <br />
//                 <input
//                     // value="Option 1"
//                     checked={accept ? true : false}
//                     onChange={(e) => setAccept(e.target.checked)}
//                     type="checkbox"
//                 />
//                 Accept
//                 <br />
//                 <br />
//                 <button>Submit</button>
//             </form>
//             <hr />
//             {listrender}
//             <button onClick={() => DeleteHandler(task.id)}>delete</button>
//         </div>

//     );
// };

// export default App; 





import React, { useState } from 'react';

const MyComponent = () => {
  const [items, setItems] = useState([<input type="name" placeholder='name' />, <input type="email" placeholder='email' />, <input type="mobile" placeholder='mobile no.' /> ]);

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 2);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>new from</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
