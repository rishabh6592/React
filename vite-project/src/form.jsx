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
        <h1>React in form</h1>
        
        <form onSubmit={submitHandler}>
            <input name="username" type="text" placeholder="username"/>
            <br/>
            <br />
            <input name="email" type="text" placeholder="email@email.com"/>
            <br />
            <br />
            <button>submit</button>
        </form>
        

    </div>

    );
    
};

export default App;