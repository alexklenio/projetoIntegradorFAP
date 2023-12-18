import Endereco from '../entities/Endereco';
import { AppDataSource } from '../../database/data-source';
import IEndereco from '../interfaces/IEndereco';

interface EnderecoInterface {
    UF: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    comp: string;
    cep: string;
  }
const EnderecoRepository = AppDataSource.getRepository(Endereco);

const createEndereco = async (enderecoData: EnderecoInterface): Promise<Endereco> => {
    // Crie uma nova instância de Endereco usando os dados fornecidos
    const newEndereco = EnderecoRepository.create(enderecoData);

    // Salve a instância no banco de dados ou realize outras operações necessárias
    const savedEndereco = await EnderecoRepository.save(newEndereco);

    // Retorne a instância real de Endereco
    return savedEndereco;
};

const getEnderecos = (): Promise<EnderecoInterface[]> => {
    return EnderecoRepository.find() as Promise<EnderecoInterface[]>;
};

const getEnderecoById = async (enderecoId: number): Promise<EnderecoInterface | undefined> => {
    const endereco = await EnderecoRepository.findOne({ where: { id: enderecoId } });

    // Se o Endereco não for encontrado, retorne undefined
    return endereco || undefined;
};


const deleteEndereco = async (enderecoId: number): Promise<boolean> => {
    const deleteResult = await EnderecoRepository.delete(enderecoId);
    return deleteResult.affected === 1;
};

const updateEndereco = async (enderecoId: number, enderecoData: Partial<EnderecoInterface>): Promise<EnderecoInterface | undefined> => {
    let endereco = await EnderecoRepository.findOne ({ where: { id: enderecoId } });
   

    if (!endereco) {
        return undefined;
    }

    // Atualize os campos necessários
    endereco.cep = enderecoData.cep || endereco.cep;
    endereco.rua = enderecoData.rua || endereco.rua;
    endereco.numero = enderecoData.numero || endereco.numero;
    endereco.comp = enderecoData.comp || endereco.comp;
    endereco.bairro = enderecoData.bairro || endereco.bairro;
    endereco.cidade = enderecoData.cidade || endereco.cidade;
    endereco.UF = enderecoData.UF || endereco.UF;



    // Atualize o Endereco no banco de dados
    endereco = await EnderecoRepository.save(endereco);

    return endereco;
};

export default { createEndereco, getEnderecos, getEnderecoById, deleteEndereco, updateEndereco }