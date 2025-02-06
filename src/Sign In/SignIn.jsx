import NavBar from '../NavBar/NavBar'
import {useState} from 'react';
import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from './SignIn.module.css'
import { RiLockPasswordFill } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function kkk(){
    const [email, sEmail] = useState("");
    const [name, sName] = useState("");
    const [pass, sPass] = useState("");
    const [gen, sGen] = useState("");
    const [birth, sBirth] = useState("");
    const navigate = useNavigate()
    const [res, sRes] = useState("");
    const doSignIn = async (e) =>{
        e.preventDefault();
        const duty = "signin";
        try{
            const response = await axios.post("http://localhost/php-backend/index.php", {
            duty,
            email, 
            name,
            pass,
            gen,
            birth
            });
            console.log(response)
            if(response.data.status === "successfully sign in"){
                navigate("/")
            }
            else{
                sRes(response.data.status)
            }
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
                    <h1>Sign In</h1>
                    <form action="" className={styles.form}
                    onSubmit={doSignIn}>

                        <div className={styles.input}>
                            <input type="text" placeholder='Email'
                            id='email' className={styles.enter} 
                            onChange={(e) => sEmail(e.target.value)}
                            required/>
                            <label htmlFor="email">
                                <MdEmail className={styles.icon} />
                            </label>
                        </div>

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
                        </div>

                        <div className={styles.input}>
                            <input type="radio"  id="male" 
                            value="male" checked={gen === "male"}
                            onChange={(e) => sGen(e.target.value)}/>
                            <label htmlFor="male"
                            className={styles.gen}>MALE</label>
                            <input type="radio"  id="female" 
                            value="female" checked={gen === "female"}
                            onChange={(e) => sGen(e.target.value)}/>
                            <label htmlFor="female"
                            className={styles.gen}>FEMALE</label>
                        </div>

                        <div className={styles.input}>
                            <input type="date" className={styles.date}
                            placeholder='Age'
                            onChange={(e) => sBirth(e.target.value)}
                            required/>
                            <a href="/login" className={styles.a}>Already have Accounct</a>
                        </div>
                        <h3 className={styles.res}>{res}</h3>

                        <div  className={styles.button}>
                            <button className={styles.nut}>Sign In</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default kkk