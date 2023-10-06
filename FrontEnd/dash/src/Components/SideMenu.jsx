import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import '../Styles/SideMenu.css'
    
  
  const SideMenu = ()=>{
      return(
          
   

          <div>
    <input type="checkbox" id="check" checked></input>
    <label for="check">
      <i class="fas fa-bars" id="btn" style={{display: 'none'}}></i>
      <i class="fas fa-times" id="cancel" style={{display: 'none'}}> </i>
    </label>   
    <div class="sidebar">
      <header>Grupo 003</header>
      <Link to="/" class="active">
        <i class="fas fa-chart-bar"></i>
        <span>Dashboard</span>
      </Link>
      <Link to="/mesatual">
        <i class="fas fa-calendar"></i>
        <span>Mês Atual</span>
      </Link>
        
      <Link to="/temperatura">
        <i class="fas fa-plug"></i>
        <span>Consumo Total</span>
      </Link>
      <Link to="/todosacionamentos">
         <i class="fas fa-calendar"></i>
        <span>Acionamentos</span>
      </Link>
      <Link to="/sobrenos">
        <i class="far fa-question-circle"></i>
        <span>Sobre o Projeto</span>
      </Link>
      <Link to="/servicos">
        <i class="fas fa-sliders-h"></i>
        <span>Serviços</span>
      </Link>
      <Link to="/contato">
        <i class="far fa-envelope"></i>
        <span>Contato</span>
      </Link>
    </div>

</div>

          
        
      )
  }
              
export default SideMenu;              