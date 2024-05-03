import { useState } from 'react';

const App = () =>{
  const [username,setUsername]  = useState(" ");
  const [gender,setGender]  = useState(" male ");
  const [city,setCity]  = useState(" bhopal ");
  const [desc, setDesc] = useState(" ");
  const [accept, setAccept] = useState(true);

  const submitHanlder =(e) =>{
    e.preventDefault();
    console.log({username ,gender, city ,desc});
  };

  return (
    <div>
      <h1> Two Way Binding </h1>
      <form onSubmit={submitHanlder}>
        <input 
          onChange={ (e) => setUsername(e.target.value)}
          value={username}
          type="text" placeholder='username' />
        <br /> <br />
        <input 
          onChange={(e) => setGender(e.target.value)} 
          value="male"
          checked={gender === "male" ? true : false}
          type="radio" name='gender'/> Male

        <input
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "female" ? true : false}
          type="radio" name='gender' value="female" />Female
        <br /> <br />

        <select
          defaultValue={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="delhi">Delhi</option>
          <option value="bhopal">Bhopal</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
          <option value="pune">Raisen</option>
        </select>
        <br /> <br />

        <textarea 
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          placeholder='Write Text in this Area' 
        />
        <br /> <br />

        <input
          onChange={(e) => setAccept(e.target.checked)}
          type="checkbox" />Accept
        <br /> <br />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default App;