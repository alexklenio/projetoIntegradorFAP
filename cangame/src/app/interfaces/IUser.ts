
interface IUser {
  id?: number;
  email: string;
  password: string;
  nivelAcesso: string;
  dataCadastro: Date;
  
  // Adicione o método checkPassword à interface
  checkPassword(candidatePassword: string): Promise<boolean>;
}

export default IUser;
