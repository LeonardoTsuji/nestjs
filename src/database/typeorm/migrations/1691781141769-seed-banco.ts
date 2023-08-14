import { Banco } from 'src/app/conta/banco/banco.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedBanco1691781141769 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(Banco)
      .values([
        {
          codigo: '001',
          descricao: 'Banco do Brasil S.A.',
        },
        {
          codigo: '003',
          descricao: 'Banco da Amazonia S.A.',
        },
        {
          codigo: '004',
          descricao: 'Banco do Nordeste do Brasil S.A.',
        },
        {
          codigo: '007',
          descricao:
            'Banco Nacional de Desenvolvimento Economico e Social BNDES',
        },
        {
          codigo: '010',
          descricao: 'Credicoamo Credito Rural Cooperativa',
        },
        {
          codigo: '011',
          descricao: 'Credit Suisse Hedging-Griffo Corretora de Valores S.A.',
        },
        {
          codigo: '012',
          descricao: 'Banco Inbursa S.A.',
        },
        {
          codigo: '014',
          descricao: 'Natixis Brasil S.A. Banco Multiplo',
        },
        {
          codigo: '015',
          descricao:
            'UBS Brasil Corretora de Cambio, Titulos e Valores Mobiliarios S.A.',
        },
        {
          codigo: '016',
          descricao:
            'Coop de Cred. Mutuo dos Despachantes de Transito de SC e Rio Grande do Sul',
        },
        {
          codigo: '017',
          descricao: 'BNY Mellon Banco S.A.',
        },
        {
          codigo: '018',
          descricao: 'Banco Tricury S.A.',
        },
        {
          codigo: '021',
          descricao: 'Banestes S.A. Banco do Estado do Espirito Santo',
        },
        {
          codigo: '024',
          descricao: 'Banco Bandepe S.A.',
        },
        {
          codigo: '025',
          descricao: 'Banco Alfa S.A.',
        },
        {
          codigo: '029',
          descricao: 'Banco Itau Consignado S.A.',
        },
        {
          codigo: '033',
          descricao: 'Banco Santander (Brasil) S. A.',
        },
        {
          codigo: '036',
          descricao: 'Banco Bradesco BBI S.A.',
        },
        {
          codigo: '037',
          descricao: 'Banco do Estado do Para S.A.',
        },
        {
          codigo: '040',
          descricao: 'Banco Cargill S.A.',
        },
        {
          codigo: '041',
          descricao: 'Banco do Estado do Rio Grande do Sul S.A.',
        },
        {
          codigo: '047',
          descricao: 'Banco do Estado de Sergipe S.A.',
        },
        {
          codigo: '060',
          descricao: 'Confidence Corretora de Cambio S.A.',
        },
        {
          codigo: '062',
          descricao: 'Hipercard Banco Multiplo S.A.',
        },
        {
          codigo: '063',
          descricao: 'Banco Bradescard S.A.',
        },
        {
          codigo: '064',
          descricao: 'Goldman Sachs do Brasil  Banco Multiplo S. A.',
        },
        {
          codigo: '065',
          descricao: 'Banco AndBank (Brasil) S.A.',
        },
        {
          codigo: '066',
          descricao: 'Banco Morgan Stanley S. A.',
        },
        {
          codigo: '069',
          descricao: 'Banco Crefisa S.A.',
        },
        {
          codigo: '070',
          descricao: 'Banco de Brasilia S.A.',
        },
        {
          codigo: '074',
          descricao: 'Banco J. Safra S.A.',
        },
        {
          codigo: '075',
          descricao: 'Banco ABN Amro S.A.',
        },
        {
          codigo: '076',
          descricao: 'Banco KDB do Brasil S.A.',
        },
        {
          codigo: '077',
          descricao: 'Banco Inter S.A.',
        },
        {
          codigo: '078',
          descricao: 'Haitong Banco de Investimento do Brasil S.A.',
        },
        {
          codigo: '079',
          descricao: 'Banco Original do Agronegocio S.A.',
        },
        {
          codigo: '080',
          descricao: 'BT Corretora de Cambio Ltda.',
        },
        {
          codigo: '081',
          descricao: 'BBN Banco Brasileiro de Negocios S.A.',
        },
        {
          codigo: '082',
          descricao: 'Banco Topazio S.A.',
        },
        {
          codigo: '083',
          descricao: 'Banco da China Brasil S.A.',
        },
        {
          codigo: '084',
          descricao: 'Uniprime Norte do Parana - Cooperativa de Credito Ltda.',
        },
        {
          codigo: '085',
          descricao: 'Cooperativa Central de Credito Urbano - Cecred',
        },
        {
          codigo: '089',
          descricao: 'Cooperativa de Credito Rural da Regiao da Mogiana',
        },
        {
          codigo: '091',
          descricao:
            'Central de Cooperativas de Economia e Credito Mutuo do Est RS - Unicred',
        },
        {
          codigo: '092',
          descricao: 'BRK S.A. Credito, Financiamento e Investimento',
        },
        {
          codigo: '093',
          descricao:
            'Polocred Sociedade de Credito ao Microempreendedor e a Empresa de Pequeno Porte',
        },
        {
          codigo: '094',
          descricao: 'Banco Finaxis S.A.',
        },
        {
          codigo: '095',
          descricao: 'Banco Confidence de Cambio S.A.',
        },
        {
          codigo: '096',
          descricao:
            'Banco BMFBovespa de Servicos de Liquidacao e Custodia S/A',
        },
        {
          codigo: '097',
          descricao:
            'Cooperativa Central de Credito Noroeste Brasileiro Ltda - CentralCredi',
        },
        {
          codigo: '098',
          descricao: 'Credialianca Cooperativa de Credito Rural',
        },
        {
          codigo: '099',
          descricao:
            'Uniprime Central ? Central Interestadual de Cooperativas de Credito Ltda.',
        },
        {
          codigo: '100',
          descricao: 'Planner Corretora de Valores S.A.',
        },
        {
          codigo: '101',
          descricao:
            'Renascenca Distribuidora de Titulos e Valores Mobiliarios Ltda.',
        },
        {
          codigo: '102',
          descricao:
            'XP Investimentos Corretora de Cambio Titulos e Valores Mobiliarios S.A.',
        },
        {
          codigo: '104',
          descricao: 'Caixa Economica Federal',
        },
        {
          codigo: '105',
          descricao: 'Lecca Credito, Financiamento e Investimento S/A',
        },
        {
          codigo: '107',
          descricao: 'Banco Bocom BBM S.A.',
        },
        {
          codigo: '108',
          descricao: 'PortoCred S.A. Credito, Financiamento e Investimento',
        },
        {
          codigo: '111',
          descricao:
            'Oliveira Trust Distribuidora de Titulos e Valores Mobiliarios S.A.',
        },
        {
          codigo: '113',
          descricao: 'Magliano S.A. Corretora de Cambio e Valores Mobiliarios',
        },
        {
          codigo: '114',
          descricao:
            'Central Cooperativa de Credito no Estado do Espirito Santo - CECOOP',
        },
        {
          codigo: '117',
          descricao: 'Advanced Corretora de Cambio Ltda.',
        },
        {
          codigo: '118',
          descricao:
            'Standard Chartered Bank (Brasil) S.A. Banco de Investimento',
        },
        {
          codigo: '119',
          descricao: 'Banco Western Union do Brasil S.A.',
        },
        {
          codigo: '120',
          descricao: 'Banco Rodobens SA',
        },
        {
          codigo: '121',
          descricao: 'Banco Agibank S.A.',
        },
        {
          codigo: '122',
          descricao: 'Banco Bradesco BERJ S.A.',
        },
        {
          codigo: '124',
          descricao: 'Banco Woori Bank do Brasil S.A.',
        },
        {
          codigo: '125',
          descricao: 'Brasil Plural S.A. Banco Multiplo',
        },
        {
          codigo: '126',
          descricao: 'BR Partners Banco de Investimento S.A.',
        },
        {
          codigo: '127',
          descricao: 'Codepe Corretora de Valores e Cambio S.A.',
        },
        {
          codigo: '128',
          descricao: 'MS Bank S.A. Banco de Cambio',
        },
        {
          codigo: '129',
          descricao: 'UBS Brasil Banco de Investimento S.A.',
        },
        {
          codigo: '130',
          descricao:
            'Caruana S.A. Sociedade de Credito, Financiamento e Investimento',
        },
        {
          codigo: '131',
          descricao:
            'Tullett Prebon Brasil Corretora de Valores e Cambio Ltda.',
        },
        {
          codigo: '132',
          descricao: 'ICBC do Brasil Banco Multiplo S.A.',
        },
        {
          codigo: '133',
          descricao:
            'Confederacao Nacional das Cooperativas Centrais de Credito e Economia Familiar e',
        },
        {
          codigo: '134',
          descricao:
            'BGC Liquidez Distribuidora de Titulos e Valores Mobiliarios Ltda.',
        },
        {
          codigo: '135',
          descricao:
            'Gradual Corretora de Cambio, Titulos e Valores Mobiliarios S.A.',
        },
        {
          codigo: '136',
          descricao:
            'Confederacao Nacional das Cooperativas Centrais Unicred Ltda ? Unicred do Brasil',
        },
        {
          codigo: '137',
          descricao: 'Multimoney Corretora de Cambio Ltda',
        },
        {
          codigo: '138',
          descricao: 'Get Money Corretora de Cambio S.A.',
        },
        {
          codigo: '139',
          descricao: 'Intesa Sanpaolo Brasil S.A. - Banco Multiplo',
        },
        {
          codigo: '140',
          descricao: 'Easynvest - Titulo Corretora de Valores SA',
        },
        {
          codigo: '142',
          descricao: 'Broker Brasil Corretora de Cambio Ltda.',
        },
        {
          codigo: '143',
          descricao: 'Treviso Corretora de Cambio S.A.',
        },
        {
          codigo: '144',
          descricao: 'Bexs Banco de Cambio S.A.',
        },
        {
          codigo: '145',
          descricao: 'Levycam - Corretora de Cambio e Valores Ltda.',
        },
        {
          codigo: '146',
          descricao: 'Guitta Corretora de Cambio Ltda.',
        },
        {
          codigo: '149',
          descricao:
            'Facta Financeira S.A. - Credito Financiamento e Investimento',
        },
        {
          codigo: '157',
          descricao:
            'ICAP do Brasil Corretora de Titulos e Valores Mobiliarios Ltda.',
        },
        {
          codigo: '159',
          descricao:
            'Casa do Credito S.A. Sociedade de Credito ao Microempreendedor',
        },
        {
          codigo: '163',
          descricao: 'Commerzbank Brasil S.A. - Banco Multiplo',
        },
        {
          codigo: '169',
          descricao: 'Banco Ole Bonsucesso Consignado S.A.',
        },
        {
          codigo: '172',
          descricao: 'Albatross Corretora de Cambio e Valores S.A',
        },
        {
          codigo: '173',
          descricao:
            'BRL Trust Distribuidora de Titulos e Valores Mobiliarios S.A.',
        },
        {
          codigo: '174',
          descricao:
            'Pernambucanas Financiadora S.A. Credito, Financiamento e Investimento',
        },
        {
          codigo: '177',
          descricao: 'Guide Investimentos S.A. Corretora de Valores',
        },
        {
          codigo: '180',
          descricao:
            'CM Capital Markets Corretora de Cambio, Titulos e Valores Mobiliarios Ltda.',
        },
        {
          codigo: '182',
          descricao:
            'Dacasa Financeira S/A - Sociedade de Credito, Financiamento e Investimento',
        },
        {
          codigo: '183',
          descricao: 'Socred S.A. - Sociedade de Credito ao Microempreendedor',
        },
        {
          codigo: '184',
          descricao: 'Banco Itau BBA S.A.',
        },
        {
          codigo: '188',
          descricao:
            'Ativa Investimentos S.A. Corretora de Titulos Cambio e Valores',
        },
        {
          codigo: '189',
          descricao: 'HS Financeira S/A Credito, Financiamento e Investimentos',
        },
        {
          codigo: '190',
          descricao:
            'Cooperativa de Economia e Credito Mutuo dos Servidores Publicos Estaduais do Rio',
        },
        {
          codigo: '191',
          descricao:
            'Nova Futura Corretora de Titulos e Valores Mobiliarios Ltda.',
        },
        {
          codigo: '194',
          descricao:
            'Parmetal Distribuidora de Titulos e Valores Mobiliarios Ltda.',
        },
        {
          codigo: '196',
          descricao: 'Fair Corretora de Cambio S.A.',
        },
        {
          codigo: '197',
          descricao: 'Stone Pagamentos S.A.',
        },
        {
          codigo: '204',
          descricao: 'Banco Bradesco Cartoes S.A.',
        },
        {
          codigo: '208',
          descricao: 'Banco BTG Pactual S.A.',
        },
        {
          codigo: '212',
          descricao: 'Banco Original S.A.',
        },
        {
          codigo: '213',
          descricao: 'Banco Arbi S.A.',
        },
        {
          codigo: '217',
          descricao: 'Banco John Deere S.A.',
        },
        {
          codigo: '218',
          descricao: 'Banco BS2 S.A.',
        },
        {
          codigo: '222',
          descricao: 'Banco Credit Agricole Brasil S.A.',
        },
        {
          codigo: '224',
          descricao: 'Banco Fibra S.A.',
        },
        {
          codigo: '233',
          descricao: 'Banco Cifra S.A.',
        },
        {
          codigo: '237',
          descricao: 'Banco Bradesco S.A.',
        },
        {
          codigo: '241',
          descricao: 'Banco Classico S.A.',
        },
        {
          codigo: '243',
          descricao: 'Banco Maxima S.A.',
        },
        {
          codigo: '246',
          descricao: 'Banco ABC Brasil S.A.',
        },
        {
          codigo: '249',
          descricao: 'Banco Investcred Unibanco S.A.',
        },
        {
          codigo: '250',
          descricao: 'BCV - Banco de Credito e Varejo S/A',
        },
        {
          codigo: '253',
          descricao: 'Bexs Corretora de Cambio S/A',
        },
        {
          codigo: '254',
          descricao: 'Parana Banco S. A.',
        },
        {
          codigo: '260',
          descricao: 'Nu Pagamentos S.A.',
        },
        {
          codigo: '265',
          descricao: 'Banco Fator S.A.',
        },
        {
          codigo: '266',
          descricao: 'Banco Cedula S.A.',
        },
        {
          codigo: '268',
          descricao: 'Barigui Companhia Hipotecaria',
        },
        {
          codigo: '269',
          descricao: 'HSBC Brasil S.A. Banco de Investimento',
        },
        {
          codigo: '271',
          descricao:
            'IB Corretora de Cambio, Titulos e Valores Mobiliarios Ltda.',
        },
        {
          codigo: '300',
          descricao: 'Banco de la Nacion Argentina',
        },
        {
          codigo: '318',
          descricao: 'Banco BMG S.A.',
        },
        {
          codigo: '320',
          descricao: 'China Construction Bank (Brasil) Banco Multiplo S/A',
        },
        {
          codigo: '341',
          descricao: 'Itau Unibanco  S.A.',
        },
        {
          codigo: '366',
          descricao: 'Banco Societe Generale Brasil S.A.',
        },
        {
          codigo: '370',
          descricao: 'Banco Mizuho do Brasil S.A.',
        },
        {
          codigo: '376',
          descricao: 'Banco J. P. Morgan S. A.',
        },
        {
          codigo: '389',
          descricao: 'Banco Mercantil do Brasil S.A.',
        },
        {
          codigo: '394',
          descricao: 'Banco Bradesco Financiamentos S.A.',
        },
        {
          codigo: '399',
          descricao: 'Kirton Bank S.A. - Banco Multiplo',
        },
        {
          codigo: '412',
          descricao: 'Banco Capital S. A.',
        },
        {
          codigo: '422',
          descricao: 'Banco Safra S.A.',
        },
        {
          codigo: '456',
          descricao: 'Banco MUFG Brasil S.A.',
        },
        {
          codigo: '464',
          descricao: 'Banco Sumitomo Mitsui Brasileiro S.A.',
        },
        {
          codigo: '473',
          descricao: 'Banco Caixa Geral - Brasil S.A.',
        },
        {
          codigo: '477',
          descricao: 'Citibank N.A.',
        },
        {
          codigo: '479',
          descricao: 'Banco ItauBank S.A.',
        },
        {
          codigo: '487',
          descricao: 'Deutsche Bank S.A. - Banco Alemao',
        },
        {
          codigo: '488',
          descricao: 'JPMorgan Chase Bank, National Association',
        },
        {
          codigo: '492',
          descricao: 'ING Bank N.V.',
        },
        {
          codigo: '494',
          descricao: 'Banco de La Republica Oriental del Uruguay',
        },
        {
          codigo: '495',
          descricao: 'Banco de La Provincia de Buenos Aires',
        },
        {
          codigo: '505',
          descricao: 'Banco Credit Suisse (Brasil) S.A.',
        },
        {
          codigo: '545',
          descricao: 'Senso Corretora de Cambio e Valores Mobiliarios S.A.',
        },
        {
          codigo: '600',
          descricao: 'Banco Luso Brasileiro S.A.',
        },
        {
          codigo: '604',
          descricao: 'Banco Industrial do Brasil S.A.',
        },
        {
          codigo: '610',
          descricao: 'Banco VR S.A.',
        },
        {
          codigo: '611',
          descricao: 'Banco Paulista S.A.',
        },
        {
          codigo: '612',
          descricao: 'Banco Guanabara S.A.',
        },
        {
          codigo: '613',
          descricao: 'Omni Banco S.A.',
        },
        {
          codigo: '623',
          descricao: 'Banco Pan S.A.',
        },
        {
          codigo: '626',
          descricao: 'Banco Ficsa S. A.',
        },
        {
          codigo: '630',
          descricao: 'Banco Intercap S.A.',
        },
        {
          codigo: '633',
          descricao: 'Banco Rendimento S.A.',
        },
        {
          codigo: '634',
          descricao: 'Banco Triangulo S.A.',
        },
        {
          codigo: '637',
          descricao: 'Banco Sofisa S. A.',
        },
        {
          codigo: '641',
          descricao: 'Banco Alvorada S.A.',
        },
        {
          codigo: '643',
          descricao: 'Banco Pine S.A.',
        },
        {
          codigo: '652',
          descricao: 'Itau Unibanco Holding S.A.',
        },
        {
          codigo: '653',
          descricao: 'Banco Indusval S. A.',
        },
        {
          codigo: '654',
          descricao: 'Banco A. J. Renner S.A.',
        },
        {
          codigo: '655',
          descricao: 'Banco Votorantim S.A.',
        },
        {
          codigo: '707',
          descricao: 'Banco Daycoval S.A.',
        },
        {
          codigo: '712',
          descricao: 'Banco Ourinvest S.A.',
        },
        {
          codigo: '719',
          descricao: 'Banif - Bco Internacional do Funchal (Brasil) S.A.',
        },
        {
          codigo: '735',
          descricao: 'Banco Neon S.A.',
        },
        {
          codigo: '739',
          descricao: 'Banco Cetelem S.A.',
        },
        {
          codigo: '741',
          descricao: 'Banco Ribeirao Preto S.A.',
        },
        {
          codigo: '743',
          descricao: 'Banco Semear S.A.',
        },
        {
          codigo: '745',
          descricao: 'Banco Citibank S.A.',
        },
        {
          codigo: '746',
          descricao: 'Banco Modal S.A.',
        },
        {
          codigo: '747',
          descricao: 'Banco Rabobank International Brasil S.A.',
        },
        {
          codigo: '748',
          descricao: 'Banco Cooperativo Sicredi S. A.',
        },
        {
          codigo: '751',
          descricao: 'Scotiabank Brasil S.A. Banco Multiplo',
        },
        {
          codigo: '752',
          descricao: 'Banco BNP Paribas Brasil S.A.',
        },
        {
          codigo: '753',
          descricao: 'Novo Banco Continental S.A. - Banco Multiplo',
        },
        {
          codigo: '754',
          descricao: 'Banco Sistema S.A.',
        },
        {
          codigo: '755',
          descricao: 'Bank of America Merrill Lynch Banco Multiplo S.A.',
        },
        {
          codigo: '756',
          descricao: 'Banco Cooperativo do Brasil S/A - Bancoob',
        },
        {
          codigo: '757',
          descricao: 'Banco Keb Hana do Brasil S. A.',
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
