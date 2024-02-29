import { createClient } from "@supabase/supabase-js";
import { Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import LoginAdm from "./pages/LoginAdm";
import CarrinhoDeCompra from "./pages/CarrinhoDeCompra";
import Pedidos from "./pages/Pedidos";
import Produtos from './pages/Produtos';

function App() {
    return (
      <div>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/dashboard/pedidos" element={<Pedidos/>} />
            <Route path="/dashboard/produtos" element={<Produtos/>} />
            <Route path="/loginAdm" element={<LoginAdm/>} />
            <Route path="/carrinho" element={<CarrinhoDeCompra/>} />
        </Routes> 
      </div>
      
    );
  }

  export default App;