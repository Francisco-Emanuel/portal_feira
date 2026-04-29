import { useState } from 'react';
import { feirantesMock } from '../mocks/db';

export default function ListaFeirante({ navegar }) {
  const [feirantes, setFeirantes] = useState(feirantesMock);

  const handleExcluir = (id) => {
    if(window.confirm('Excluir este feirante?')) {
      setFeirantes(feirantes.filter(f => f.id !== id));
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>Feirantes Parceiros</h2>
        <button className="btn btn-primary" onClick={() => navegar('formFeirante')}>
          + Novo Feirante
        </button>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome da Banca</th>
              <th>Documento</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {feirantes.map((feirante) => (
              <tr key={feirante.id}>
                <td style={{color: '#6b7280'}}>#{feirante.id}</td>
                <td style={{fontWeight: '500'}}>{feirante.nome}</td>
                <td>{feirante.cpf_cnpj}</td>
                <td>{feirante.email}</td>
                <td>
                  <div className="actions">
                    <button className="btn btn-secondary" onClick={() => navegar('listaProduto', feirante)}>
                      Produtos
                    </button>
                    <button className="btn btn-danger" onClick={() => handleExcluir(feirante.id)}>
                      Remover
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}