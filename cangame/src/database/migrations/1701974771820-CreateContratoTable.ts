import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreateContratoTable1701898179260 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'contrato',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                    },
                    {
                        name: 'logotipo',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'qtdLicencas',
                        type: 'int',
                    },
                    {
                        name: 'licencasUtilizadas',
                        type: 'int',
                    },
                    {
                        name: 'dataAquisicao',
                        type: 'timestamp',
                    },
                    {
                        name: 'dataExpiracao',
                        type: 'timestamp',
                    },
                    {
                        name: 'status',
                        type: 'boolean',
                    },
                    {
                        name: 'enderecoId',
                        type: 'int',
                    },
                ],
            }), true);
    
            // Adição da chave estrangeira para endereco
        await queryRunner.createForeignKey('contrato', new TableForeignKey({
            columnNames: ['enderecoId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'endereco',
            onDelete: 'CASCADE',
        }));

        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contrato');
    }
}
