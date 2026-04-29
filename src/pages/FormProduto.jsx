export default function FormProduto({ navegar, feirante }) {
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    alert(`Produto guardado com sucesso para o feirante: ${feirante.nome}!`);
    
    navegar('listaProduto', feirante);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      
      <div className="form-group">
        <label>Feirante Vinculado</label>
        <input 
          type="text" 
          value={feirante?.nome || ''} 
          disabled 
          style={{ backgroundColor: '#e9ecef', color: '#666' }}
        />
      </div>

      <div className="form-group">
        <label>Nome do Produto *</label>
        <input 
          type="text" 
          required 
          placeholder="Ex: Tomate Cereja Orgânico" 
        />
      </div>

      <div className="form-group">
        <label>Preço (R$) *</label>
        <input 
          type="number" 
          step="0.01"
          min="0.01"
          required 
          placeholder="0.00" 
        />
      </div>

      <div className="form-group">
        <label>Quantidade em Estoque *</label>
        <input 
          type="number" 
          min="1"
          required 
          placeholder="Ex: 50" 
        />
      </div>

      <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input 
          type="checkbox" 
          id="xepa"
          style={{ width: 'auto' }} 
        />
        <label htmlFor="xepa" style={{ margin: 0, cursor: 'pointer' }}>
          Disponível na Xepa Digital (Desconto de Fim de Feira)?
        </label>
      </div>

      <button type="submit" className="btn btn-success" style={{ marginTop: '20px' }}>
        Guardar Produto
      </button>
    </form>
  );
}