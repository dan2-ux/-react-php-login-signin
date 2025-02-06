import NavBar from '../NavBar/NavBar'
import {useState} from 'react';
import React from 'react';
import styles from './Forget.module.css'
import axios from 'axios';
import { MdEmail, MdSpatialAudio } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaBarcode } from "react-icons/fa";

function kkk(){
    const [email, sEmail] = useState("");
    const [pass, sPass] = useState("")
    const [res, sRes] = useState(true)
    const [tell, sTell] = useState("")
    const [code, sCode] = useState("")
    const [checkcode, sCheckcode] = useState("")
    const doSignIn = async (e) =>{
        e.preventDefault();
        const response = await axios.post("http://localhost/PHPMailer-master/change%20pass%20through%20email/send-email.php", {
            email
        });
        sCode(String(response.data.code))
        sTell(response.data.status);
        console.log(response.data.code)
        console.log(typeof code)
        if(response.data.status === "successfully"){
            sRes(false);
            sTell("Ready to change your password")
        }
        else{
            sTell("Error")
        }
    }
    const doChangePass = async (e) => {
        e.preventDefault();
        const duty = "changePassword"
        if(checkcode.trim() === code.trim()){
            const response = await axios.post("http://localhost/php-backend/index.php",{
                duty,
                email,
                pass
            });
            console.log(response)
            if(response.data.status === "change pass successfully"){
                sTell("Change password Successfully")
            }
        }
        else{
            sTell("Wrong code");
        }
    }
    return(
        <div>
            <NavBar/>
            <div className={styles.box}>
                    {res ? 
                    <div className={styles.smaller}>
                        <h1>Reset Password</h1>
                        <form action="" className={styles.form}
                        onSubmit={doSignIn}>
    
                            <div className={styles.input}>
                                <input type="text" placeholder='Email'
                                id='email' className={styles.enter} 
                                onChange={(e) => sEmail(e.target.value)}/>
                                <label htmlFor="email">
                                    <MdEmail className={styles.icon} />
                                </label>
                            </div>
                            <h3 className={styles.res}>{tell}</h3>
    
                            <div  className={styles.button}>
                                <button className={styles.nut}>Send Code</button>
                            </div>
                    
                        </form>
                    </div>
                        :
                        <div className={styles.smaller1}>
                            <h1>Reset Password</h1>
                        <form action="" className={styles.form}
                        onSubmit={doChangePass}>

                            <div className={styles.input}>
                                <input type="text" placeholder='Enter code recivied'
                                id='code' className={styles.enter} 
                                value={checkcode}
                                onChange={(e) => sCheckcode(e.target.value)}/>
                                <label htmlFor="code">
                                    <FaBarcode  className={styles.icon} />
                                </label>
                            </div>

                            <div className={styles.input}>
                                <input type="password" placeholder='Enter new Password'
                                id='pass' className={styles.enter} 
                                value={pass}
                                onChange={(e) => sPass(e.target.value)}/>
                                <label htmlFor="pass">
                                    <RiLockPasswordFill className={styles.icon} />
                                </label>
                            </div>

                            <h3 className={styles.res1}>{tell}</h3>

                            <div  className={styles.button}>
                                <button className={styles.nut}>Submit Change</button>
                            </div>

                        </form>
                        </div>
                    }
                </div>
            
        </div>
    )
}

export default kkk