import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Home from './Home'

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/Home" element={<Home />} />
            </Routes>
        </Router>
    );
}  

export default Routers