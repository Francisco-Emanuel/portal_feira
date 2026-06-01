import { useState } from 'react';
import { produtosMock, feirantesMock } from '../mocks/db';

export default function VitrineConsumidor({ navegar }) {
  const [busca, setBusca] = useState('');
  
  // Filtra apenas os produtos que estão marcados como Xepa
  const produtosXepa = produtosMock.filter(p => p.disponivel_xepa);

  return (
    <div>
      <div className="page-header">
        <h2>🛍️ Mercado e Feiras Próximas</h2>
        <button className="btn btn-secondary" onClick={() => navegar('listaFeirante')}>
          Área do Feirante
        </button>
      </div>

      {/* Barra de Pesquisa */}
      <div className="form-group" style={{ marginBottom: '32px' }}>
        <input 
          type="text" 
          className="form-control" 
          placeholder="O que procura hoje? (ex: Tomate, Cenoura...)"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{ padding: '16px', fontSize: '16px' }}
        />
      </div>

      {/* Destaque Xepa Digital */}
      <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #34d399', borderRadius: '8px', padding: '24px', marginBottom: '32px' }}>
        <h3 style={{ color: '#065f46', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          ♻️ Ofertas da Xepa Digital
        </h3>
        <p style={{ color: '#047857', marginBottom: '24px' }}>
          Salve estes alimentos do desperdício e garanta os melhores descontos!
        </p>
        
        <div className="form-grid two-cols">
          {produtosXepa.map(produto => {
            const feirante = feirantesMock.find(f => f.id === produto.feirante_id);
            return (
              <div key={produto.id} className="card" style={{ padding: '20px', border: '2px solid #10b981' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <h4 style={{ fontSize: '18px', fontWeight: '600' }}>{produto.nome}</h4>
                  <span className="badge badge-success">Xepa!</span>
                </div>
                <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '8px' }}>📍 Banca: {feirante?.nome}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                  <span style={{ fontSize: '20px', fontWeight: '700', color: '#111827' }}>
                    R$ {produto.preco.toFixed(2)}
                  </span>
                  <button 
                    className="btn btn-primary"
                    onClick={() => navegar('carrinho', produto)}
                  >
                    Reservar
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}