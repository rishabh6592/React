const App = () => {
    const testhandler =  (msg) => {
        console.log("function called!",msg);
    }

    return (
    <div>
        
        <h1>hello</h1>
        <button onClick = {() => testhandler("hello")}> call function</button>

    </div>
    );
    
};

export default App