import { Router } from "express";
import { criarPessoa, listarPessoas, atualizarPessoa, deletarPessoa } from "../controllers/pessoaController";

const router = Router();

router.post("/", criarPessoa);  
router.get("/", listarPessoas); 
router.put("/:id", atualizarPessoa); 
router.delete("/:id", deletarPessoa); 

export default router;
