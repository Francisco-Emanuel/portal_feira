import { useState } from 'react';
import { produtosMock } from '../mocks/db';

export default function ListaProduto({ navegar, feirante }) {
  const produtosDoFeirante = produtosMock.filter(p => p.feirante_id === feirante?.id);
  const [produtos, setProdutos] = useState(produtosDoFeirante);

  const handleExcluir = (id) => {
    if(window.confirm('Excluir este produto?')) setProdutos(produtos.filter(p => p.id !== id));
  };

  return (
    <div>
      <div className="page-header">
        <h2>Produtos: {feirante?.nome}</h2>
        <div className="actions">
          <button className="btn btn-secondary" onClick={() => navegar('listaFeirante')}>Voltar</button>
          <button className="btn btn-primary" onClick={() => navegar('formProduto', feirante)}>
            + Novo Produto
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th>Status Xepa</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td style={{fontWeight: '500'}}>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2)}</td>
                <td>{produto.quantidade} un.</td>
                <td>
                  {produto.disponivel_xepa 
                    ? <span className="badge badge-success">Ativo na Xepa</span>
                    : <span className="badge badge-error">Indisponível</span>}
                </td>
                <td>
                  <div className="actions">
                    <button className="btn btn-danger" onClick={() => handleExcluir(produto.id)}>Excluir</button>
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