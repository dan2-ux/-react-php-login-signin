import NavBar from '../NavBar/NavBar'
import {useState} from 'react';
import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import styles from './Login.module.css'
import { RiLockPasswordFill } from "react-icons/ri";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function kkk(){
    const [name, sName] = useState("");
    const [pass, sPass] = useState("");
    const [res, sRes] = useState("");
    const navigate = useNavigate()
    const doSignIn = async (e) =>{
        e.preventDefault();
        const duty = "login";
        try{
            const response = await axios.post("http://localhost/php-backend/index.php", {
            duty,
            name,
            pass
        });
            if(response.data.status === "successfully log in"){
                navigate("/")
            }
            else{
                sRes("Error")
            }
            console.log(response)
        }
        catch(error){
            sRes("Failed to connect")
        }
    }
    
    return(
        <div>
            <NavBar/>
            <div className={styles.box}>
                <div className={styles.smaller}>
                    <h1>Log In</h1>
                    <form action="" className={styles.form}
                    onSubmit={doSignIn}>

                        <div className={styles.input}>
                            <input type="text" placeholder='Name' 
                            id='name' className={styles.enter} 
                            onChange={(e) => sName(e.target.value)}
                            required/>
                            
                            <label htmlFor="name">
                                <FaUserAlt  className={styles.icon} />
                            </label>
                        </div>

                        <div className={styles.input}>
                            <input type="password" placeholder='Password'
                            id='age' className={styles.enter} 
                            onChange={(e) => sPass(e.target.value)}
                            required/>
                            <label htmlFor="age">
                                <RiLockPasswordFill   className={styles.icon} />
                            </label>
                            <a href="/forget" className={styles.a}>Forget Password</a>
                        </div>
                        <h3 className={styles.res}>{res}</h3>
                        <div  className={styles.button}>
                            <button className={styles.nut}>Log In</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default kkk