import Footer from "../components/footer";
import Header from "../components/header";
import { Outlet } from 'react-router-dom'

const Default = () => {
    return (  
        <div>
            <Header/>
            <Outlet />
            <Footer />
        </div>
    );
}
 
export default Default;