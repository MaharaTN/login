import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Principal from './pages/Principal';

const Rotas = () => {
   return (
      <BrowserRouter>
         <Routes>
	    <Route exact path="/" element={<Cadastro/>} />
	    <Route path="/Login" element={<Login/>} />
	    <Route path="/principal" element={<Principal/>} />
	</Routes>
      </BrowserRouter>
   )
}

export default Rotas;
