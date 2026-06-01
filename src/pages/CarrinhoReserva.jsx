import { feirantesMock } from '../mocks/db';

export default function CarrinhoReserva({ navegar, produto }) {
  
  if (!produto) return null;

  const feirante = feirantesMock.find(f => f.id === produto.feirante_id);

  const handleConfirmar = () => {
    alert(`Reserva confirmada! Código de retirada: #${Math.floor(Math.random() * 10000)}.\nApresente este código na banca: ${feirante.nome}.`);
    navegar('vitrine');
  };

  return (
    <div>
      <div className="page-header">
        <h2>🛒 Confirmar Reserva</h2>
        <button className="btn btn-secondary" onClick={() => navegar('vitrine')}>Voltar</button>
      </div>

      <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3 style={{ marginBottom: '24px', borderBottom: '1px solid #e5e7eb', paddingBottom: '16px' }}>
          Resumo do Pedido
        </h3>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <span style={{ fontWeight: '500' }}>1x {produto.nome}</span>
          <span>R$ {produto.preco.toFixed(2)}</span>
        </div>

        <div style={{ color: '#6b7280', fontSize: '14px', marginBottom: '32px' }}>
          <p><strong>Retirada em:</strong> {feirante?.nome}</p>
          <p><strong>Local:</strong> {feirante?.localizacao_banca}</p>
        </div>

        <div className="form-group" style={{ marginBottom: '24px' }}>
          <label>Forma de Pagamento</label>
          <select className="form-control">
            <option>Pagar na Retirada (Dinheiro/Cartão)</option>
            <option>Pix (In-App)</option>
          </select>
        </div>

        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '18px', fontWeight: '600' }}>Total:</span>
          <span style={{ fontSize: '24px', fontWeight: '700', color: '#10b981' }}>R$ {produto.preco.toFixed(2)}</span>
        </div>

        <button 
          className="btn btn-primary" 
          style={{ width: '100%', marginTop: '24px', padding: '16px', fontSize: '16px' }}
          onClick={handleConfirmar}
        >
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
}