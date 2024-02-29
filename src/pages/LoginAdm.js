import React, { useState } from 'react'
import styles from "../css/App.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Supabase } from '../supabase/Supabase.config';
import { useNavigate } from 'react-router-dom';

function LoginAdm() {
  const [email,setEmail] = useState();
  const [password, setPassword] = useState();
  const navegation = useNavigate();

  async function getLogin() {
    const { data } = await Supabase.from("tb_usuarioadministradores").select();
    data.map(function (adm){
      if(adm.usuadmemail == email && adm.usuadmsenha == password){
        navegation('/dashboard');
      }
      else{
        alert("senha ou email errado!")
      }
    });
  }

  return (
    <div className={styles.containerLogin}>
        <div className={styles.left}>

        </div>
        <div className={styles.right}> 
            <h1>Login de Administrador!</h1>
            <input 
              type="text" 
              placeholder='Digite Aqui sem email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder='Digite Aqui sua senha' 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button 
              onClick={e => {getLogin(e)}}
            >
              Inviar
            </button>
            <div className={styles.loginAdm}>
                <a href="/" className={styles.arrow}><FaArrowCircleLeft /></a>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default LoginAdm