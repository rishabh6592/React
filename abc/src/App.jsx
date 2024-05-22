import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="w-[80%] p-10 m-auto">
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};

export default App;
