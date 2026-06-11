
import MenuFuncionario from '../MenuFuncionario/MenuFuncionario'

const ListarProduto = () => {

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

    return (
    

        <div className='container'>

            <MenuFuncionario/>
            <p>Lista de Produtos</p>

        </div>
    )
}

export default ListarProduto