import React from 'react'
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Supabase } from '../supabase/Supabase.config';
import '../css/App.module.css'
import Menu from '../components/Menu';
import styles from './../css/App.module.css'
function Dashboard() {
    const [categorias, setCategorias] = useState([]);
    const [nomeProduto,setNomeProduto] = useState("");
    const [urlProduto,setUrlProduto] = useState("");
    const [descricaoProduto,setDescricaoProduto] = useState("");
    const [precoProduto,setPrecoProduto] = useState("");

    useEffect(() => {
      getCategorias();
    }, []);

    async function getCategorias() {
      const { data } = await Supabase.from("tb_categorias").select();
      setCategorias(data);
    }

    const handleEnviar = async () => {
      const { error } = await Supabase
        .from('tb_produto')
        .insert({ procodigo: 1, name: 'Denmark' })
    }

return (
  <div>
    <Menu
      titleCadastrar='cadastrar produto'
      titleRequests='pedidos'
      titleProducts='produtos'
    />
    
    <div className={styles.containerMetade}>
      <form action="" onSubmit={handleEnviar}>
        <input 
          type="text"
          placeholder='Nome do produto'
          value={nomeProduto} 
          onChange={(e)=>{
            setNomeProduto(e.target.value);
          }}
        />

        <input 
          type="text" 
          placeholder='Url da imagem do produto' 
          value={urlProduto}
          onChange={(e) => {
            setUrlProduto(e.target.value)
          }}  
        />

        <input 
          type="text" 
          placeholder='Descricao do produto' 
          value={descricaoProduto}
          onChange={(e)=>{
            setDescricaoProduto(e.target.value)
          }}
        />

        <input 
          type="number" 
          placeholder='Preço do produto' 
          onChange={(e)=>{
            setPrecoProduto(e.target.value)
          }}
        />

        <select name="" id="">
          {categorias.map((categoria) => (
            <option key={categoria.catcodigo} 
              value={categoria.catcodigo}>
              {categoria.catnome}
            </option>
          ))}
        </select>

        <input 
          type="submit" 
          value="Enviar" 
          onClick={handleEnviar}
        />
      </form>
    </div>
  </div>
);

}

export default Dashboard