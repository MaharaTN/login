import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth, firestore } from '../../firebase';
import '../index.css';

class Cadastro extends Component {
  constructor(props){
      super(props);
      this.state = {
         email: "",
         senha: "",
         nome: "",
         sobrenome: "",
         nascimento: "",
         mensagemErro: ""
      }
      
      this.gravar = this.gravar.bind(this);
   }
  
   async gravar(){
      await auth.createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then(async (retorno) => {
         await firestore.collection("usuario").doc(retorno.user.uid).set({
           email: this.state.email,
           senha: this.state.senha,
           nome: this.state.nome,
           sobrenome: this.state.sobrenome,
           nascimento: this.state.nascimento       
         })
         window.location.href = "./login";
      })
      .catch((error) => {  
         this.setState({ mensagemErro: 'Email já cadastrado!'});
      });
   }


   render(){
      return (
         <div className="form">
            <h1>Cadastro de Usuário</h1>
            <label>
               Email: <input type="email" onChange={(e) => this.setState({email:e.target.value})} />
            </label>
            <label>
               Senha: <input type="password" onChange={(e) => this.setState({senha:e.target.value})} />
            </label>
            <label>
               Nome: <input type="text" onChange={(e) => this.setState({nome:e.target.value})} />
            </label>
            <label>
               Sobrenome: <input type="text" onChange={(e) => this.setState({sobrenome:e.target.value})} />
            </label>
            <label>
               Dt. Nascimento: <input type="date" onChange={(e) => this.setState({nascimento:e.target.value})} />
            </label>
            <button onClick={this.gravar}>Entrar</button>
            <p>{this.state.mensagemErro}</p>
         </div>  
      )
   }
}

export default Cadastro;
