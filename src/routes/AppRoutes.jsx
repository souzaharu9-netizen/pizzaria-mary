import{
    HashRouter,
    BrowserRouter,
    Routes,
    Route
}
from "react-router-dom"
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pages/ListarProduto/ListarProduto"


// BrowserRouter: Utilize coma tag<a> com href => Sempre recarrega a página
// HashRouter: Utilize com a tag <Link> do react-router-dom => Carrega apenas as partes necessárias da página, RECOMENDADO

const AppRoutes = () =>{

    return (
                <HashRouter>
                     <Routes>

                            <Route
                             path="/"
                             element={<HomeFuncionario/>}
                            />

                            <Route
                             path="/home"
                             element={<HomeFuncionario/>}
                            />


                            <Route
                             path="/produtos"
                             element={<ListarProduto/>}
                            />

                     </Routes>
                
                </HashRouter>

    )
}
export default AppRoutes