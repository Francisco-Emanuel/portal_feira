import { useState } from 'react';
import { feirantesMock } from '../mocks/db';

export default function ListaFeirante({ navegar }) {
  const [feirantes, setFeirantes] = useState(feirantesMock);

  const handleExcluir = (id) => {
    if(window.confirm('Tem a certeza que deseja excluir este feirante?')) {
      setFeirantes(feirantes.filter(f => f.id !== id));
    }
  };

  return (
    <div>
      <table className="tabela-simples">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF/CNPJ</th>
            <th>E-mail</th>
            <th>Localização</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {feirantes.map((feirante) => (
            <tr key={feirante.id}>
              <td>{feirante.id}</td>
              <td>{feirante.nome}</td>
              <td>{feirante.cpf_cnpj}</td>
              <td>{feirante.email}</td>
              <td>{feirante.localizacao_banca}</td>
              <td>
                <button 
                  className="btn btn-primary" 
                  onClick={() => navegar('listaProduto', feirante)}
                >
                  Ver Produtos
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => handleExcluir(feirante.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
          {feirantes.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>Nenhum feirante registado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}