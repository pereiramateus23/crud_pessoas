import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

// Configuração do Sequelize para conectar ao banco de dados MySQL
export const sequelize = new Sequelize( 
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  
  // Opções de conexão  
  {
    host: process.env.DB_HOST,  // Endereço do servidor de banco de dados 
    dialect: "mysql", 
    logging: false, 

  }
);
