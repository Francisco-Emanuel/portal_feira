import { useState } from 'react';
import './App.css';
import ListaFeirante from './pages/ListaFeirante';
import FormFeirante from './pages/FormFeirante';
import ListaProduto from './pages/ListaProduto';
import FormProduto from './pages/FormProduto';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('listaFeirante');
  const [feiranteSelecionado, setFeiranteSelecionado] = useState(null);

  const navegar = (tela, dados = null) => {
    if (dados) setFeiranteSelecionado(dados);
    setTelaAtual(tela);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Portal da <span>Feira</span></h1>
      </header>
      
      <main className="card">
        {telaAtual === 'listaFeirante' && <ListaFeirante navegar={navegar} />}
        {telaAtual === 'formFeirante' && <FormFeirante navegar={navegar} />}
        
        {telaAtual === 'listaProduto' && (
          <ListaProduto navegar={navegar} feirante={feiranteSelecionado} />
        )}
        {telaAtual === 'formProduto' && (
          <FormProduto navegar={navegar} feirante={feiranteSelecionado} />
        )}
      </main>
    </div>
  );
}