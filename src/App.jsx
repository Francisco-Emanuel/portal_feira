import { useState } from 'react';
import './App.css';

import ListaFeirante from './pages/ListaFeirante';
import FormFeirante from './pages/FormFeirante';
import ListaProduto from './pages/ListaProduto';
import FormProduto from './pages/FormProduto';

function App() {
  const [telaAtual, setTelaAtual] = useState('listaFeirante');
  const [feiranteSelecionado, setFeiranteSelecionado] = useState(null);

  const navegar = (tela, dados = null) => {
    if (dados) setFeiranteSelecionado(dados);
    setTelaAtual(tela);
  };

  return (
    <div className="container">
      <h1>Portal da Feira</h1>
      <hr />
      
      {/* Roteamento por Estado */}
      {telaAtual === 'listaFeirante' && (
        <div>
          <h2>Lista de Feirantes</h2>
          <button className="btn btn-success" onClick={() => navegar('formFeirante')}>+ Novo Feirante</button>
          { <ListaFeirante navegar={navegar} /> }
        </div>
      )}

      {telaAtual === 'formFeirante' && (
        <div>
          <h2>Cadastro de Feirante</h2>
          <button className="btn btn-primary" onClick={() => navegar('listaFeirante')}>Voltar</button>
          { <FormFeirante navegar={navegar} /> }
        </div>
      )}

      {telaAtual === 'listaProduto' && (
        <div>
          <h2>Produtos do Feirante ID: {feiranteSelecionado?.id}</h2>
          <button className="btn btn-primary" onClick={() => navegar('listaFeirante')}>Voltar para Feirantes</button>
          <button className="btn btn-success" onClick={() => navegar('formProduto')}>+ Novo Produto</button>
          { <ListaProduto navegar={navegar} feirante={feiranteSelecionado} /> }
        </div>
      )}

      {telaAtual === 'formProduto' && (
        <div>
          <h2>Cadastro de Produto</h2>
          <button className="btn btn-primary" onClick={() => navegar('listaProduto')}>Voltar</button>
          { <FormProduto navegar={navegar} feirante={feiranteSelecionado} /> }
        </div>
      )}
    </div>
  );
}

export default App;