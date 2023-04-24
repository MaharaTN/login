import { BrowserRouter, Route } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Principal from './pages/Principal';

const Rotas = () => {
   return (
      <BrowserRouter>
	    <Route exact path="/" component={Cadastro} />
	    <Route path="/Login" component={Login} />
	    <Route path="/Principal" component={Principal} />
      </BrowserRouter>
   )
}

export default Rotas;
