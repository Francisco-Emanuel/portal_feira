import { useState } from 'react';
import './App.css';
import ListaFeirante from './pages/ListaFeirante';
import FormFeirante from './pages/FormFeirante';
import ListaProduto from './pages/ListaProduto';
import FormProduto from './pages/FormProduto';
import VitrineConsumidor from './pages/VitrineConsumidor';
import CarrinhoReserva from './pages/CarrinhoReserva';
import DashboardFeirante from './pages/DashboardFeirante';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('vitrine');
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
        {telaAtual === 'vitrine' && <VitrineConsumidor navegar={navegar} />}
        {telaAtual === 'carrinho' && <CarrinhoReserva navegar={navegar} produto={feiranteSelecionado} />}
        {telaAtual === 'dashboard' && <DashboardFeirante navegar={navegar} feirante={feiranteSelecionado} />}
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