//import React from "react";

function PreviewNome() {
  const [nome, setNome] = React.useState("");

  return (
    <div className="alert alert-info text-center">
      <h5>Pré-visualização</h5>
      {nome ? (
        <p>Oba, <strong>{nome}</strong> Seja bem-vindo(a)</p>
      ) : (
        <p>Digite seu nome no formulário para ver aqui...</p>
      )}
      <input className="form-control mt-3" type="text" placeholder="Teste de nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
    </div>
  );
}  
    const rootPreview = ReactDOM.createRoot(document.getElementById("preview")); 
    rootPreview.render(<PreviewNome />);
    //
function App() {
  const [enviado, setEnviado] = React.useState(false);

  React.useEffect(() => {
    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", (event) => {
      event.preventDefault(); // impede envio real
      event.stopPropagation(); // impede propagação do evento
        
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
      } else {
        form.classList.remove("was-validated");
        setEnviado(true);
        // limpa o formulário
        form.reset();
        // some depois de alguns segundos
        setTimeout(() => setEnviado(false), 4000);
      }
    });
  }, []);
  
  return (
    <>
      {enviado && (
        <div className="alert alert-success text-center">
          Cadastro realizado com sucesso! <br />
          Os dados foram enviados com sucesso.
        </div>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("mensagemSucesso"));
root.render(<App />);
