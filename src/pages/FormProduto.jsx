export default function FormProduto({ navegar, feirante }) {
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    navegar('listaProduto', feirante);
  };

  return (
    <div>
      <div className="page-header">
        <h2>Cadastrar Produto</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Feirante Responsável</label>
            <input type="text" className="form-control" value={feirante?.nome || ''} disabled />
          </div>
        </div>

        <div className="form-grid two-cols" style={{marginTop: '24px'}}>
          <div className="form-group">
            <label>Nome do Produto *</label>
            <input type="text" className="form-control" required placeholder="Ex: Maçã Gala" />
          </div>

          <div className="form-group">
            <label>Preço (R$) *</label>
            <input type="number" step="0.01" min="0.01" className="form-control" required placeholder="0.00" />
          </div>

          <div className="form-group">
            <label>Estoque Atual *</label>
            <input type="number" min="1" className="form-control" required placeholder="Quantidade" />
          </div>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" id="xepa" />
          <label htmlFor="xepa">
            <strong>Ativar "Xepa Digital"</strong> - Enviar notificação de desconto para este produto no fim da feira.
          </label>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={() => navegar('listaProduto', feirante)}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary">
            Salvar Produto
          </button>
        </div>
      </form>
    </div>
  );
}