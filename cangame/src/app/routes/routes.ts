import { Request, Response, Router } from "express";
import { createUser, loginUser , getUsers, getUserById, deleteUser, updateUser, getProfile } from '../controllers/UserController';
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
import { createEndereco, deleteEndereco, getEnderecoById, getEnderecos, updateEndereco } from "../controllers/EnderecoController";


const routers = Router();

// Rotas do Cadastro e Consultas dos Usuários
routers.get('/users', authenticationMiddleware, getUsers);
routers.get('/user/:id', getUserById);
routers.post('/user', authenticationMiddleware, createUser);
routers.put('/user/:id', authenticationMiddleware, updateUser);
routers.delete('/user/:id', authenticationMiddleware, deleteUser);

//Rota para fazer o Login do Usuário
routers.post('/login', loginUser);


//Rotas do Cadastro e Consultas de Endereço
routers.get('/enderecos', authenticationMiddleware, getEnderecos);
routers.get('/endereco/:id', authenticationMiddleware, getEnderecoById);
routers.post('/endereco', authenticationMiddleware, createEndereco);
routers.put('/endereco/:id', authenticationMiddleware, updateEndereco);
routers.delete('/endereco/:id', authenticationMiddleware, deleteEndereco);



export default routers;


