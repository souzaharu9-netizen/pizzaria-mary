import React, {useState, useEffect} from "react"

import { Link } from "react-router-dom"

import MenuFuncinario from '../MenuFuncionario/MenuFuncionario'
import api from "../../services/api"

 
const ListarProduto = () => {
 
  // useState: É um hook do react que serve para armazenar e controlar o estado de uma variável
  // composição => const [ nome da variável, nome da função para alterar o valor da variável] = useState(valor inicial da variável)
  // OBS: SEMPRE o nome da função começa com "set"
  // EXEMPLO: Quero declarar uma variável número cujo valor inicie com 0
  // const [numero, setNumero] = (0)

  // useEffect: É um hook que serve para executar códigos que ficam fora do controle direto da renderização visual, os chamados 
  // "efeitos colaterias." Exemplo: buscar dados em uma API, configurar cronômetros, fazer algo quando usuário aperta uma tecla
  // composição => useEffect (função que será executada, [quando esse valor é alterado a função é chamada novamente])
  // OBS: [] manter vazio, quando você quiser que o seu código rode exatamente uma única vez, geralmente ao carregar a página


  const [produtos, setProdutos] = useState([])

  useEffect (()=>{
    api
    .get("/produtos")
    .then((response)=>{
      //deu certo :)
      //console.log(response.data.data)
      setProdutos(response.data.data)

    })
    .catch((error)=>{
      //deu ruim :(
      console.error("Erro ao buscar a lista de produtos. " + error)

    })

  }, [])
 
  /*
    const arrayProdutos = [

        {
            id: 1,
            nome: "Pizza de Calabresa",
            precoVenda: 54.90,
            descricao: "Pizza de Calabresa com Cebola e Azeitona sem Caroço."
        },

        {
            id: 2,
            nome: "Pizza de Muçarela",
            precoVenda: 34.90,
            descricao: "Pizza de Queijo Muçarela com Molho de tomate e orégano."
        },

        {
            id: 3,
            nome: "Pizza de Marguerita",
            precoVenda: 34.90,
            descricao: "Pizza de Marguerita com Molho de Tomate, Queijo Muçarela, Rodelas de Tomate e Manjericão Fresco."
        },

        {
            id: 4,
            nome: "Pizza de Portuguesa",
            precoVenda: 34.90,
            descricao: "Pizza de Portuguesa com Presunto, Ovos, Cebola, Azeitona, Ervilha, Queijo e Tomate."
        },



        {
            id: 5,
            nome: "Pizza de Frango com Catupiry",
            precoVenda: 34.90,
            descricao: "Pizza de Frango Desfiado Temperado Coberto pelo Cremoso Requeijão Catupiry."
        },



        {
            id: 6,
            nome: "Pizza de Quatro Queijos",
            precoVenda: 34.90,
            descricao: "Uma Combinação Geralmente de Muçarela, Provolone, Parmesão e Gorgonzola (ou Catupiry)."
        },



        {
            id: 7,
            nome: "Pizza de Chocolate com Morango",
            precoVenda: 34.90,
            descricao: "Pizza de Chocolate com Morango com Brigadeiro ou Creme de Chocolate com Morangos Frescos Fatiados."
        },
    ]
    */
 
    return (
 
       <div className='container'>
            <MenuFuncinario/>
           
           <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-success">
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Descrição</th>
              <th>Ações</th> {/* Nova coluna de Ações */}
            </tr>
          </thead>
          <tbody>
         
          { produtos.map((produto) => (
                   <tr key={produto.id}>
                <td style={{ fontSize: "13px" }}>{produto.nome}</td>
                <td style={{ fontSize: "13px" }}>
                    {
                        new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(produto.precoVenda)
                    }
                </td>
                <td style={{ fontSize: "13px" }}>{produto.descricao}</td>
                <td className="text-center fs-6" style={{ width: "100px" }}>
                  {/* Botão de Editar */}
                  <button
                    className="btn btn-sm btn-primary me-2">
                    <i className="fas fa-pencil-alt"></i>{" "}
                    {/* Ícone de editar */}
                  </button>
 
                  {/* Botão de Excluir */}
                  <button
                    className="btn btn-sm btn-danger">
                    <i className="fas fa-trash-alt"></i>{" "}
                    {/* Ícone de excluir */}
                  </button>
                </td>
              </tr>
 
            ) ) }
             
          </tbody>
        </table>
      </div>
      
      <div className="text-end mt-3">
        <Link
        to="/produtos/novo"
        className={"btn bt-success"}
        >
        <i className="fas fa-plus"></i>
            Novo Produto
          </Link>

      </div>
      
                 
        </div>
    )
}
export default ListarProduto