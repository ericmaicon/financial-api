import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const stocks = [
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'ANDEAVOR',
    code: 'ANDV'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'CHESAPEAKE',
    code: 'CHKE'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'CHEVRON',
    code: 'CHVX'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'COPHILLIPS',
    code: 'COPH'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'COSAN',
    code: 'CSAN'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'DOMMO',
    code: 'DMMO'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'EXXON MOBIL',
    code: 'EXXO'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'OGX PETROLEO',
    code: 'OGXP'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'PET MANGUINH',
    code: 'RPMG'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'PETROBRAS',
    code: 'PETR'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'PETROBRAS BR',
    code: 'BRDT'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'PETRORIO',
    code: 'PRIO'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'QGEP PART',
    code: 'QGEP'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'SANCHEZ ENER',
    code: 'SANC'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'ULTRAPAR',
    code: 'UGPA'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Exploração, Refino e Distribuição',
    company: 'VALERO ENER',
    code: 'VLOE'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Equipamentos e Serviços',
    company: 'HALLIBURTON',
    code: 'HALI'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Equipamentos e Serviços',
    company: 'LUPATECH',
    code: 'LUPA'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Equipamentos e Serviços',
    company: 'OSX BRASIL',
    code: 'OSXB'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Equipamentos e Serviços',
    company: 'SCHLUMBERGER',
    code: 'SLBG'
  },
  {
    sector: 'Petróleo, Gás e Biocombustíveis',
    sub_sector: 'Petróleo, Gás e Biocombustíveis',
    company_segment: 'Equipamentos e Serviços',
    company: 'TRANSOCEAN',
    code: 'RIGG'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Mineração',
    company_segment: 'Minerais Metálicos',
    company: 'BRADESPAR',
    code: 'BRAP'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Mineração',
    company_segment: 'Minerais Metálicos',
    company: 'FREEPORT',
    code: 'FCXO'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Mineração',
    company_segment: 'Minerais Metálicos',
    company: 'LITEL',
    code: 'LTEL'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Mineração',
    company_segment: 'Minerais Metálicos',
    company: 'MMX MINER',
    code: 'MMXM'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Mineração',
    company_segment: 'Minerais Metálicos',
    company: 'VALE',
    code: 'VALE'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Siderurgia',
    company: 'ARCELOR',
    code: 'ARMT'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Siderurgia',
    company: 'FERBASA',
    code: 'FESA'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Siderurgia',
    company: 'GERDAU',
    code: 'GGBR'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Siderurgia',
    company: 'GERDAU MET',
    code: 'GOAU'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Siderurgia',
    company: 'SID NACIONAL',
    code: 'CSNA'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Siderurgia',
    company: 'US STEEL',
    code: 'USSX'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Siderurgia',
    company: 'USIMINAS',
    code: 'USIM'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Artefatos de Ferro e Aço',
    company: 'FIBAM',
    code: 'FBMC'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Artefatos de Ferro e Aço',
    company: 'MANGELS INDL',
    code: 'MGEL'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Artefatos de Ferro e Aço',
    company: 'PANATLANTICA',
    code: 'PATI'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Artefatos de Ferro e Aço',
    company: 'TEKNO',
    code: 'TKNO'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Siderurgia e Metalurgia',
    company_segment: 'Artefatos de Cobre',
    company: 'PARANAPANEMA',
    code: 'PMAM'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Químicos',
    company_segment: 'Petroquímicos',
    company: 'BRASKEM',
    code: 'BRKM'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Químicos',
    company_segment: 'Petroquímicos',
    company: 'DOW CHEMICAL',
    code: 'DOWB'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Químicos',
    company_segment: 'Petroquímicos',
    company: 'ELEKEIROZ',
    code: 'ELEK'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Químicos',
    company_segment: 'Petroquímicos',
    company: 'GPC PART',
    code: 'GPCP'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Químicos',
    company_segment: 'Fertilizantes e Defensivos',
    company: 'FER HERINGER',
    code: 'FHER'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Químicos',
    company_segment: 'Fertilizantes e Defensivos',
    company: 'MOSAIC CO',
    code: 'MOSC'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Químicos',
    company_segment: 'Fertilizantes e Defensivos',
    company: 'NUTRIPLANT',
    code: 'NUTR'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Químicos',
    company_segment: 'Químicos Diversos',
    company: 'CRISTAL',
    code: 'CRPG'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Químicos',
    company_segment: 'Químicos Diversos',
    company: 'E I DU PONT',
    code: 'DUPO'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Químicos',
    company_segment: 'Químicos Diversos',
    company: 'UNIPAR',
    code: 'UNIP'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Madeira e Papel',
    company_segment: 'Madeira',
    company: 'DURATEX',
    code: 'DTEX'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Madeira e Papel',
    company_segment: 'Madeira',
    company: 'EUCATEX',
    code: 'EUCA'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Madeira e Papel',
    company_segment: 'Papel e Celulose',
    company: 'CELUL IRANI',
    code: 'RANI'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Madeira e Papel',
    company_segment: 'Papel e Celulose',
    company: 'FIBRIA',
    code: 'FIBR'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Madeira e Papel',
    company_segment: 'Papel e Celulose',
    company: 'KLABIN S/A',
    code: 'KLBN'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Madeira e Papel',
    company_segment: 'Papel e Celulose',
    company: 'MELHOR SP',
    code: 'MSPA'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Madeira e Papel',
    company_segment: 'Papel e Celulose',
    company: 'SANTHER',
    code: 'STTZ'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Madeira e Papel',
    company_segment: 'Papel e Celulose',
    company: 'SUZANO HOLD',
    code: 'NEMO'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Madeira e Papel',
    company_segment: 'Papel e Celulose',
    company: 'SUZANO PAPEL',
    code: 'SUZB'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Embalagens',
    company_segment: 'Embalagens',
    company: 'METAL IGUACU',
    code: 'MTIG'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Materiais Diversos',
    company_segment: 'Materiais Diversos',
    company: 'MAGNESITA SA',
    code: 'MAGG'
  },
  {
    sector: 'Materiais Básicos',
    sub_sector: 'Materiais Diversos',
    company_segment: 'Materiais Diversos',
    company: 'SANSUY',
    code: 'SNSY'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Construção e Engenharia',
    company_segment: 'Produtos para Construção',
    company: 'ETERNIT',
    code: 'ETER'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Construção e Engenharia',
    company_segment: 'Produtos para Construção',
    company: 'HAGA S/A',
    code: 'HAGA'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Construção e Engenharia',
    company_segment: 'Produtos para Construção',
    company: 'PORTOBELLO',
    code: 'PTBL'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Construção e Engenharia',
    company_segment: 'Construção Pesada',
    company: 'AZEVEDO',
    code: 'AZEV'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Construção e Engenharia',
    company_segment: 'Construção Pesada',
    company: 'MENDES JR',
    code: 'MEND'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Construção e Engenharia',
    company_segment: 'Engenharia Consultiva',
    company: 'SONDOTECNICA',
    code: 'SOND'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Construção e Engenharia',
    company_segment: 'Engenharia Consultiva',
    company: 'TECNOSOLO',
    code: 'TCNO'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Construção e Engenharia',
    company_segment: 'Serviços Diversos',
    company: 'MILLS',
    code: 'MILS'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Aeronáutico e de Defesa',
    company: 'BOEING',
    code: 'BOEI'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Aeronáutico e de Defesa',
    company: 'EMBRAER',
    code: 'EMBR'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Aeronáutico e de Defesa',
    company: 'GEN DYNAMICS',
    code: 'GDBR'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Aeronáutico e de Defesa',
    company: 'LOCKHEED',
    code: 'LMTB'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Aeronáutico e de Defesa',
    company: 'UNITED TECH',
    code: 'UTEC'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Rodoviário',
    company: 'FRAS-LE',
    code: 'FRAS'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Rodoviário',
    company: 'MARCOPOLO',
    code: 'POMO'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Rodoviário',
    company: 'RANDON PART',
    code: 'RAPT'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Rodoviário',
    company: 'RECRUSUL',
    code: 'RCSL'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Rodoviário',
    company: 'RIOSULENSE',
    code: 'RSUL'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Rodoviário',
    company: 'TUPY',
    code: 'TUPY'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Material de Transporte',
    company_segment: 'Material Rodoviário',
    company: 'WETZEL S/A',
    code: 'MWET'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Equipamentos Elétricos',
    company_segment: 'Equipamentos Elétricos',
    company: 'FIRST SOLAR',
    code: 'FSLR'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Motores, Compressores e Outros',
    company: 'SCHULZ',
    code: 'SHUL'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Motores, Compressores e Outros',
    company: 'WEG',
    code: 'WEGE'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Máq. e Equip. Industriais',
    company: 'ACO ALTONA',
    code: 'EALT'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Máq. e Equip. Industriais',
    company: 'BARDELLA',
    code: 'BDLL'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Máq. e Equip. Industriais',
    company: 'INDS ROMI',
    code: 'ROMI'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Máq. e Equip. Industriais',
    company: 'INEPAR',
    code: 'INEP'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Máq. e Equip. Industriais',
    company: 'KEPLER WEBER',
    code: 'KEPL'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Máq. e Equip. Industriais',
    company: 'METALFRIO',
    code: 'FRIO'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Máq. e Equip. Industriais',
    company: 'NORDON MET',
    code: 'NORD'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Máq. e Equip. Industriais',
    company: 'PRATICA',
    code: 'PTCA'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Máq. e Equip. Construção e Agrícolas',
    company: 'CATERPILLAR',
    code: 'CATP'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Máq. e Equip. Construção e Agrícolas',
    company: 'METISA',
    code: 'MTSA'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Máq. e Equip. Construção e Agrícolas',
    company: 'STARA',
    code: 'STTR'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Máquinas e Equipamentos',
    company_segment: 'Armas e Munições',
    company: 'FORJA TAURUS',
    code: 'FJTA'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Aéreo',
    company: 'AMERICAN AIR',
    code: 'AALL'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Aéreo',
    company: 'AZUL',
    code: 'AZUL'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Aéreo',
    company: 'DELTA',
    code: 'DEAI'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Aéreo',
    company: 'GOL',
    code: 'GOLL'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Ferroviário',
    company: 'ALL NORTE',
    code: 'FRRN'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Ferroviário',
    company: 'ALL PAULISTA',
    code: 'GASC'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Ferroviário',
    company: 'COSAN LOG',
    code: 'RLOG'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Ferroviário',
    company: 'FER C ATLANT',
    code: 'VSPT'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Ferroviário',
    company: 'MRS LOGIST',
    code: 'MRSA'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Ferroviário',
    company: 'RUMO S.A.',
    code: 'RAIL'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Ferroviário',
    company: 'UNIONPACIFIC',
    code: 'UPAC'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Hidroviário',
    company: 'LOG-IN',
    code: 'LOGN'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Hidroviário',
    company: 'TREVISA',
    code: 'LUXM'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Rodoviário',
    company: 'FEDEX CORP',
    code: 'FDXB'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Rodoviário',
    company: 'JSL',
    code: 'JSLG'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Rodoviário',
    company: 'TEGMA',
    code: 'TGMA'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Transporte Rodoviário',
    company: 'UPS',
    code: 'UPSS'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'AUTOBAN',
    code: 'ANHB'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'CCR SA',
    code: 'CCRO'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'CONC RAPOSO',
    code: 'RPTA'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'CONC RIO TER',
    code: 'CRTE'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'ECON',
    code: 'ERDV'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'ECONORTE',
    code: 'ECNT'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'ECOPISTAS',
    code: 'ASCP'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'ECORODOVIAS',
    code: 'ECOR'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'ECOVIAS',
    code: 'ECOV'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'ROD COLINAS',
    code: 'COLN'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'ROD TIETE',
    code: 'RDVT'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'RT BANDEIRAS',
    code: 'CRBD'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'TRIANGULOSOL',
    code: 'TRIA'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'TRIUNFO PART',
    code: 'TPIS'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Exploração de Rodovias',
    company: 'VIAOESTE',
    code: 'VOES'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Serviços de Apoio e Armazenagem',
    company: 'GRUAIRPORT',
    code: 'AGRU'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Serviços de Apoio e Armazenagem',
    company: 'PORTO VM',
    code: 'PSVM'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Serviços de Apoio e Armazenagem',
    company: 'INVEPAR',
    code: 'IVPR'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Serviços de Apoio e Armazenagem',
    company: 'SALUS INFRA',
    code: 'SAIP'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Serviços de Apoio e Armazenagem',
    company: 'SANTOS BRP',
    code: 'STBP'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Transporte',
    company_segment: 'Serviços de Apoio e Armazenagem',
    company: 'WILSON SONS',
    code: 'WSON'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Serviços Diversos',
    company_segment: 'Serviços Diversos',
    company: 'CSU CARDSYST',
    code: 'CARD'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Serviços Diversos',
    company_segment: 'Serviços Diversos',
    company: 'DTCOM-DIRECT',
    code: 'DTCY'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Serviços Diversos',
    company_segment: 'Serviços Diversos',
    company: 'FLEX S/A',
    code: 'FLEX'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Serviços Diversos',
    company_segment: 'Serviços Diversos',
    company: 'LIQ',
    code: 'LIQO'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Serviços Diversos',
    company_segment: 'Serviços Diversos',
    company: 'PRINER',
    code: 'PRNR'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Serviços Diversos',
    company_segment: 'Serviços Diversos',
    company: 'VALID',
    code: 'VLID'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Comércio',
    company_segment: 'Material de Transporte',
    company: 'MINASMAQUINA',
    code: 'MMAQ'
  },
  {
    sector: 'Bens Industriais',
    sub_sector: 'Comércio',
    company_segment: 'Material de Transporte',
    company: 'WLM IND COM',
    code: 'WLMM'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Agropecuária',
    company_segment: 'Agricultura',
    company: 'ALIPERTI',
    code: 'APTI'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Agropecuária',
    company_segment: 'Agricultura',
    company: 'BRASILAGRO',
    code: 'AGRO'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Agropecuária',
    company_segment: 'Agricultura',
    company: 'POMIFRUTAS',
    code: 'FRTA'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Agropecuária',
    company_segment: 'Agricultura',
    company: 'SLC AGRICOLA',
    code: 'SLCE'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Agropecuária',
    company_segment: 'Agricultura',
    company: 'TERRA SANTA',
    code: 'TESA'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Açucar e Alcool',
    company: 'BIOSEV',
    code: 'BSEV'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Açucar e Alcool',
    company: 'RAIZEN ENERG',
    code: 'RESA'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Açucar e Alcool',
    company: 'SAO MARTINHO',
    code: 'SMTO'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Carnes e Derivados',
    company: 'BRF SA',
    code: 'BRFS'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Carnes e Derivados',
    company: 'EXCELSIOR',
    code: 'BAUH'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Carnes e Derivados',
    company: 'JBS',
    code: 'JBSS'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Carnes e Derivados',
    company: 'MARFRIG',
    code: 'MRFG'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Carnes e Derivados',
    company: 'MINERVA',
    code: 'BEEF'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Carnes e Derivados',
    company: 'MINUPAR',
    code: 'MNPR'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Alimentos Diversos',
    company: 'CAMIL',
    code: 'CAML'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Alimentos Diversos',
    company: 'HERSHEY CO',
    code: 'HSHY'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Alimentos Diversos',
    company: 'J.MACEDO',
    code: 'JMCD'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Alimentos Diversos',
    company: 'JOSAPAR',
    code: 'JOPA'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Alimentos Diversos',
    company: 'KRAFT HEINZ',
    code: 'KHCB'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Alimentos Diversos',
    company: 'M.DIASBRANCO',
    code: 'MDIA'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Alimentos Diversos',
    company: 'MONDELEZ INT',
    code: 'MDLZ'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Alimentos Processados',
    company_segment: 'Alimentos Diversos',
    company: 'ODERICH',
    code: 'ODER'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Bebidas',
    company_segment: 'Cervejas e Refrigerantes',
    company: 'AMBEV S/A',
    code: 'ABEV'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Bebidas',
    company_segment: 'Cervejas e Refrigerantes',
    company: 'COCA COLA',
    code: 'COCA'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Bebidas',
    company_segment: 'Cervejas e Refrigerantes',
    company: 'FEMSA',
    code: 'FMXB'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Bebidas',
    company_segment: 'Cervejas e Refrigerantes',
    company: 'PEPSICO INC',
    code: 'PEPB'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Produtos de Uso Pessoal e de Limpeza',
    company_segment: 'Produtos de Uso Pessoal',
    company: 'AVON',
    code: 'AVON'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Produtos de Uso Pessoal e de Limpeza',
    company_segment: 'Produtos de Uso Pessoal',
    company: 'COLGATE',
    code: 'COLG'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Produtos de Uso Pessoal e de Limpeza',
    company_segment: 'Produtos de Uso Pessoal',
    company: 'COTY INC',
    code: 'COTY'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Produtos de Uso Pessoal e de Limpeza',
    company_segment: 'Produtos de Uso Pessoal',
    company: 'KIMBERLY CL',
    code: 'KMBB'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Produtos de Uso Pessoal e de Limpeza',
    company_segment: 'Produtos de Uso Pessoal',
    company: 'NATURA',
    code: 'NATU'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Produtos de Uso Pessoal e de Limpeza',
    company_segment: 'Produtos de Uso Pessoal',
    company: 'PG',
    code: 'PGCO'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Produtos de Uso Pessoal e de Limpeza',
    company_segment: 'Produtos de Limpeza',
    company: 'BOMBRIL',
    code: 'BOBR'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Comércio e Distribuição',
    company_segment: 'Alimentos',
    company: 'CARREFOUR BR',
    code: 'CRFB'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Comércio e Distribuição',
    company_segment: 'Alimentos',
    company: 'P.ACUCAR-CBD',
    code: 'PCAR'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Comércio e Distribuição',
    company_segment: 'Alimentos',
    company: 'TARGET CORP',
    code: 'TGTB'
  },
  {
    sector: 'Consumo não Cíclico',
    sub_sector: 'Comércio e Distribuição',
    company_segment: 'Alimentos',
    company: 'WAL MART',
    code: 'WALM'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'CONST A LIND',
    code: 'CALI'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'CR2',
    code: 'CRDE'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'CYRELA REALT',
    code: 'CYRE'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'DIRECIONAL',
    code: 'DIRR'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'EVEN',
    code: 'EVEN'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'EZTEC',
    code: 'EZTC'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'GAFISA',
    code: 'GFSA'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'HELBOR',
    code: 'HBOR'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'INTER SA',
    code: 'INNT'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'JHSF PART',
    code: 'JHSF'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'JOAO FORTES',
    code: 'JFEN'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'MRV',
    code: 'MRVE'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'PDG REALT',
    code: 'PDGR'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'RNI',
    code: 'RDNI'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'ROSSI RESID',
    code: 'RSID'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'TECNISA',
    code: 'TCSA'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'TENDA',
    code: 'TEND'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'TRISUL',
    code: 'TRIS'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Construção Civil',
    company_segment: 'Incorporações',
    company: 'VIVER',
    code: 'VIVR'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Fios e Tecidos',
    company: 'CEDRO',
    code: 'CEDO'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Fios e Tecidos',
    company: 'COTEMINAS',
    code: 'CTNM'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Fios e Tecidos',
    company: 'DOHLER',
    code: 'DOHL'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Fios e Tecidos',
    company: 'ENCORPAR',
    code: 'ECPR'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Fios e Tecidos',
    company: 'IND CATAGUAS',
    code: 'CATA'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Fios e Tecidos',
    company: 'KARSTEN',
    code: 'CTKA'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Fios e Tecidos',
    company: 'PETTENATI',
    code: 'PTNT'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Fios e Tecidos',
    company: 'SANTANENSE',
    code: 'CTSA'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Fios e Tecidos',
    company: 'SPRINGS',
    code: 'SGPS'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Fios e Tecidos',
    company: 'TEKA',
    code: 'TEKA'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Fios e Tecidos',
    company: 'TEX RENAUX',
    code: 'TXRX'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Vestuário',
    company: 'CIA HERING',
    code: 'HGTX'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Calçados',
    company: 'ALPARGATAS',
    code: 'ALPA'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Calçados',
    company: 'CAMBUCI',
    code: 'CAMB'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Calçados',
    company: 'GRENDENE',
    code: 'GRND'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Calçados',
    company: 'NIKE',
    code: 'NIKE'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Calçados',
    company: 'VULCABRAS',
    code: 'VULC'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Acessórios',
    company: 'MUNDIAL',
    code: 'MNDL'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Tecidos, Vestuário e Calçados',
    company_segment: 'Acessórios',
    company: 'TECHNOS',
    code: 'TECN'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Utilidades Domésticas',
    company_segment: 'Eletrodomésticos',
    company: 'GOPRO',
    code: 'GPRO'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Utilidades Domésticas',
    company_segment: 'Eletrodomésticos',
    company: 'WHIRLPOOL',
    code: 'WHRL'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Utilidades Domésticas',
    company_segment: 'Móveis',
    company: 'UNICASA',
    code: 'UCAS'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Utilidades Domésticas',
    company_segment: 'Utensílios Domésticos',
    company: 'HERCULES',
    code: 'HETA'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Utilidades Domésticas',
    company_segment: 'Utensílios Domésticos',
    company: 'NADIR FIGUEI',
    code: 'NAFG'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Automóveis e Motocicletas',
    company_segment: 'Automóveis e Motocicletas',
    company: 'FORD MOTORS',
    code: 'FDMO'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Automóveis e Motocicletas',
    company_segment: 'Automóveis e Motocicletas',
    company: 'GENERAL MOT',
    code: 'GMCO'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Automóveis e Motocicletas',
    company_segment: 'Automóveis e Motocicletas',
    company: 'IOCHP-MAXION',
    code: 'MYPK'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Automóveis e Motocicletas',
    company_segment: 'Automóveis e Motocicletas',
    company: 'METAL LEVE',
    code: 'LEVE'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Automóveis e Motocicletas',
    company_segment: 'Automóveis e Motocicletas',
    company: 'PLASCAR PART',
    code: 'PLAS'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Automóveis e Motocicletas',
    company_segment: 'Automóveis e Motocicletas',
    company: 'TESLA INC',
    code: 'TSLA'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Mídia',
    company_segment: 'Produção e Difusão de Filmes e Programas',
    company: 'CINESYSTEM',
    code: 'CNSY'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Mídia',
    company_segment: 'Produção e Difusão de Filmes e Programas',
    company: 'COMCAST',
    code: 'CMCS'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Mídia',
    company_segment: 'Produção e Difusão de Filmes e Programas',
    company: 'NETFLIX',
    code: 'NFLX'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Mídia',
    company_segment: 'Produção e Difusão de Filmes e Programas',
    company: 'TIME WARNER',
    code: 'TWXB'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Mídia',
    company_segment: 'Produção e Difusão de Filmes e Programas',
    company: 'WALT DISNEY',
    code: 'DISB'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Hoteis e Restaurantes',
    company_segment: 'Hotelaria',
    company: 'HOTEIS OTHON',
    code: 'HOOT'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Hoteis e Restaurantes',
    company_segment: 'Restaurante e Similares',
    company: 'BK BRASIL',
    code: 'BKBR'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Hoteis e Restaurantes',
    company_segment: 'Restaurante e Similares',
    company: 'IMC S/A',
    code: 'MEAL'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Hoteis e Restaurantes',
    company_segment: 'Restaurante e Similares',
    company: 'MCDONALDS',
    code: 'MCDC'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Hoteis e Restaurantes',
    company_segment: 'Restaurante e Similares',
    company: 'STARBUCKS',
    code: 'SBUB'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Viagens e Lazer',
    company_segment: 'Bicicletas',
    company: 'BIC MONARK',
    code: 'BMKS'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Viagens e Lazer',
    company_segment: 'Brinquedos e Jogos',
    company: 'ESTRELA',
    code: 'ESTR'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Viagens e Lazer',
    company_segment: 'Brinquedos e Jogos',
    company: 'TECTOY',
    code: 'TOYB'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Viagens e Lazer',
    company_segment: 'Produção de Eventos e Shows',
    company: 'SPTURIS',
    code: 'AHEB'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Viagens e Lazer',
    company_segment: 'Produção de Eventos e Shows',
    company: 'TIME FOR FUN',
    code: 'SHOW'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Viagens e Lazer',
    company_segment: 'Viagens e Turismo',
    company: 'CVC BRASIL',
    code: 'CVCB'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Viagens e Lazer',
    company_segment: 'Atividades Esportivas',
    company: 'SMART FIT',
    code: 'SMFT'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Serviços Educacionais',
    company: 'ANIMA',
    code: 'ANIM'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Serviços Educacionais',
    company: 'BAHEMA',
    code: 'BAHI'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Serviços Educacionais',
    company: 'ESTACIO PART',
    code: 'ESTC'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Serviços Educacionais',
    company: 'KROTON',
    code: 'KROT'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Serviços Educacionais',
    company: 'SER EDUCA',
    code: 'SEER'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Serviços Educacionais',
    company: 'SOMOS EDUCA',
    code: 'SEDU'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Aluguel de carros',
    company: 'LOCALIZA',
    code: 'RENT'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Aluguel de carros',
    company: 'LOCAMERICA',
    code: 'LCAM'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Aluguel de carros',
    company: 'MAESTROLOC',
    code: 'MSRO'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Aluguel de carros',
    company: 'MOVIDA',
    code: 'MOVI'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Aluguel de carros',
    company: 'UNIDAS',
    code: 'UNID'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Programas de Fidelização',
    company: 'MULTIPLUS',
    code: 'MPLU'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Diversos',
    company_segment: 'Programas de Fidelização',
    company: 'SMILES',
    code: 'SMLS'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Tecidos, Vestuário e Calçados',
    company: 'AREZZO CO',
    code: 'ARZZ'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Tecidos, Vestuário e Calçados',
    company: 'GAP',
    code: 'GPSI'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Tecidos, Vestuário e Calçados',
    company: 'GRAZZIOTIN',
    code: 'CGRA'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Tecidos, Vestuário e Calçados',
    company: 'GUARARAPES',
    code: 'GUAR'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Tecidos, Vestuário e Calçados',
    company: 'JC PENNEY',
    code: 'JCPC'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Tecidos, Vestuário e Calçados',
    company: 'L BRANDS',
    code: 'LBRN'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Tecidos, Vestuário e Calçados',
    company: 'LE LIS BLANC',
    code: 'LLIS'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Tecidos, Vestuário e Calçados',
    company: 'LOJAS MARISA',
    code: 'AMAR'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Tecidos, Vestuário e Calçados',
    company: 'LOJAS RENNER',
    code: 'LREN'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Tecidos, Vestuário e Calçados',
    company: 'MACY S',
    code: 'MACY'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Tecidos, Vestuário e Calçados',
    company: 'ROSS STORES',
    code: 'ROST'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Eletrodomésticos',
    company: 'BEST BUY',
    code: 'BBYY'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Eletrodomésticos',
    company: 'MAGAZ LUIZA',
    code: 'MGLU'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Eletrodomésticos',
    company: 'VIAVAREJO',
    code: 'VVAR'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Produtos Diversos',
    company: 'AMAZON',
    code: 'AMZO'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Produtos Diversos',
    company: 'B2W DIGITAL',
    code: 'BTOW'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Produtos Diversos',
    company: 'BR HOME',
    code: 'HCBR'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Produtos Diversos',
    company: 'COSTCO',
    code: 'COWC'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Produtos Diversos',
    company: 'DUFRY AG',
    code: 'DAGB'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Produtos Diversos',
    company: 'HOME DEPOT',
    code: 'HOME'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Produtos Diversos',
    company: 'LOJAS AMERIC',
    code: 'LAME'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Produtos Diversos',
    company: 'SARAIVA LIVR',
    code: 'SLED'
  },
  {
    sector: 'Consumo Cíclico',
    sub_sector: 'Comércio',
    company_segment: 'Produtos Diversos',
    company: 'TIFFANY',
    code: 'TIFF'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'ABBOTT',
    code: 'ABTT'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'ABBVIE',
    code: 'ABBV'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'AMGEN',
    code: 'AMGN'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'BIOGEN',
    code: 'BIIB'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'BIOMM',
    code: 'BIOM'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'BIOTOSCANA',
    code: 'GBIO'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'BRISTOLMYERS',
    code: 'BMYB'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'CELGENE CORP',
    code: 'CLGN'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'CVS HEALTH',
    code: 'CVSH'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'GILEAD',
    code: 'GILD'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'JOHNSON',
    code: 'JNJB'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'LILLY',
    code: 'LILY'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'MEDTRONIC',
    code: 'MDTC'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'MERCK',
    code: 'MRCK'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'NORTCQUIMICA',
    code: 'NRTQ'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'OUROFINO S/A',
    code: 'OFSA'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Medicamentos e Outros Produtos',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'PFIZER',
    code: 'PFIZ'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'ADVANCED-DH',
    code: 'ADHM'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'AETNA INC',
    code: 'AETB'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'ALLIAR',
    code: 'AALR'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'DASA',
    code: 'DASA'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'FLEURY',
    code: 'FLRY'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'HAPVIDA',
    code: 'HAPV'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'IHPARDINI',
    code: 'PARD'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'INTERMEDICA',
    code: 'GNDI'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'ODONTOPREV',
    code: 'ODPV'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'PACIFIC RDSL',
    code: 'PACF'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'QUALICORP',
    code: 'QUAL'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Análises e Diagnósticos',
    company_segment: 'Análises e Diagnósticos',
    company: 'THERMFISCHER',
    code: 'TMOS'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Equipamentos',
    company_segment: 'Equipamentos',
    company: 'BAUMER',
    code: 'BALM'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Comércio e Distribuição',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'BR PHARMA',
    code: 'BPHA'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Comércio e Distribuição',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'DIMED',
    code: 'PNVL'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Comércio e Distribuição',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'EXPRESCRIPTS',
    code: 'ESRX'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Comércio e Distribuição',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'HYPERA',
    code: 'HYPE'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Comércio e Distribuição',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'PROFARMA',
    code: 'PFRM'
  },
  {
    sector: 'Saúde',
    sub_sector: 'Comércio e Distribuição',
    company_segment: 'Medicamentos e Outros Produtos',
    company: 'RAIADROGASIL',
    code: 'RADL'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Computadores e Equipamentos',
    company_segment: 'Computadores e Equipamentos',
    company: 'APPLE',
    code: 'AAPL'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Computadores e Equipamentos',
    company_segment: 'Computadores e Equipamentos',
    company: 'CISCO',
    code: 'CSCO'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Computadores e Equipamentos',
    company_segment: 'Computadores e Equipamentos',
    company: 'HP COMPANY',
    code: 'HPQB'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Computadores e Equipamentos',
    company_segment: 'Computadores e Equipamentos',
    company: 'INTEL',
    code: 'ITLC'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Computadores e Equipamentos',
    company_segment: 'Computadores e Equipamentos',
    company: 'ITAUTEC',
    code: 'ITEC'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Computadores e Equipamentos',
    company_segment: 'Computadores e Equipamentos',
    company: 'POSITIVO TEC',
    code: 'POSI'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Computadores e Equipamentos',
    company_segment: 'Computadores e Equipamentos',
    company: 'QUALCOMM',
    code: 'QCOM'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Computadores e Equipamentos',
    company_segment: 'Computadores e Equipamentos',
    company: 'TEXAS INC',
    code: 'TEXA'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Computadores e Equipamentos',
    company_segment: 'Computadores e Equipamentos',
    company: 'XEROX CORP',
    code: 'XRXB'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'ACCENTURE',
    code: 'ACNB'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'ALPHABET',
    code: 'GOGL'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'BRQ',
    code: 'BRQB'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'COGNIZANT',
    code: 'CTSH'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'EBAY',
    code: 'EBAY'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'FACEBOOK',
    code: 'FBOK'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'IBM',
    code: 'IBMB'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'LINX',
    code: 'LINX'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'MICROSOFT',
    code: 'MSFT'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'ORACLE',
    code: 'ORCL'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'QUALITY SOFT',
    code: 'QUSW'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'SALESFORCE',
    code: 'SSFO'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'SENIOR SOL',
    code: 'SNSL'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'TOTVS',
    code: 'TOTS'
  },
  {
    sector: 'Tecnologia da Informação',
    sub_sector: 'Programas e Serviços',
    company_segment: 'Programas e Serviços',
    company: 'TWITTER',
    code: 'TWTR'
  },
  {
    sector: 'Telecomunicações',
    sub_sector: 'Telecomunicações',
    company_segment: 'Telecomunicações',
    company: 'ALGAR TELEC',
    code: 'ALGT'
  },
  {
    sector: 'Telecomunicações',
    sub_sector: 'Telecomunicações',
    company_segment: 'Telecomunicações',
    company: 'ATT INC',
    code: 'ATTB'
  },
  {
    sector: 'Telecomunicações',
    sub_sector: 'Telecomunicações',
    company_segment: 'Telecomunicações',
    company: 'OI',
    code: 'OIBR'
  },
  {
    sector: 'Telecomunicações',
    sub_sector: 'Telecomunicações',
    company_segment: 'Telecomunicações',
    company: 'SPRINT',
    code: 'SPRN'
  },
  {
    sector: 'Telecomunicações',
    sub_sector: 'Telecomunicações',
    company_segment: 'Telecomunicações',
    company: 'TELEBRAS',
    code: 'TELB'
  },
  {
    sector: 'Telecomunicações',
    sub_sector: 'Telecomunicações',
    company_segment: 'Telecomunicações',
    company: 'TELEF BRASIL',
    code: 'VIVT'
  },
  {
    sector: 'Telecomunicações',
    sub_sector: 'Telecomunicações',
    company_segment: 'Telecomunicações',
    company: 'TIM PART S/A',
    code: 'TIMP'
  },
  {
    sector: 'Telecomunicações',
    sub_sector: 'Telecomunicações',
    company_segment: 'Telecomunicações',
    company: 'VERIZON',
    code: 'VERZ'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'AES SUL',
    code: 'AESL'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'AES TIETE E',
    code: 'TIET'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'AFLUENTE T',
    code: 'AFLT'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ALUPAR',
    code: 'ALUP'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'AMPLA ENERG',
    code: 'CBEE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CACHOEIRA',
    code: 'CPTE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CEB',
    code: 'CEBR'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CEEE-D',
    code: 'CEED'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CEEE-GT',
    code: 'EEEL'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CELESC',
    code: 'CLSC'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CELGPAR',
    code: 'GPAR'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CELPA',
    code: 'CELP'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CELPE',
    code: 'CEPE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CEMAR',
    code: 'ENMA'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CEMIG',
    code: 'CMIG'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CEMIG DIST',
    code: 'CMGD'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CEMIG GT',
    code: 'CMGT'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CESP',
    code: 'CESP'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'COELBA',
    code: 'CEEB'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'COELCE',
    code: 'COCE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'COPEL',
    code: 'CPLE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'COSERN',
    code: 'CSRN'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CPFL ENERGIA',
    code: 'CPFE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CPFL GERACAO',
    code: 'CPFG'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CPFL PIRATIN',
    code: 'CPFP'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'CPFL RENOVAV',
    code: 'CPRE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'DUKE ENERGY',
    code: 'DUKB'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'EBE',
    code: 'EBEN'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ELEKTRO',
    code: 'EKTR'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ELETROBRAS',
    code: 'ELET'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ELETROPAR',
    code: 'LIPR'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ELETROPAULO',
    code: 'ELPL'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'EMAE',
    code: 'EMAE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ENERGIAS BR',
    code: 'ENBR'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ENERGISA',
    code: 'ENGI'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ENERGISA MT',
    code: 'ENMT'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ENERSUL',
    code: 'ENER'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ENEVA',
    code: 'ENEV'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ENGIE BRASIL',
    code: 'EGIE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'EQUATORIAL',
    code: 'EQTL'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ESCELSA',
    code: 'ESCE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'FGENERGIA',
    code: 'FGEN'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'GER PARANAP',
    code: 'GEPA'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'ITAPEBI',
    code: 'ITPB'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'LIGHT',
    code: 'LIGH'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'LIGHT S/A',
    code: 'LIGT'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'NEOENERGIA',
    code: 'NEOE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'OMEGA GER',
    code: 'OMGE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'PAUL F LUZ',
    code: 'PALF'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'PROMAN',
    code: 'PRMN'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'REDE ENERGIA',
    code: 'REDE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'RENOVA',
    code: 'RNEW'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'RIO GDE ENER',
    code: 'RGEG'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'STATKRAFT',
    code: 'STKF'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'STO ANTONIO',
    code: 'STEN'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'TAESA',
    code: 'TAEE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'TERMOPE',
    code: 'TMPE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'TERM. PE III',
    code: 'TEPE'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'TRAN PAULIST',
    code: 'TRPL'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Energia Elétrica',
    company_segment: 'Energia Elétrica',
    company: 'UPTICK',
    code: 'UPKP'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Água e Saneamento',
    company_segment: 'Água e Saneamento',
    company: 'CASAN',
    code: 'CASN'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Água e Saneamento',
    company_segment: 'Água e Saneamento',
    company: 'COPASA',
    code: 'CSMG'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Água e Saneamento',
    company_segment: 'Água e Saneamento',
    company: 'IGUA SA',
    code: 'IGSN'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Água e Saneamento',
    company_segment: 'Água e Saneamento',
    company: 'SABESP',
    code: 'SBSP'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Água e Saneamento',
    company_segment: 'Água e Saneamento',
    company: 'SANEPAR',
    code: 'SAPR'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Água e Saneamento',
    company_segment: 'Água e Saneamento',
    company: 'SANESALTO',
    code: 'SNST'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Gás',
    company_segment: 'Gás',
    company: 'CEG',
    code: 'CEGR'
  },
  {
    sector: 'Utilidade Pública',
    sub_sector: 'Gás',
    company_segment: 'Gás',
    company: 'COMGAS',
    code: 'CGAS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'ABC BRASIL',
    code: 'ABCB'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'ALFA HOLDING',
    code: 'RPAD'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'ALFA INVEST',
    code: 'BRIV'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'AMAZONIA',
    code: 'BAZA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'BANCO PAN',
    code: 'BPAN'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'BANESE',
    code: 'BGIP'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'BANESTES',
    code: 'BEES'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'BANK AMERICA',
    code: 'BOAC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'BANPARA',
    code: 'BPAR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'BANRISUL',
    code: 'BRSR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'BRADESCO',
    code: 'BBDC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'BRASIL',
    code: 'BBAS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'BRB BANCO',
    code: 'BSLI'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'BTGP BANCO',
    code: 'BPAC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'CITIGROUP',
    code: 'CTGP'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'GOLDMANSACHS',
    code: 'GSGI'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'INDUSVAL',
    code: 'IDVL'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'INTER BANCO',
    code: 'BIDI'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'ITAUSA',
    code: 'ITSA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'ITAUUNIBANCO',
    code: 'ITUB'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'JPMORGAN',
    code: 'JPMC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'MERC BRASIL',
    code: 'BMEB'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'MERC INVEST',
    code: 'BMIN'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'NORD BRASIL',
    code: 'BNBR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'PARANA',
    code: 'PRBC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'PATAGONIA',
    code: 'BPAT'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'PINE',
    code: 'PINE'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'SANTANDER BR',
    code: 'SANB'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'UBS GROUP',
    code: 'UBSG'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'US BANCORP',
    code: 'USBC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Bancos',
    company: 'WELLS FARGO',
    code: 'WFCO'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Soc. Crédito e Financiamento',
    company: 'ALFA FINANC',
    code: 'CRIV'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Soc. Crédito e Financiamento',
    company: 'FINANSINOS',
    code: 'FNCN'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Soc. Crédito e Financiamento',
    company: 'MERC FINANC',
    code: 'MERC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Soc. Arrendamento Mercantil',
    company: 'BRADESCO LSG',
    code: 'BDLS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Soc. Arrendamento Mercantil',
    company: 'BV LEASING',
    code: 'BVLS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Intermediários Financeiros',
    company_segment: 'Soc. Arrendamento Mercantil',
    company: 'DIBENS LSG',
    code: 'DBEN'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'ALTERE SEC',
    code: 'ALTR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'APICESECURIT',
    code: 'APCS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'BETA SECURIT',
    code: 'BTSC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'BRAZIL REALT',
    code: 'BZRS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'BRAZILIAN SC',
    code: 'BSCS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'BRC SECURIT',
    code: 'BRCS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'BRPR 55 SEC',
    code: 'WTVP'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'BRPR 56 SEC',
    code: 'WTVR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'CIBRASEC',
    code: 'CBSC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'GAIA AGRO',
    code: 'GAFL'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'GAIA SECURIT',
    code: 'GAIA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'OCTANTE SEC',
    code: 'OCTS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'PATRIA SEC',
    code: 'NOOS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'PDG SECURIT',
    code: 'PDGS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'POLO CAP SEC',
    code: 'PLSC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'RBCAPITALRES',
    code: 'RBRA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'RBCAPITALSEC',
    code: 'RBCS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'VERTCIASEC',
    code: 'VERT'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Securitizadoras de Recebíveis',
    company_segment: 'Securitizadoras de Recebíveis',
    company: 'WTORRE PIC',
    code: 'WTPI'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Gestão de Recursos e Investimentos',
    company: 'BLACKROCK',
    code: 'BLAK'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Gestão de Recursos e Investimentos',
    company: 'BNDESPAR',
    code: 'BNDP'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Gestão de Recursos e Investimentos',
    company: 'BNY MELLON',
    code: 'BONY'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Gestão de Recursos e Investimentos',
    company: 'BRAZILIAN FR',
    code: 'BFRE'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Gestão de Recursos e Investimentos',
    company: 'GP INVEST',
    code: 'GPIV'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Gestão de Recursos e Investimentos',
    company: 'IDEIASNET',
    code: 'IDNT'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Gestão de Recursos e Investimentos',
    company: 'PPLA',
    code: 'PPLA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Gestão de Recursos e Investimentos',
    company: 'TARPON INV',
    code: 'TRPN'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Serviços Financeiros Diversos',
    company: 'AMERICAN EXP',
    code: 'AXPB'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Serviços Financeiros Diversos',
    company: 'B3',
    code: 'B3SA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Serviços Financeiros Diversos',
    company: 'CIELO',
    code: 'CIEL'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Serviços Financeiros Diversos',
    company: 'MASTERCARD',
    code: 'MSCD'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Serviços Financeiros Diversos',
    company: 'MORGAN STAN',
    code: 'MSBR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Serviços Financeiros Diversos',
    company: 'SCHWAB',
    code: 'SCHW'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Serviços Financeiros Diversos',
    company: 'VISA INC',
    code: 'VISA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Serviços Financeiros Diversos',
    company_segment: 'Serviços Financeiros Diversos',
    company: 'WESTERNUNION',
    code: 'WUNI'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Previdência e Seguros',
    company_segment: 'Seguradoras',
    company: 'AIG GROUP',
    code: 'AIGB'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Previdência e Seguros',
    company_segment: 'Seguradoras',
    company: 'ALFA CONSORC',
    code: 'BRGE'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Previdência e Seguros',
    company_segment: 'Seguradoras',
    company: 'BBSEGURIDADE',
    code: 'BBSE'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Previdência e Seguros',
    company_segment: 'Seguradoras',
    company: 'IRBBRASIL RE',
    code: 'IRBR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Previdência e Seguros',
    company_segment: 'Seguradoras',
    company: 'METLIFE INC',
    code: 'METB'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Previdência e Seguros',
    company_segment: 'Seguradoras',
    company: 'PORTO SEGURO',
    code: 'PSSA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Previdência e Seguros',
    company_segment: 'Seguradoras',
    company: 'SEG AL BAHIA',
    code: 'CSAB'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Previdência e Seguros',
    company_segment: 'Seguradoras',
    company: 'SUL AMERICA',
    code: 'SULA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Previdência e Seguros',
    company_segment: 'Seguradoras',
    company: 'TRAVELERS',
    code: 'TRVC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Previdência e Seguros',
    company_segment: 'Corretoras de Seguros',
    company: 'BR INSURANCE',
    code: 'BRIN'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Previdência e Seguros',
    company_segment: 'Corretoras de Seguros',
    company: 'WIZ S.A.',
    code: 'WIZS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'ALIANSCE',
    code: 'ALSC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'BOSTON PROP',
    code: 'BOXP'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'BR MALLS PAR',
    code: 'BRML'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'BR PROPERT',
    code: 'BRPR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'COR RIBEIRO',
    code: 'CORR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'CYRE COM-CCP',
    code: 'CCPR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'GENERALSHOPP',
    code: 'GSHP'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'HABITASUL',
    code: 'HBTS'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'IGB S/A',
    code: 'IGBR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'IGUATEMI',
    code: 'IGTA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'JEREISSATI',
    code: 'JPSA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'LOJAS HERING',
    code: 'LHER'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'MENEZES CORT',
    code: 'MNZC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'MULTIPLAN',
    code: 'MULT'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'SAO CARLOS',
    code: 'SCAR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Exploração de Imóveis',
    company: 'SIERRABRASIL',
    code: 'SSBR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Intermediação Imobiliária',
    company: 'BR BROKERS',
    code: 'BBRK'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Exploração de Imóveis',
    company_segment: 'Intermediação Imobiliária',
    company: 'LOPES BRASIL',
    code: 'LPSB'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: '3M',
    code: 'MMMC'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: 'AGCONCESSOES',
    code: 'ANDG'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: 'AGPART',
    code: 'CANT'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: 'BATTISTELLA',
    code: 'BTTL'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: 'BERKSHIRE',
    code: 'BERK'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: 'DANAHER CORP',
    code: 'DHER'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: 'DOWDUPONT',
    code: 'DWDP'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: 'GE',
    code: 'GEOO'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: 'HONEYWELL',
    code: 'HONB'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: 'MONT ARANHA',
    code: 'MOAR'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: 'PAR AL BAHIA',
    code: 'PEAB'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Holdings Diversificadas',
    company_segment: 'Holdings Diversificadas',
    company: 'SPRINGER',
    code: 'SPRI'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Outros Títulos',
    company_segment: 'Outros Títulos',
    company: 'CEPAC - CTBA',
    code: 'CTBA'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Outros Títulos',
    company_segment: 'Outros Títulos',
    company: 'CEPAC - MCRJ',
    code: 'MCRJ'
  },
  {
    sector: 'Financeiro',
    sub_sector: 'Outros Títulos',
    company_segment: 'Outros Títulos',
    company: 'CEPAC - PMSP',
    code: 'PMSP'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: '524 PARTICIP',
    code: 'QVQP'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'ALEF S/A',
    code: 'ALEF'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'ATOMPAR',
    code: 'ATOM'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'BETAPART',
    code: 'BETP'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'BONAIRE PART',
    code: 'BNPA'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'CABINDA PART',
    code: 'CABI'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'CACONDE PART',
    code: 'CACO'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'CAPITALPART',
    code: 'CPTP'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'CCX CARVAO',
    code: 'CCXC'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'CEMEPE',
    code: 'MAPT'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'CIMS',
    code: 'CMSA'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'ELETRON',
    code: 'ETRO'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'FUTURETEL',
    code: 'FTRT'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'GAMA PART',
    code: 'OPGM'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'INVEST BEMGE',
    code: 'FIGE'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'J B DUARTE',
    code: 'JBDU'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'LONGDIS',
    code: 'SPRT'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'MGI PARTICIP',
    code: 'MGIP'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'NEWTEL PART',
    code: 'NEWT'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'OPPORT ENERG',
    code: 'OPHE'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'POLPAR',
    code: 'PPAR'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'PROMPT PART',
    code: 'PRPT'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'SELECTPART',
    code: 'SLCT'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'SUDESTE S/A',
    code: 'OPSE'
  },
  {
    sector: 'Outros',
    sub_sector: 'Outros',
    company_segment: 'Outros',
    company: 'SUL 116 PART',
    code: 'OPTS'
  }
];

export class PostRefactoring1545522919995 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'stock',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'code',
            type: 'varchar'
          },
          {
            name: 'company',
            type: 'varchar'
          },
          {
            name: 'company_segment',
            type: 'varchar'
          },
          {
            name: 'sector',
            type: 'varchar'
          },
          {
            name: 'sub_sector',
            type: 'varchar'
          }
        ]
      }),
      true
    );

    stocks.forEach(async stock => {
      await queryRunner.query(
        `INSERT INTO stock (code, company, company_segment, sector, sub_sector) VALUES ('${
          stock.code
        }', '${stock.company}', '${stock.company_segment}', '${stock.sector}', '${
          stock.sub_sector
        }')`
      );
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
