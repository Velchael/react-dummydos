import './componentes/Cardanimais.css';
import React from 'react';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Cep from "./componentes/Cep";
import Lojanimal from "./componentes/Lojanimal";
import Cadastro from "./componentes/Cadastro";
import Meupedido from "./componentes/Meupedido";
import Apresentação from './componentes/Apresentação';
import Serviços from './componentes/Serviços';
import './App.css';
import logo from './logo.svg';
import Condicional from './componentes/Condicional';
function App() {
     
  return(

    

    <BrowserRouter basename="/react-dummydos">
           
      <div className='centralizar'>
        <ul>
          <div className="um">
           <header className="App-header">
            <l1><Link to="/"><img src={logo} className="App-logo" alt="logo" />🐾🐾</Link></l1>
            <p>PetsTOTI</p>      
            <div className='imputcab'><input type="text"placeholder="      Digite o Producto 🔍"  /></div>             
            <ol className="lidos">
			       <li className="liuno"><a className="atres"href="/componentes/Condicional">Cadastro</a></li>
			       <li className="liuno" ><a className="atres"href="#top">Carro 🛒</a></li>
			       <li className="liuno"><a className="atres"href="#top">Mapa 🚀</a></li>
		        </ol>   
           </header>
          </div>
          <l1 className="liuno"><Link to="/componentes/Apresentação"className="atres"style={{ textDecoration: 'none' }}> Inicio </Link></l1>
          <l1 className="liuno"><Link to="/componentes/Cep"className="atres"style={{ textDecoration: 'none' }}>  Cachorros  </Link></l1>
          <l1 className="liuno"><Link to="/componentes/Cadastro"className="atres"style={{ textDecoration: 'none' }}> Gatos </Link></l1>      
          <l1 className="liuno"><Link to="/componentes/Lojanimal"className="atres"style={{ textDecoration: 'none' }}> Outros_Petz </Link></l1>    
          <l1 className="liuno"><Link to="/componentes/Meupedido"className="atres"style={{ textDecoration: 'none' }}>  Productos </Link></l1> 
          <l1 className="liuno"><Link to="/componentes/Serviços"className="atres"style={{ textDecoration: 'none' }}> Serviços </Link></l1>      
          <l1 className="liuno"><Link to="/componentes/Condicional"className="atres"style={{ textDecoration: 'none' }}>  Cadastro </Link></l1>
        </ul>
      </div>
    
      <Routes>

        <Route exact path="/componentes/react-dummydos"element={<Apresentação />}/>

        <Route path="/componentes/Cep"element={<Cep />}/>
        
        <Route path="/componentes/Lojanimal"element={<Lojanimal />}/>

        <Route path="/componentes/Cadastro"element={<Cadastro />}/>

        <Route path="/componentes/Meupedido"element={<Meupedido />}/>

        <Route path="/componentes/Serviços"element={<Serviços />}/>

        <Route path="/componentes/Condicional"element={<Condicional />}/>
  
      </Routes>
      
    </BrowserRouter>



    );


    
}



export default App;
