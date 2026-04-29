export default function FormFeirante({ navegar }) {
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    
    alert('Feirante guardado com sucesso!');
    navegar('listaFeirante');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <div className="form-group">
        <label>Nome do Feirante *</label>
        <input 
          type="text" 
          required 
          placeholder="Digite o nome completo ou nome da banca" 
        />
      </div>

      <div className="form-group">
        <label>CPF ou CNPJ *</label>
        <input 
          type="text" 
          required 
          placeholder="000.000.000-00 ou 00.000.000/0000-00" 
        />
      </div>

      <div className="form-group">
        <label>E-mail *</label>
        <input 
          type="email" 
          required 
          placeholder="exemplo@email.com" 
        />
      </div>

      <div className="form-group">
        <label>Localização da Banca</label>
        <input 
          type="text" 
          placeholder="Ex: Corredor A, Banca 12" 
        />
      </div>

      <button type="submit" className="btn btn-success">
        Guardar Feirante
      </button>
    </form>
  );
}