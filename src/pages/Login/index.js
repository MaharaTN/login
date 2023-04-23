import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import '../index.css';

class Login extends Component {
  constructor(props){
      super(props);
      this.state = {
         email: "",
         senha: "",
         mensagemErro: ""
      }
      
      this.acessar = this.acessar.bind(this);
   }
  
   async acessar(){
      await auth.signInWithEmailAndPassword(this.state.email, this.state.senha)
     .then(() => {
        window.location.href = "./principal";
     })
     .catch((error) => {  
        this.setState({ mensagemErro: 'Usuário e/ou Senha incorretos! Verifique se o usuário informado está cadastrado.'});
     });
   }


   render(){
      return (
         <div className="form">
            <h1>Login</h1>
            <label>
               Email: <input type="email" onChange={(e) => this.setState({email:e.target.value})} />
            </label>
            <label>
     	       Senha: <input type="password" onChange={(e) => this.setState({senha:e.target.value})} />
            </label>
            <button onClick={this.acessar}>Entrar</button>
            <p>{this.state.mensagemErro}</p>
         </div> 
      )
   }
}

export default Login;

