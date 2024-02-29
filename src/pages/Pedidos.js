import React, { useEffect, useState } from 'react';
import Menu from './../components/Menu';
import styles from './../css/App.module.css';
import { FaSearch } from 'react-icons/fa';
import { Supabase } from '../supabase/Supabase.config';

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [campoPesquisa, setCampoPesquisa] = useState(0);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    // Corrija o nome da tabela para "tb_pedidos"
    const { data, error } = await Supabase.from('tb_pedidos').select();

    if (error) {
      console.error('Erro ao buscar dados:', error);
    } else {
      // Atualize o estado com os dados obtidos
      setPedidos(data);
    }
  }

  const handleDelete = async (pedido) => {
    const { error } = await Supabase.from('tb_pedidos').delete().eq('pedcodigo', pedido.pedcodigo);
    getCountries();
  }

  const pesquisar = async () => {
    // Corrija o nome da tabela para "tb_pedidos"
    const { data, error } = await Supabase.from('tb_pedidos').select();
    if(campoPesquisa == ""){
      getCountries();
    }

    const ped = data.filter((pedido) => {
        if(parseInt(pedido.pedcodigo) == parseInt(campoPesquisa)){
          return pedido;
        }
    });
    setPedidos(ped);
  }

  return (
    <div>
      <Menu titleRequests='pedidos' titleProducts='produtos' titleCadastrar='cadastrar produto' />
      <div className={styles.containerMetade}>
        <div className={styles.pesquisa}>
          <div className={styles.pes}>
            <FaSearch />
            <input 
              type="text" 
              placeholder='Código do pedido' 
              onChange={(e) => {
                setCampoPesquisa(e.target.value)
              }}  
            />
            <button
              onClick={pesquisar}
            >Buscar</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Imagem</th>
              <th>Preco</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.pedcodigo}>
                <td>{pedido.pedcodigo}</td>
                <td><img src={pedido.prourl} alt="" srcSet="" /></td>
                <td>{pedido.propreco}</td>
                <td>{pedido.pedstatus}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(pedido);
                    }}
                  >
                    Deletar
                  </button>
                </td>
                {/* Adicione outras colunas conforme necessário */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pedidos;

