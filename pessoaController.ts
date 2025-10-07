import { Request, Response } from "express";
import { Op } from "sequelize";
import { Pessoa } from "../models/Pessoa";

  
export const criarPessoa = async (req: Request, res: Response) => { 
  try { 
    const pessoa = await Pessoa.create(req.body);  
    res.status(201).json(pessoa); // Retorna a pessoa criada com status 201    
  } catch (error) { 
    res.status(400).json({ error });  
  }
};

 // Listar pessoas com filtros opcionais
export const listarPessoas = async (req: Request, res: Response) => { 
  try { 
    const { nome, cpf } = req.query;  // Filtros opcionais
    const where: any = {};  // Objeto para filtros dinâmicos

    if (nome) { 
      where.nome = { [Op.like]: `%${nome}%` }; // like para busca parcial
    }
    if (cpf) {
      where.cpf = cpf; // busca exata
    }
    // Busca pessoas com filtros aplicados
    const pessoas = await Pessoa.findAll({ where }); // Aplica filtros se existirem 
    res.json(pessoas);  
  } catch (error) { 
    res.status(500).json({ error });
  }
};
    // Atualizar pessoa por ID  
export const atualizarPessoa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;  // ID da pessoa a ser atualizada
    await Pessoa.update(req.body, { where: { id } }); // Atualiza pessoa pelo ID
    res.json({ message: "Pessoa atualizada" }); 
  } catch (error) {
    res.status(400).json({ error });
  }
};
  
export const deletarPessoa = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Pessoa.destroy({ where: { id } });
    res.json({ message: "Pessoa deletada" });
  } catch (error) {
    res.status(400).json({ error });
  }
};
