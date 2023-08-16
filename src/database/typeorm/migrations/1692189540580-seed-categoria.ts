import { Categoria } from 'src/app/categoria/categoria.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedCategoria1692189540580 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Categoria)
      .values([
        {
          codigo: 'BARES',
          descricao: 'Bares',
          cor: '626491',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'ROUPAS',
          descricao: 'Roupas',
          cor: 'ff8258',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'DIVIDAS_E_EMPRESTIMOS',
          descricao: 'Dívidas e empréstimos',
          cor: 'ff6c6c',
          essencial: true,
          tipo: 'DESPESA',
        },
        {
          codigo: 'INVESTIMENTOS',
          descricao: 'Investimentos',
          cor: '24B38A',
          essencial: false,
          tipo: 'RECEITA',
        },
        {
          codigo: 'EDUCACAO',
          descricao: 'Educação',
          cor: '6470ba',
          essencial: true,
          tipo: 'DESPESA',
        },
        {
          codigo: 'LAZER_E_HOBBIES',
          descricao: 'Lazer e hobbies',
          cor: 'b8e64c',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'FAMILIA_E_FILHOS',
          descricao: 'Família e filhos',
          cor: 'a6e88b',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'ALIMENTACAO',
          descricao: 'Alimentação',
          cor: 'e274a8',
          essencial: true,
          tipo: 'DESPESA',
        },
        {
          codigo: 'PRESENTES_E_DOACOES',
          descricao: 'Presentes e doações',
          cor: '6b6fff',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'MERCADO',
          descricao: 'Mercado',
          cor: 'ff8a72',
          essencial: true,
          tipo: 'DESPESA',
        },
        {
          codigo: 'SAUDE',
          descricao: 'Saúde',
          cor: '72b4ff',
          essencial: true,
          tipo: 'DESPESA',
        },
        {
          codigo: 'CASA',
          descricao: 'Casa',
          cor: '8193ff',
          essencial: true,
          tipo: 'DESPESA',
        },
        {
          codigo: 'INVESTIMENTOS',
          descricao: 'Investimentos',
          cor: 'ff70a1',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'PAGAMENTO_DE_FATURA',
          descricao: 'Pagamento de fatura',
          cor: 'b3b3b3',
          essencial: false,
          tipo: 'none',
        },
        {
          codigo: 'EMPRESTIMOS',
          descricao: 'Empréstimos',
          cor: '27C498',
          essencial: false,
          tipo: 'RECEITA',
        },
        {
          codigo: 'OUTROS',
          descricao: 'Outros',
          cor: 'b3b3b3',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'OUTRAS_RECEITAS',
          descricao: 'Outras receitas',
          cor: '2BDCA9',
          essencial: false,
          tipo: 'RECEITA',
        },
        {
          codigo: 'CUIDADOS_sPESSOAIS',
          descricao: 'Cuidados pessoais',
          cor: 'ff676d',
          essencial: true,
          tipo: 'DESPESA',
        },
        {
          codigo: 'PETS',
          descricao: 'Pets',
          cor: 'ffbe57',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'SALARIO',
          descricao: 'Salário',
          cor: '2EE8B3',
          essencial: false,
          tipo: 'RECEITA',
        },
        {
          codigo: 'COMPRAS',
          descricao: 'Compras',
          cor: 'f67cff',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'ASSINATURAS_E_SERVICOS',
          descricao: 'Assinaturas e serviços',
          cor: 'c671e4',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'IMPOSTOS_E_TAXAS',
          descricao: 'Impostos e taxas',
          cor: 'ff977c',
          essencial: true,
          tipo: 'DESPESA',
        },
        {
          codigo: 'TRANSFERENCIAS',
          descricao: 'Transferências',
          cor: 'b3b3b3',
          essencial: false,
          tipo: 'none',
        },
        {
          codigo: 'TRANSPORTE',
          descricao: 'Transporte',
          cor: '51bcff',
          essencial: true,
          tipo: 'DESPESA',
        },
        {
          codigo: 'VIAGEM',
          descricao: 'Viagem',
          cor: 'ff6b6b',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'TRABALHO',
          descricao: 'Trabalho',
          cor: '446ff5',
          essencial: true,
          tipo: 'DESPESA',
        },
        {
          codigo: 'FUTEBOL',
          descricao: 'Futebol',
          cor: '86bb5d',
          essencial: false,
          tipo: 'DESPESA',
        },
        {
          codigo: 'RENDIMENTOS',
          descricao: 'Rendimentos',
          cor: '94cd7a',
          essencial: false,
          tipo: 'RECEITA',
        },
        {
          codigo: 'FERIAS',
          descricao: 'Férias',
          cor: '86bb5d',
          essencial: false,
          tipo: 'RECEITA',
        },
        {
          codigo: 'VENDAS',
          descricao: 'Vendas',
          cor: '86bb5d',
          essencial: false,
          tipo: 'RECEITA',
        },
        {
          codigo: 'COMPRAS',
          descricao: 'Compras',
          cor: '8193ff',
          essencial: true,
          tipo: 'DESPESA',
        },
        {
          codigo: 'PRESENTE',
          descricao: 'Presente',
          cor: '86bb5d',
          essencial: false,
          tipo: 'RECEITA',
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
