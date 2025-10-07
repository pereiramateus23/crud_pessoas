import express from "express";
import pessoaRoutes from "./routes/pessoaRoutes";
import { sequelize } from "./config/database";

const app = express();
app.use(express.json());     

// Rotas
app.use("/pessoas", pessoaRoutes);

// Sincronizar tabelas
sequelize.sync(); 

export default app; 
