
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"
import CredentialUser from "../../componentes/CredentialUser"


const ListarCategoria = () => {

    return(
        <div className="container">

            <MenuFuncionario/>
            <CredentialUser title="Lista de Categorias"/>

            <p>Lista de Categorias dos Produtos</p>


        </div>
    )
}

export default ListarCategoria