import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([<input type="name" placeholder='name' />, <input type="email" placeholder='email' />, <input type="mobile" placeholder='mobile no.' /> ]);

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
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

// export default MyComponent;
export default App;