import { useState } from 'react';
import { produtosMock } from '../mocks/db';

export default function ListaProduto({ navegar, feirante }) {
  const produtosDoFeirante = produtosMock.filter(
    (produto) => produto.feirante_id === feirante?.id
  );

  const [produtos, setProdutos] = useState(produtosDoFeirante);

  const handleExcluir = (id) => {
    if(window.confirm('Tem a certeza que deseja excluir este produto?')) {
      setProdutos(produtos.filter(p => p.id !== id));
    }
  };

  return (
    <div>
      <table className="tabela-simples">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Produto</th>
            <th>Preço (R$)</th>
            <th>Quantidade</th>
            <th>Xepa?</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco.toFixed(2)}</td>
              <td>{produto.quantidade}</td>
              <td>{produto.disponivel_xepa ? '✅ Sim' : '❌ Não'}</td>
              <td>
                <button 
                  className="btn btn-danger"
                  onClick={() => handleExcluir(produto.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
          {produtos.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>
                Nenhum produto registado para este feirante.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}