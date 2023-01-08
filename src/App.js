import {Routes, Route} from "react-router-dom";
import Main from './routes/Main/Main';
import Header from "./components/Header/Header";
import AboutUs from './routes/AboutUs/AboutUs';
import Services from "./routes/Services/Services";
import Reviews from "./routes/Reviews/Reviews";
import RepairTips from './routes/RepairTips/RepairTips';
import Contacts from './routes/Contacts/Contacts';
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/about_us" element={<AboutUs/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/reviews' element={<Reviews/>}/>
                <Route path='/repair_tips' element={<RepairTips/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
