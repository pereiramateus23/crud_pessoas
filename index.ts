import app from "./app";

const PORT = process.env.PORT || 3000; // Define porta doservidor
app.listen(PORT, () => { //Inicia o servidor*/
  console.log(` Servidor rodando na porta ${PORT}`);  
});
