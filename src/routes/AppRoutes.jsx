import{
    HashRouter,
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"
import ListarProduto from "../pages/ListarProduto/ListarProduto"
<<<<<<< HEAD
=======


// BrowserRouter: Utilize coma tag<a> com href => Sempre recarrega a página
// HashRouter: Utilize com a tag <Link> do react-router-dom => Carrega apenas as partes necessárias da página, RECOMENDADO
>>>>>>> 6b766f68d13d5bfa284a0422a3f8b8142f14f038

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

<<<<<<< HEAD
=======

>>>>>>> 6b766f68d13d5bfa284a0422a3f8b8142f14f038
                            <Route
                             path="/produtos"
                             element={<ListarProduto/>}
                            />

                     </Routes>
                
                </HashRouter>

    )
}
export default AppRoutes