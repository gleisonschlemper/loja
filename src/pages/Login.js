import React, { useState } from 'react'
import { GrUserAdmin } from "react-icons/gr";
import styles from "../css/App.module.css";
import { useNavigate } from 'react-router-dom';
import { Supabase } from '../supabase/Supabase.config';
import CarrinhoDeCompra from './CarrinhoDeCompra';

// rfce
function Login() {

  const [email,setEmail] = useState();
  const [password, setPassword] = useState();
  const navegation = useNavigate();

  async function getLogin() {
    const { data } = await Supabase.from("tb_usuarioclientes").select();
    data.map(function (adm){
      if(adm.usucliemail == email && adm.usuclisenha == password){
        //console.log(adm.usuclicodigo)
        //localStorage.setItem('cliente', JSON.stringify(adm));
        navegation('/carrinho?cliente='+adm.usuclicodigo);
        
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
            <h1>Faça seus materiais agora!</h1>
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
            <a href="">Esqueceu a senha</a>
            <div className={styles.loginAdm}>
              <a href="loginAdm">
                <GrUserAdmin />
                Sou administrator
              </a>
            </div>
        </div>
    </div>
    
  )
}

export default Login