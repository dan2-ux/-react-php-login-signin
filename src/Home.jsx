import { useNavigate } from "react-router-dom"
import NavBar from './NavBar/NavBar'

function kkk(){
    const navigate = useNavigate()
    return(
        <div>
            <NavBar/>
            <h1>home</h1>
        </div>
    )
}

export default kkk