import React from 'react'
import styles from '../css/App.module.css'
import { FaAddressCard } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import { FaLuggageCart } from "react-icons/fa";
import { BsJournalPlus } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa";

function Menu({titleRequests, titleProducts, titleCadastrar}) {
  return (
    <nav>
       <ol>
          <div className={styles.logo}>
              <strong>Sistema de controle</strong>
          </div>
          <li>
            <FaCashRegister/>
            <a href="/dashboard">{titleCadastrar}</a>
          </li>
          <li>
            <FaLuggageCart/>
            <a href="/dashboard/pedidos">{titleRequests}</a>
          </li>
          <li>
            <BsJournalPlus/>
            <a href="/dashboard/produtos">{titleProducts}</a></li>
      </ol> 
      <a href="/loginAdm"><IoLogOutOutline/></a> 
    </nav>
  )
}

export default Menu