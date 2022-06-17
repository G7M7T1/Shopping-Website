import Home from "./routes/home/home";
import {Routes, Route} from "react-router-dom"
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";

function App() {
    return (
        <Routes>
            <Route element={<Navigation/>}>
                <Route index element={<Home/>}/>

                <Route path="shop" element={<Shop/>}/>

                <Route path="register" element={<Authentication/>}/>
            </Route>
        </Routes>
    );
};

export default App;
