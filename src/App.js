import Home from "./routes/home/home";
import {Routes, Route} from "react-router-dom"
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign-in/sign-in";

function App() {
    return (
        <Routes>
            <Route element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="register" element={<SignIn/>}/>
            </Route>
        </Routes>
    );
};

export default App;
