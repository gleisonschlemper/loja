import React from 'react'
import Menu from './../components/Menu';
import styles from './../css/App.module.css';
import { FaSearch } from "react-icons/fa";
function Produtos() {
  return (
    <div>
        <Menu
          titleRequests = 'pedidos'
          titleProducts = 'produtos'
          titleCadastrar='cadastrar produto'
        />
        <div className={styles.containerMetade}>
            <div className={styles.pesquisa}>
                <div className={styles.pes}>
                  <FaSearch/>
                  <input type="text" placeholder='Digite sua pesquisa' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Produtos