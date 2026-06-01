export default function DashboardFeirante({ navegar, feirante }) {
  
  return (
    <div>
      <div className="page-header">
        <h2>📊 Painel de Desempenho - {feirante?.nome || 'Minha Banca'}</h2>
        <button className="btn btn-secondary" onClick={() => navegar('listaFeirante')}>Voltar</button>
      </div>

      {/* Cartões de Indicadores (KPIs) */}
      <div className="form-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
        <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
          <h4 style={{ color: '#6b7280', fontSize: '14px', textTransform: 'uppercase' }}>Vendas Hoje</h4>
          <p style={{ fontSize: '36px', fontWeight: '700', color: '#111827', margin: '10px 0' }}>R$ 458,50</p>
          <span style={{ color: '#10b981', fontSize: '14px', fontWeight: '500' }}>↑ 12% em relação a ontem</span>
        </div>

        <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
          <h4 style={{ color: '#6b7280', fontSize: '14px', textTransform: 'uppercase' }}>Desperdício Evitado (Xepa)</h4>
          <p style={{ fontSize: '36px', fontWeight: '700', color: '#10b981', margin: '10px 0' }}>15 kg</p>
          <span style={{ color: '#6b7280', fontSize: '14px' }}>Alimentos salvos esta semana</span>
        </div>

        <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
          <h4 style={{ color: '#6b7280', fontSize: '14px', textTransform: 'uppercase' }}>Reservas Pendentes</h4>
          <p style={{ fontSize: '36px', fontWeight: '700', color: '#f59e0b', margin: '10px 0' }}>8</p>
          <span style={{ color: '#6b7280', fontSize: '14px' }}>Aguardando retirada</span>
        </div>
      </div>

      {/* Gráfico Simulado */}
      <div className="card">
        <h3 style={{ marginBottom: '20px' }}>Produtos Mais Vendidos</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Cenoura Orgânica</span>
              <span style={{ fontWeight: '600' }}>45 un.</span>
            </div>
            <div style={{ width: '100%', backgroundColor: '#f3f4f6', borderRadius: '999px', height: '12px' }}>
              <div style={{ width: '85%', backgroundColor: '#10b981', height: '100%', borderRadius: '999px' }}></div>
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Maçã Gala (Xepa)</span>
              <span style={{ fontWeight: '600' }}>32 un.</span>
            </div>
            <div style={{ width: '100%', backgroundColor: '#f3f4f6', borderRadius: '999px', height: '12px' }}>
              <div style={{ width: '60%', backgroundColor: '#10b981', height: '100%', borderRadius: '999px' }}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}