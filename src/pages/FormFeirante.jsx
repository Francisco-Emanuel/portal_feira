export default function FormFeirante({ navegar }) {
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    navegar('listaFeirante');
  };

  return (
    <div>
      <div className="page-header">
        <h2>Cadastrar Feirante</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid two-cols">
          <div className="form-group">
            <label>Nome do Feirante / Banca *</label>
            <input type="text" className="form-control" required placeholder="Ex: Barraca do João" />
          </div>

          <div className="form-group">
            <label>CPF ou CNPJ *</label>
            <input type="text" className="form-control" required placeholder="000.000.000-00" />
          </div>

          <div className="form-group">
            <label>E-mail *</label>
            <input type="email" className="form-control" required placeholder="contato@exemplo.com" />
          </div>

          <div className="form-group">
            <label>Localização (Corredor/Vaga)</label>
            <input type="text" className="form-control" placeholder="Ex: Setor Verde, Vaga 12" />
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={() => navegar('listaFeirante')}>
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary">
            Salvar Feirante
          </button>
        </div>
      </form>
    </div>
  );
}