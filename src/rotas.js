import { BrowserRouter, Route } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Principal from './pages/Principal';

const Rotas = () => {
   return (
      <BrowserRouter>
	    <Route exact path="/" element={Cadastro} />
	    <Route path="/Login" element={Login} />
	    <Route path="/Principal" element={Principal} />
      </BrowserRouter>
   )
}

export default Rotas;
