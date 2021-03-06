import Home from "./routes/home/home";
import {Routes, Route} from "react-router-dom"
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";

function App() {
    return (
        <Routes>
            <Route element={<Navigation/>}>
                <Route index element={<Home/>}/>

                <Route path="shop" element={<Shop/>}/>

                <Route path="register" element={<Authentication/>}/>

                <Route path="checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
    );
};

export default App;
