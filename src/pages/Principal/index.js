import React, { Component } from 'react';
import { auth, firestore } from '../../firebase';
import '../index.css';

class Principal extends Component {
   constructor(props){
      super(props);
      this.state = {
         nome: "",
         sobrenome: "",
         nascimento: ""
      }
   }

   async componentDidMount(){
      await auth.onAuthStateChanged(async (usuario) => {
         if (usuario) {
            var uid = usuario.uid;
            
            await firestore.collection("usuario").doc(uid).get()
            .then((retorno)=>{
               this.setState({
                  nome: retorno.data().nome,
		  sobrenome: retorno.data().sobrenome,
		  nascimento: retorno.data().nascimento
		});
	    });
	 }
      });
   }

   render(){
      return (
         <div className="principal">
            <h1>Seja bem-vindo, { this.state.nome } { this.state.sobrenome }!</h1>
            <p>Data de nascimento: { this.state.nascimento }</p>
         </div> 
      )
   }
}

export default Principal;
