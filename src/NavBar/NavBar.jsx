import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

function kkk(){
    const navigate = useNavigate();
    return(
        <div className={styles.box}>
            <button onClick={() => {
                navigate("/")
            }} className={styles.button}>Home</button>

            <div className={styles.smallBox}>
                
                <button onClick={() => {
                    navigate("/login")
                }} className={styles.button}>Log In</button>
                <button onClick={() => {
                    navigate("/signin")
                }} className={styles.button}>Sign In</button>

            </div>
            
        </div>
    )
}

export default kkk