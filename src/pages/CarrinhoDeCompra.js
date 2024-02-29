import React, { useEffect, useState } from 'react';
import { Supabase } from '../supabase/Supabase.config';
import styles from '../css/App.module.css';

function CarrinhoDeCompra() {
    const [cliente, setCliente] = useState(0);
    const [carrinhoCompra, setCarrinhoCompra] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [subCalculo, setSubCalculo] = useState(0);

    useEffect(() => {
        getProdutos();
        getPedidos();
    }, []);

    async function getPedidos() {
        const { data } = await Supabase.from("tb_pedidos").select();
        let calculo = 0;
        data.map((pedido)=>{
            if(pedido.pedstatus == "Pendente"){
              calculo = pedido.propreco + subCalculo;  
            }
            
        })
        setSubCalculo(calculo);
        setCarrinhoCompra(data);
    }

    async function getProdutos() {
        const { data } = await Supabase.from("tb_produtos").select();
        setProdutos(data);
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const codigo = urlParams.get("cliente");
        setCliente(codigo);
    }, []); // Add empty dependency array to ensure it runs only once on mount

    const handleComparar = async (produto) => {
        const { error } = await Supabase.from('tb_pedidos')
            .insert({
                procodigo: produto.procodigo,
                prourl: produto.proimagem,
                propreco: produto.propreco,
                usuclicodigo: cliente,
                pedstatus: "Pendente"
            });
        getPedidos();

        let calculo = subCalculo + produto.propreco;
        setSubCalculo(calculo);
    };

    const enviarCompra = async () => {
        for (const product of carrinhoCompra) {
            const { error } = await Supabase
                .from('tb_pedidos')
                .update({ pedstatus: 'Vendido' })
                .eq('pedcodigo', product.pedcodigo); // Corrigindo para 'prodcodigo'
        }
        getPedidos();
    }
    

    const handleDelete = () => {

    }
    
    return (
        <div className={styles.container}>
            <div className={styles.containerProdutos}>
                {produtos.map((cli) => (
                    <div className={styles.cardProduto} key={cli.procodigo}>
                        <strong>{cli.pronome}</strong>
                        <img src={cli.proimagem} alt="" />
                        <p>{cli.propreco}</p>
                        <button onClick={() => { handleComparar(cli) }}>
                            Comprar
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.containerCarrinho}>
            {carrinhoCompra.map((produtoComprado) => {
                // Verifique se o status é "Pendente" antes de renderizar o card
                if (produtoComprado.pedstatus == "Pendente") {
                    return (
                        <div key={produtoComprado.procodigo} className={styles.cardRation}>
                            <img src={produtoComprado.prourl} alt="" srcSet="" />
                            <p>{produtoComprado.propreco}</p>
                            <button
                                onClick={ () => {
                                    handleDelete(produtoComprado)
                                }}
                            >
                                Deletar
                            </button>
                        </div>
                    );
                } else {
                    // Se não estiver pendente, retorne null ou adicione outra lógica desejada
                    return null;
                }
            })}

                
                <div className={styles.subCalculo}>
                    R$ <p>{subCalculo}</p>
                </div>
                <button 
                    className={styles.enviar}
                    onClick={enviarCompra}
                
                >Enviar</button>
            </div>
        </div>
    );
}

export default CarrinhoDeCompra;
