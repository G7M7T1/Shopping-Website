import Home from "./routes/home/home";
import {Routes, Route} from "react-router-dom"
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";

function App() {
    return (
        <Routes>
            <Route element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="register" element={<Authentication/>}/>
            </Route>
        </Routes>
    );
};

export default App;
