
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import bcrypt from 'bcrypt';
import IUser from '../interfaces/IUser';

@Entity()
class User implements IUser {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    nivelAcesso: string;

    @Column({ type: 'timestamp' })
    dataCadastro: Date;

    // Método construtor
    constructor(email: string, password: string, nivelAcesso: string, dataCadastro: Date) {
        this.email = email;
        this.password = password;
        this.nivelAcesso = nivelAcesso;
        this.dataCadastro = dataCadastro;
    }

    // Getters
    getId(): number | undefined {
        return this.id;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

    getNivelAcesso(): string {
        return this.nivelAcesso;
    }

    getDataCadastro(): Date {
        return this.dataCadastro;
    }

    // Setters
    setEmail(email: string): void {
        this.email = email;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    setNivelAcesso(nivelAcesso: string): void {
        this.nivelAcesso = nivelAcesso;
    }

    setDataCadastro(dataCadastro: Date): void {
        this.dataCadastro = dataCadastro;
    }

    // Método para criptografar a senha antes de salvar
    async hashPassword(): Promise<void> {
        this.password = await bcrypt.hash(this.password, 10); // 10 é o número de rounds de hashing
    }

    // Método para verificar a senha
    async checkPassword(candidatePassword: string): Promise<boolean> {
        return bcrypt.compare(candidatePassword, this.password);
    }
}

export default User;
