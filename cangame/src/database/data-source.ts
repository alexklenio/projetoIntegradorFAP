import "reflect-metadata"
import { DataSource } from "typeorm"
import {CreateUsersTable1701898179260 } from './migrations/1701898179260-CreateUsersTable'
import {  CreateGestorTable1702035423371 } from './migrations/1702035423371-CreateGestorTable'
import { CreateEnderecoTable1702385543443 } from "./migrations/1702385543443-CreateEnderecoTable"
import { CreateContratoTable1701898179260} from './migrations/1701974771820-CreateContratoTable'
import { CreateTelefoneTable1702385558636 } from "./migrations/1702385558636-CreateTelefoneTable"
import User  from '../app/entities/User'
import Endereco from "../app/entities/Endereco"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "moy.h.filess.io",
    port: 3307,
    username: "CgBD_adjective",
    password: "38e25298813eb466430a2da86d72bab09bf404b2",
    database: "CgBD_adjective",
    synchronize: true,
    logging: false,
    entities: [User, Endereco],
    migrations: [
        CreateUsersTable1701898179260, 
        CreateEnderecoTable1702385543443, 
        CreateTelefoneTable1702385558636,
        CreateContratoTable1701898179260,
        CreateGestorTable1702035423371, 
],
    subscribers: [],
})
