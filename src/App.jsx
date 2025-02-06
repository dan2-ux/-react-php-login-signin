import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from './Home'
import Signin from './Sign In/SignIn'
import Login from './Log In/Login'
import Forget from './Forget/Forget'

function App(){
    return(
        <div >
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="signin" element={<Signin/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="forget" element={<Forget/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default App