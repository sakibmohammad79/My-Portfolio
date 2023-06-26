import { Outlet } from "react-router-dom";
import Navber from "../components/Home/Navber/Navber";
import Footer from "../components/Home/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;