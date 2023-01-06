import {Routes, Route} from "react-router-dom";
import Main from './routes/Main/Main';
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path="/" element={<Main/>}/>

            </Routes>

        </div>
    );
}

export default App;
