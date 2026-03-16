/* ═══════════════════════════════════════════════════
   FMTC-MMA  ·  Phase 4  ·  Hash-Routed SPA
   Router + Views + Data
   ═══════════════════════════════════════════════════ */

/* ── DATA ─────────────────────────────── */

const DIRECTORS = [
  { role:'Presidente', name:'Mestre Robson Teixeira da Costa', reg:'002',
    bio:'Mestre em Muay Thai Chaiya, Taekwondo, Jiu Jitsu, Judô, Boxe e MMA. Registrado na WMF, IFMA, CBMT, CBTKD, FMJJ, CBMMA, Justiça Desportiva e ISKA. Múltiplo campeão e medalhista em diversas modalidades. Fundador da FMTC-MMA, responsável pela formação de dezenas de professores e instrutores em Minas Gerais.' },
  { role:'Vice-Presidente', name:'Professor Gevesan Antônio da Silva Neto', reg:'003',
    bio:'Professor de Muay Thai, Taekwondo, Jiu Jitsu, Boxe e MMA. Campeão nacional e regional de Muay Thai com 3 cinturões e 30 medalhas de ouro. 3 vitórias em MMA profissional incluindo 2 nocautes. Responsável pela equipe Naseveg Contagem.' },
  { role:'Secretário Geral', name:'Instrutor Antônio Brandão da Silva Neto (Junior)', reg:'004',
    bio:'Praticante de Muay Thai, Jiu Jitsu, Boxe e MMA. Prajied Verde. Atua como voz ativa da comunidade marcial na administração federativa.' },
  { role:'Diretora de Administração', name:'Jaqueline Maria de Souza Pereira', reg:'005',
    bio:'Atleta de Muay Thai, Jiu Jitsu, Boxe e MMA com 3 lutas profissionais de MMA. Prajied Verde. Reconhecida pelo perfeccionismo e liderança em eventos da FMTC-MMA, promovendo um modelo moderno e harmonioso entre o tradicional e o contemporâneo.' },
  { role:'Diretor Fiscal', name:'Rafael Ribeiro Silva', reg:'006',
    bio:'Faixa Azul de Jiu Jitsu e MMA. Proeminência 100 pontos no exame de 15/12/2016. Contato: (31) 99185-0965.',
    contact:'(31) 99185-0965' }
];

const REFEREES = [
  {name:'Adair Rodrigues Junior',reg:'323',func:'Árbitro Internacional'},
  {name:'Robson Teixeira da Costa',reg:'002',func:'Árbitro Internacional'},
  {name:'Antônio Samuel da Costa Chaiya',reg:'001',func:'Árbitro Nacional'},
  {name:'Gevesan Antônio da Silva Neto',reg:'003',func:'Regional'},
  {name:'Agnaldo Ferreira da Silva',reg:'019',func:'Lateral / Central'},
  {name:'Antônio Brandão da Silva Neto',reg:'004',func:'Lateral / Central'},
  {name:'Claudio Adriano de Carvalho',reg:'011',func:'Lateral / Central'},
  {name:'Daniel Soares Guimarães',reg:'025',func:'Lateral / Central'},
  {name:'Jaqueline Maria de Souza Pereira',reg:'005',func:'Lateral / Central'},
  {name:'Paulo Henrique Neves da Silva',reg:'013',func:'Lateral / Central'},
  {name:'Rafael Ribeiro Silva',reg:'006',func:'Lateral / Central'},
  {name:'Alex Borges Gama',reg:'022',func:'Lateral'},
  {name:'Diego Emílio dos Reis',reg:'007',func:'Lateral'},
  {name:'Douglas Rodrigues de Souza',reg:'020',func:'Lateral'},
  {name:'Fernando Henrique Faria',reg:'008',func:'Lateral'},
  {name:'Jalmiro Bispo Tatu',reg:'018',func:'Lateral'},
  {name:'Jucimar Alves da Silva',reg:'021',func:'Lateral'},
  {name:'Luis Roberto Oliveira Junior',reg:'017',func:'Lateral'},
  {name:'Magno Candido da Silva',reg:'014',func:'Lateral'},
  {name:'Manoel Jandir de Almeida Junior',reg:'009',func:'Lateral'},
  {name:'Maria Marlene Magalhães Souza',reg:'066',func:'Lateral'},
  {name:'Matheus Luiz Viana Esteves',reg:'038',func:'Lateral'},
  {name:'Pedro Antonio Cardoso Feraz',reg:'012',func:'Lateral'},
  {name:'Renato Pereira Dias',reg:'037',func:'Lateral'},
  {name:'Roberta Keyla da Silveira Costa',reg:'010',func:'Lateral'},
  {name:'Ronan Raimundo Figueiredo Gonçalves',reg:'027',func:'Lateral'},
  {name:'Silviano Dias',reg:'015',func:'Lateral'},
  {name:'Sophia Virginia Prado e Castro',reg:'050',func:'Lateral'},
  {name:'Thaner Alexsander',reg:'016',func:'Lateral'}
];

const DEPARTMENTS = [
  { title:'Jurídico', name:'Dr. Manoel Jandir de Almeida Junior', role:'Advogado OAB/MG 116.269',
    bio:'Responsável pela orientação jurídica, tributária e administrativa da federação e seus filiados.',
    contact:'(31) 99867-1338' },
  { title:'Odontológico', name:'Dr. André Delasalle', role:'Cirurgião Bucomaxilofacial — UFMG',
    bio:'Graduado pela FO-UFMG. Pós-graduado em Cirurgia e Traumatologia Bucomaxilofacial, Implantes Zigomáticos (ILAPEO) e Reabilitação Oral com Implantes Guiados. Professor da FO-UFMG e Bioss/UNINGA. Mais de 6.000 implantes instalados.',
    contact:'bemviveratelie.com.br' },
  { title:'Contábil', name:'Roberta Keyla S. Costa', role:'Contadora CRC-MG 108864/O',
    bio:'Graduada em Ciências Contábeis com certificado de honra ao mérito pelo CRC-MG. Sócia-gerente da Solução Serviços Contábeis. Experiência de 10+ anos em constituição de empresas, departamento pessoal, fiscal e contábil.',
    contact:'(31) 99953-9903' },
  { title:'Marketing Digital', name:'Diego Emílio dos Reis', role:'Diretor de Marketing',
    bio:'Responsável pela comunicação digital, identidade visual e presença online da FMTC-MMA.',
    contact:'' },
  { title:'Nutrição', name:'Carla Henriques', role:'Nutricionista CRN 9.17689',
    bio:'Graduada em Nutrição Clínica. Pós-graduanda em Nutrição Funcional e Fitoterápicos.',
    contact:'(31) 9941-8169' }
];

const GYMS = [
  { name:'Mago Team Centro Contagem', city:'Contagem, MG', region:'Centro' },
  { name:'Mago Team Vila Pinho', city:'Belo Horizonte, MG', region:'Vila Pinho' },
  { name:'Mago Team Horto BH', city:'Belo Horizonte, MG', region:'Horto' },
  { name:'Mago Team Esmeraldas', city:'Esmeraldas, MG', region:'Centro' },
  { name:'Mago Team Barreiro de Baixo BH', city:'Belo Horizonte, MG', region:'Barreiro de Baixo' },
  { name:'Mago Team Amazonas Contagem', city:'Contagem, MG', region:'Amazonas' },
  { name:'Mago Team Tropical Betim', city:'Betim, MG', region:'Tropical' },
  { name:'Mago Team Betim', city:'Betim, MG', region:'Centro' },
  { name:'Mago Team Industrial Contagem', city:'Contagem, MG', region:'Industrial' },
  { name:'Mago Team Bolivia', city:'Contagem, MG', region:'Bolivia' },
  { name:'Mago Team Barro Preto Centro BH', city:'Belo Horizonte, MG', region:'Barro Preto' },
  { name:'Naseveg Contagem', city:'Contagem, MG', region:'Centro' },
  { name:'Soul of Lion', city:'Contagem, MG', region:'' },
  { name:'Junior Top Team', city:'João Monlevade, MG', region:'' },
  { name:'Dojo Cipriano', city:'Vitória, ES', region:'' },
  { name:'AICCA', city:'Minas Gerais', region:'' }
];

const DOWNLOADS = [
  { name:'Edital 002 FMTC-MMA', ext:'pdf', file:'arq/Edital 002 FMTC-MMA.pdf', desc:'Edital oficial da federação' },
  { name:'Ficha de Inscrição — Invincible Chaiya Fight', ext:'pdf', file:'arq/INVINCIBLE CHAIYA FIGHT Ficha de inscrição.pdf', desc:'Formulário de inscrição para evento' },
  { name:'Apresentação FMTC-MMA', ext:'pptx', file:'arq/Apresentação FMTC-MMA.pptx', desc:'Apresentação institucional' },
  { name:'Ficha de Filiação', ext:'pdf', file:'arq/Filiar-se federação.pdf', desc:'Formulário para filiação à federação' },
  { name:'Registro de Filiados', ext:'xls', file:'arq/REGISTRO DE FILIADOS DA FMTC-MMA.xlsx', desc:'Planilha de filiados atualizada' },
  { name:'Registro Geral de Alunos', ext:'doc', file:'arq/REGISTRO GERAL DE ALUNOS.docx', desc:'Cadastro geral de alunos' },
  { name:'Registro Oficial de Alunos', ext:'xls', file:'arq/Registro Oficial de Alunos.xlsx', desc:'Planilha oficial de registro' },
  { name:'Novos Associados', ext:'doc', file:'arq/NOVOS ASSOCIADOS FMTC-MMA.docx', desc:'Lista de novos associados' },
  { name:'Planilha Oficial — Rafael Luca', ext:'xls', file:'arq/Sherdog Planilha Oficial - Rafael Luca.xlsx', desc:'Registro Sherdog oficial' },
  { name:'Invencibile Chaiya no Yucca', ext:'pdf', file:'arq/Invencibile Chayia no Yucca.pdf', desc:'Evento Invencibile Chaiya' }
];

const DOCUMENT_HUB = [
  { name:'Ficha de Filiação', ext:'pdf', file:'arq/Filiar-se federação.pdf', desc:'Formulário de filiação à federação', category:'Filiação', status:'Disponível' },
  { name:'Edital 002 FMTC-MMA', ext:'pdf', file:'arq/Edital 002 FMTC-MMA.pdf', desc:'Edital oficial da federação', category:'Institucional', status:'Disponível' },
  { name:'Ficha de Inscrição — Invincible Chaiya Fight', ext:'pdf', file:'arq/INVINCIBLE CHAIYA FIGHT Ficha de inscrição.pdf', desc:'Formulário de inscrição para evento', category:'Eventos', status:'Disponível' },
  { name:'Invencibile Chaiya no Yucca', ext:'pdf', file:'arq/Invencibile Chayia no Yucca.pdf', desc:'Material de evento', category:'Eventos', status:'Disponível' },
  { name:'Apresentação FMTC-MMA', ext:'pptx', file:'arq/Apresentação FMTC-MMA.pptx', desc:'Apresentação institucional', category:'Institucional', status:'Disponível' },
  { name:'Registro de Filiados', ext:'xls', file:'arq/REGISTRO DE FILIADOS DA FMTC-MMA.xlsx', desc:'Planilha de filiados (base de registro e atualização cadastral)', category:'Registros', status:'Disponível' },
  { name:'Registro Oficial de Alunos', ext:'xls', file:'arq/Registro Oficial de Alunos.xlsx', desc:'Planilha oficial de alunos', category:'Registros', status:'Disponível' },
  { name:'Registro Geral de Alunos', ext:'doc', file:'arq/REGISTRO GERAL DE ALUNOS.docx', desc:'Cadastro geral de alunos', category:'Registros', status:'Disponível' },
  { name:'Novos Associados FMTC-MMA', ext:'doc', file:'arq/NOVOS ASSOCIADOS FMTC-MMA.docx', desc:'Relação de novos associados', category:'Registros', status:'Disponível' },
  { name:'Lista de chamada atualizada Dezembro', ext:'doc', file:'', desc:'Documento institucional em preparação', category:'Registros', status:'Em preparação' },
  { name:'SITE DA FMTC-MMA 0002', ext:'doc', file:'', desc:'Documento institucional em preparação', category:'Institucional', status:'Em preparação' }
];

const FILIACAO_DECLARACAO = 'Solicitamos a inscrição e registro na FEDERAÇÃO DE MUAY THAI CHAIYA E ARTES MARCIAIS MISTAS DO ESTADO DE MINAS, declarando estarmos cientes das condições as quais nos submeteremos, obedecendo: códigos, estatutos, provimentos e regimento, bem como na legislação brasileira reguladora da matéria. Acatamos quaisquer decisões tomadas pelas autoridades da federação e afirmamos que as declarações prestadas são verdadeiras.';

const FILIACAO_DOCUMENTOS = [
  'Xerox do CGC ou CNPJ',
  'Xerox do Alvará',
  'Ficha de filiação corretamente preenchida e assinada pelo solicitante',
  'Comprovante bancário de depósito'
];

const FILIACAO_CAMPOS_ATLETA = [
  'Foto 3x4',
  'Data de preenchimento',
  'Nome do atleta',
  'Filiação (pai e mãe)',
  'Data de nascimento',
  'RG e CPF',
  'Escolaridade e profissão',
  'Endereço completo (nº, bairro, cidade e estado)',
  'Telefone fixo, celular e operadora',
  'Nome da academia e nome do professor',
  'Modalidade(s) praticada(s)',
  'Cadastro recebido/revisado/autorizado (campos de controle)'
];

const FILIACAO_CAMPOS_EQUIPE = [
  'Nome da equipe/clube/academia',
  'Responsável legal',
  'CNPJ e alvará',
  'Cidade e estado de atuação',
  'Contato institucional',
  'Comprovante bancário de depósito',
  'Documentação solicitada conforme o tipo de filiação'
];

/* ── MARTIAL ARTS DATA ─────────────── */

const MARTIAL_ARTS = [
  {
    slug:'muay-thai', name:'Muay Thai', icon:'🥊',
    resumo:'O Muay Thai é um esporte de contato competitivo onde dois combatentes lutam um contra o outro usando certas regras de contato, com o objetivo de simular partes do combate corpo-a-corpo verdadeiro. O Foco do Muay Thai é o combate em pé e contato pleno. Criado por Tailandeses, foi desenvolvido há cerca de dois mil anos, sendo atualmente considerada uma das mais poderosas lutas de contato do mundo.',
    detalhes:'Esta disciplina física e mental que inclui golpes de combate em pé, é conhecida como "a arte das oito armas", pois caracteriza-se pelo uso combinado de punhos, cotovelos, joelhos, canelas e pés, estando associada a uma boa preparação física que a torna uma luta de contato total bastante eficiente. As suas raízes encontram-se no muay boran, uma arte ancestral desenvolvida a partir de uma forma de luta designada de chupasart. A palavra muay, que se refere a "combate" ou "luta", deriva do sânscrito Mavya que significa "unir". Um praticante de muay thai é conhecido por nak muay.',
    vinculo:'O Muay Thai Chaiya é a modalidade principal e fundadora da FMTC-MMA. A federação regulamenta exames de graduação (Prajied), certificação de faixas, campeonatos e seminários técnicos. Registrada na WMF, IFMA e CBMT.',
    gradIntro:'O sistema de prajieds (faixas de braço) marca a evolução do lutador.',
    graduacao: [
      {cor:'Prajied Branca',hex:'#eee',desc:'Tempo médio: 6 meses'},
      {cor:'Prajied Laranja',hex:'#f57c00',desc:'Tempo médio: 6 meses'},
      {cor:'Laranja com Azul',hex:'linear-gradient(90deg,#f57c00,#1565c0)',desc:'Tempo médio: 6 meses'},
      {cor:'Prajied Azul',hex:'#1565c0',desc:'Tempo médio: 6 meses'},
      {cor:'Azul com Amarela',hex:'linear-gradient(90deg,#1565c0,#fbc02d)',desc:'Tempo médio: 6 meses'},
      {cor:'Prajied Amarela',hex:'#fbc02d',desc:'Tempo médio: 6 meses'},
      {cor:'Amarela com Verde',hex:'linear-gradient(90deg,#fbc02d,#2e7d32)',desc:'Tempo médio: 6 meses'},
      {cor:'Prajied Verde',hex:'#2e7d32',desc:'Tempo médio: 6 meses'},
      {cor:'Verde com Marrom',hex:'linear-gradient(90deg,#2e7d32,#6d4c41)',desc:'Tempo médio: 6 meses'},
      {cor:'Prajied Marrom',hex:'#6d4c41',desc:'Tempo médio: 6 meses'},
      {cor:'Marrom com Preta',hex:'linear-gradient(90deg,#6d4c41,#212121)',desc:'Tempo médio: 6 meses'},
      {cor:'Prajied Preta',hex:'#212121',desc:'Instrutor Auxiliar'},
      {cor:'Preta com Branca',hex:'linear-gradient(90deg,#212121,#eee)',desc:'Instrutor'},
      {cor:'Preta com Amarela',hex:'linear-gradient(90deg,#212121,#fbc02d)',desc:'Professor'},
      {cor:'Preta com Vermelha',hex:'linear-gradient(90deg,#212121,#c62828)',desc:'Mestre'},
      {cor:'Prajied Prata',hex:'#bdbdbd',desc:'Grão Mestre'},
      {cor:'Prajied Ouro',hex:'#b8860b',desc:'Título Honorífico Máximo'}
    ],
    tecnico:'Equipamento: luvas, caneleiras, bandagens e protetores bucais certificados pelo Conselho Mundial de Muay Thai. O Prajied (corda trançada no braço) é obrigatório para provar o grau de aprendizagem. O método de treino desenvolve força, explosão, flexibilidade ativa, velocidade e excelente resistência cardiovascular.',
    fonte:'https://pt.wikipedia.org/wiki/Muay_thai',
    matchKey:'Muay Thai'
  },
  {
    slug:'boxe-chines', name:'Boxe Chinês', icon:'🐉',
    resumo:'Boxe Chinês é dividido em Sanshou e Sanda. O Sanshou, literalmente "Mãos Livres", é colocar em prática todas técnicas de ataque e defesa do Wushu. Possui grande história e aceitação pelo público chinês, com regulamentos criados durante a Dinastia Song (960-1279).',
    detalhes:'A Dinastia Tang (618-907) estabeleceu o método TA LEITAI (luta sobre plataformas elevadas a 3 metros). O Sanshou teve seu ponto de partida como esporte contemporâneo em 1990, quando o comitê organizador dos XI Jogos Asiáticos incluiu o Wushu como esporte oficial. A Federação Internacional de Wushu foi fundada nesse ano. Atualmente as competições são levadas em mais de 95 países. O Sanda é semelhante ao Sanshou, mas permite joelhadas e cotoveladas.',
    vinculo:'O Boxe Chinês é uma das 12 modalidades regulamentadas pela FMTC-MMA. O Professor Daniel Soares Guimarães (Faixa Preta) é o principal referente da modalidade na federação.',
    graduacao:null,
    tecnico:'Equipamento Sanshou: protetor bucal, capacete, protetor de tórax, protetor de canela, luvas de 8oz (até 65kg) ou 10oz (acima de 65kg) e coquilha. Sanda: luvas de boxe, coquilha e protetor de dentes. Modalidade baseia-se nos diversos estilos de luta do norte e sul da China.',
    fonte:'https://marcosjiujitsu.wordpress.com/2011/06/03/o-que-e-boxe-chines-sanda/',
    matchKey:'Boxe Chinês'
  },
  {
    slug:'boxe', name:'Boxe', icon:'🥊',
    resumo:'Em aproximadamente 3000 a.C., o Boxe surgiu no Egito como peça integrante das festas do Faraó. Chegou nas Olimpíadas durante o século VII a.C. Renasceu em 1880 na Inglaterra e voltou ao auge nos Jogos Olímpicos de St-Louis em 1904 com sete categorias de peso.',
    detalhes:'A Federação Internacional de Boxe Amador difundiu-se nos Jogos de Antuérpia 1920. Para o Rio 2016, homens lutam sem capacete e camisa. O boxe feminino garantiu espaço nas Olímpiadas de Londres 2012. Combates Olímpicos: 3 rounds de 3 min (masculino) e 4 rounds de 2 min (feminino). Ringue de 7,8m². Não são válidos golpes abaixo da cintura.',
    vinculo:'O Boxe é uma das 12 modalidades regulamentadas pela FMTC-MMA, praticada em diversas academias filiadas como complemento ao Muay Thai.',
    graduacao:null,
    tecnico:'Golpes: Cruzado (curto na lateral), Jab (rápido, mão da frente), Direto (potente, mão de trás), Gancho (região da cintura), Swing (diagonal), Uppercut (de baixo para cima). Categorias masculinas: Mosca-ligeiro (49kg) a Superpesado (+91kg). Femininas: Mosca (51kg), Leve (60kg), Meio-pesado (81kg).',
    fonte:'http://www.infoescola.com/esportes/boxe',
    matchKey:'Boxe'
  },
  {
    slug:'capoeira', name:'Capoeira', icon:'🪘',
    resumo:'A capoeira é uma expressão cultural brasileira caracterizada por seus movimentos ágeis e harmoniosos, em ritmo de música e aspectos coreográficos. Os praticantes utilizam mais os movimentos com os pés e a cabeça e menos as mãos.',
    detalhes:'Surgiu no Brasil como forma de resistência dos escravos africanos na época colonial. Consolidou-se no Quilombo dos Palmares. Foi proibida até 1930, quando Mestre Bimba apresentou a luta para o presidente Getúlio Vargas, que a transformou em esporte nacional. O principal instrumento é o Berimbau, constituído de arame, pau e cabaça.',
    vinculo:'A Capoeira é uma das 12 modalidades da FMTC-MMA. O Presidente Mestre Robson Costa possui graduação de Mestre de Capoeira pelo GCLN (1992) e AEEB (2012).',
    graduacao:[
      {cor:'Angola',hex:'#fbc02d',desc:'Estilo mais antigo, golpes próximos ao chão, ritmo lento'},
      {cor:'Regional',hex:'#2e7d32',desc:'Ritmo mais rápido e seco, malícia mantida'},
      {cor:'Contemporânea',hex:'#1565c0',desc:'Estilo atual, une Angola e Regional'}
    ],
    tecnico:'A prática provoca aumento da frequência cardíaca, desenvolvimento muscular, queima de gordura, flexibilidade e resistência física. Gingado é o movimento fundamental de todo o corpo de forma ritmada.',
    fonte:'http://www.infoescola.com/artes-marciais/capoeira/',
    matchKey:'Capoeira'
  },
  {
    slug:'defesa-pessoal', name:'Defesa Pessoal', icon:'🛡️',
    resumo:'Defesa pessoal, ou autodefesa, é um conjunto de vários métodos que têm como fim neutralizar um ataque pessoal. As técnicas têm origem nas artes marciais tradicionais e foram adaptadas para uso civil.',
    detalhes:'Utilizam-se principalmente bloqueios, retenções e alavancas para dominar o adversário rapidamente, encurtando o tempo de combate. No âmbito civil tenta-se dominar sem provocar danos excessivos. No âmbito militar utilizam-se técnicas com maior poder ofensivo, como o Systema (Rússia) e o Krav Magá (Israel).',
    vinculo:'A Defesa Pessoal é uma das modalidades complementares da FMTC-MMA, integrada ao treinamento de diversas academias filiadas como componente de formação prática dos atletas.',
    graduacao:null,
    tecnico:'Técnicas básicas: palma da mão, articulações dos dedos, golpes de joelho. Avançadas: desequilíbrios, imobilizações, defesa contra armas brancas e de fogo. Pode ser complementada com armas próprias ou impróprias disponíveis no momento do conflito.',
    fonte:'https://pt.wikipedia.org/wiki/Defesa_pessoal',
    matchKey:'Defesa Pessoal'
  },
  {
    slug:'judo', name:'Judô', icon:'🥋',
    resumo:'"Judô" traduzido do japonês significa "o caminho suave". Criado pelo professor de Educação Física Jigoro Kano, que fundou o Instituto Kodokan em 1882. O código moral baseia-se em: cortesia, coragem, honestidade, honra, modéstia, respeito, autocontrole e amizade.',
    detalhes:'Em 1886, uma competição propagou a modalidade no Japão. Chegou ao Brasil entre 1920 e 1930 com imigrantes japoneses. A consagração veio com a Academia Ogawa em 1938. A CBJ foi instituída em 18/03/1969. Chiaki Ishii conquistou o primeiro triunfo olímpico brasileiro em Munique 1972.',
    vinculo:'O Judô é uma das 12 modalidades regulamentadas pela FMTC-MMA. O Mestre Robson Costa possui Faixa Marrom de Judô pela Liga Mineira de Judô (2016).',
    graduacao:[
      {cor:'Branca',hex:'#eee',desc:'Iniciante'},
      {cor:'Azul',hex:'#1565c0',desc:'5º Kyu'},
      {cor:'Amarela',hex:'#fbc02d',desc:'4º Kyu'},
      {cor:'Laranja',hex:'#f57c00',desc:'3º Kyu'},
      {cor:'Verde',hex:'#2e7d32',desc:'2º Kyu'},
      {cor:'Marrom',hex:'#6d4c41',desc:'1º Kyu'},
      {cor:'Preta',hex:'#212121',desc:'1º ao 5º Dan'},
      {cor:'Coral',hex:'linear-gradient(90deg,#c62828,#fff)',desc:'6º ao 8º Dan'},
      {cor:'Vermelha',hex:'#c62828',desc:'9º ao 10º Dan'}
    ],
    tecnico:'Área de combate: 10m². Vestimenta: kimono azul ou branco. Duração: 5 min (homens) / 4 min (mulheres). Pontuações: Ippon (finaliza luta), Wazari (parcial), Yuko (lateral). Categorias: Ligeiro (60kg) a Pesado (+100kg masc / +78kg fem). Proibidos socos e chutes.',
    fonte:'http://www.infoescola.com/esportes/judo/',
    matchKey:'Judô'
  },
  {
    slug:'jiu-jitsu', name:'Jiu-Jítsu', icon:'🤼',
    resumo:'Jiu Jitsu é uma arte marcial de origem incerta. A tradução é "arte versátil, suave". Usa-se a força e o peso do adversário contra ele, sendo permitido lançar o adversário em queda.',
    detalhes:'A principal característica são golpes de articulação: estrangulamentos e torções de braço, tornozelo, etc. O Jiu Jitsu foi trazido ao Brasil em 1915 por Esai Maeda Koma (Conde Koma). Carlos Gracie, aos 15 anos, aprendeu com o japonês e em 1925 abriu a primeira Academia Gracie no Rio. Atualmente o Jiu Jitsu brasileiro é mais difundido que o japonês original.',
    vinculo:'O Jiu Jitsu é uma das modalidades centrais da FMTC-MMA. O Mestre Robson Costa possui Faixa Preta de Jiu Jitsu (CBJJ-J nº 050/14, FMJJ nº 315, e Junior Top Team). Diversos atletas filiados praticam a modalidade.',
    gradIntro:'A progressão é dividida por idade, respeitando o desenvolvimento de cada aluno.',
    graduacao:[
      {secao:'INFANTIL / JUVENIL (ATÉ 15 ANOS)'},
      {cor:'Faixa Cinza',hex:'#9e9e9e',desc:'4 a 15 anos — lisa até 4 graus'},
      {cor:'Faixa Amarela',hex:'#fbc02d',desc:'7 e 15 anos — lisa até 4 graus'},
      {cor:'Faixa Laranja',hex:'#f57c00',desc:'10 a 15 anos — lisa até 4 graus'},
      {cor:'Faixa Verde',hex:'#2e7d32',desc:'13 a 15 anos — lisa até 4 graus'},
      {secao:'ADULTO (A PARTIR DE 16 ANOS)'},
      {cor:'Faixa Branca',hex:'#eee',desc:'Tempo indeterminado — foco nos fundamentos'},
      {cor:'Faixa Azul',hex:'#1565c0',desc:'Tempo médio: 2 anos — desenvolvimento do jogo'},
      {cor:'Faixa Roxa',hex:'#7b1fa2',desc:'Tempo médio: 1,5 anos — combinações e estratégia'},
      {cor:'Faixa Marrom',hex:'#6d4c41',desc:'Tempo médio: 1 ano — refinamento técnico'},
      {cor:'Faixa Preta',hex:'#212121',desc:'O início de um novo ciclo de maestria'}
    ],
    tecnico:'Tatame mínimo: 64m² (área interna 36m²). Proibido: atingir genitais, morder, olhos, puxar cabelo, torcer dedos. Permitido luta de chão com ambos deitados.',
    fonte:'http://www.cbjj.com.br',
    matchKey:'Jiu Jitsu'
  },
  {
    slug:'kick-boxing', name:'Kick Boxing', icon:'🦵',
    resumo:'O Kickboxing é uma arte marcial híbrida que combina Muay Thai e Caratê. O termo foi introduzido na década de 1960 por Osamu Noguchi, promotor de boxe do Japão.',
    detalhes:'No sentido restrito inclui kickboxing japonês e americano, shoot boxing e K-1. No sentido amplo engloba todos os esportes de combate em pé com socos e chutes. O K-1 foi um dos maiores eventos. Em 2012 a organização passou para Glory Sports International. No Brasil surgiram os torneios WGP Kickboxing da CBKB em 2011.',
    vinculo:'O Kick Boxing é uma das 12 modalidades da FMTC-MMA. O Mestre Robson Costa possui Mestre Kick Boxing Faixa Preta 4º Dan pela AESC (02/02/2013).',
    graduacao:[
      {cor:'Branco',hex:'#eee',desc:'Iniciante'},
      {cor:'Laranja',hex:'#f57c00',desc:'Básico'},
      {cor:'Azul',hex:'#1565c0',desc:'Intermediário'},
      {cor:'Amarela',hex:'#fbc02d',desc:'Consolidação'},
      {cor:'Verde',hex:'#2e7d32',desc:'Avançado'},
      {cor:'Marrom (Senpai)',hex:'#6d4c41',desc:'Instrutor'},
      {cor:'Preto (Sensei)',hex:'#212121',desc:'Professor'},
      {cor:'Coral (Shihan)',hex:'linear-gradient(90deg,#c62828,#212121)',desc:'Mestre'},
      {cor:'Prata',hex:'#9e9e9e',desc:'Mestre sênior'},
      {cor:'Ouro',hex:'#b8860b',desc:'Grão-Mestre'}
    ],
    tecnico:'Modalidades: Musical Form, Point Fight (semi contact), Light Contact, Full Contact (chutes acima da cintura), Low Kick (caneladas nas coxas), K-1 Rules (joelhadas permitidas, sem cotoveladas). Homens: tronco nu nas modalidades de ringue.',
    fonte:'https://pt.wikipedia.org/wiki/Kickboxing',
    matchKey:'Kick Boxing'
  },
  {
    slug:'kung-fu', name:'Kung Fú', icon:'🐲',
    resumo:'O Kung Fu é a mais antiga de todas as artes marciais externas, originária da China. O registro histórico mais antigo data de 2674 a.C. A arte surgiu a partir da observação dos movimentos dos animais.',
    detalhes:'Estilos principais: Águia (torções), Dragão (movimentos longos), Chin\'Na (imobilização), Bêbado (flexibilidade), Garça Branca (ataques ágeis), Macaco (força das pernas), Shaolin do Norte (ataques agressivos), Leopardo (rápido e poderoso). Armas: Facão, San Tié Kan, Espada Imperial, Bastão, Lança.',
    vinculo:'O Kung Fú é uma das 12 modalidades da FMTC-MMA. O Mestre Magno Costa (reg. 355, AICCA) é o principal representante da modalidade. O Mestre Robson Costa possui Faixa Preta 1º Lota Kung-Fú (LDJA e UBIDKF, nº 082, 1995).',
    graduacao:null,
    tecnico:'A prática desenvolve reflexos rápidos, equilíbrio, consciência mental e física para defesa pessoal e coordenação motora. Celebridade mais importante mundial: Bruce Lee.',
    fonte:'http://www.infoescola.com/artes-marciais/kung-fu/',
    matchKey:'Kung'
  },
  {
    slug:'mma', name:'MMA', icon:'🏟️',
    resumo:'Mixed Martial Arts — Artes Marciais Mistas. País de origem Brasil, criador Carlos Gracie. Incluem tanto golpes de combate em pé quanto técnicas de luta no chão. Foco: nocaute, finalização, desistência, pontuação.',
    detalhes:'As raízes modernas estão em dois acontecimentos: as exibições de vale-tudo no Brasil (década de 1930, Carlos Gracie) e o shootwrestling japonês (1980s, Antonio Inoki). Em 1993, Rorion Gracie criou o primeiro torneio de UFC. Em 2001, Dana White comprou o UFC por 2 milhões de dólares, hoje estimado em mais de 1 bilhão.',
    vinculo:'O MMA é uma das modalidades centrais da FMTC-MMA. Diversos membros da diretoria e atletas competem profissionalmente em MMA, incluindo o Presidente Robson Costa e o Vice-Presidente Gevesan Neto (3 vitórias profissionais).',
    graduacao:null,
    tecnico:'Resultados: Nocaute (KO), Nocaute Técnico (TKO com variantes), Finalização, Decisão (unânime/dividida/maioria), Desqualificação. Equipamento: luvas de dedo aberto, coquilha, protetor bucal. Proibido: cabeçada, morder, olhos, cabelo, coluna, articulações pequenas.',
    fonte:'https://pt.wikipedia.org/wiki/Artes_marciais_mistas',
    matchKey:'MMA'
  },
  {
    slug:'taekwondo', name:'Taekwondo', icon:'🦶',
    resumo:'Taekwondo é uma Arte Marcial Coreana que originou um esporte de combate olímpico. Nos Jogos Olímpicos de 1988 foi desporto de exibição. Em 1993 foi adicionado ao programa olímpico oficial, integrando a partir dos Jogos de 2000.',
    detalhes:'As primeiras artes marciais coreanas desenvolveram-se com a fusão de estilos dos três antigos reinos coreanos (Taekkyeon). No Brasil chegou em Agosto de 1970 em São Paulo, trazido pelo grão-mestre Sang Min Cho. Princípios: Cortesia, Integridade, Perseverança, Autocontrole, Espírito Indomável.',
    vinculo:'O Taekwondo é uma das modalidades mais tradicionais da FMTC-MMA. O Mestre Robson Costa possui 4º Dan (WTCDKF). Diversos professores faixa preta atuam em nucleos filiados: Magno Candido da Silva, Silviano Dias, Thaner Alexsander, Luis Roberto Oliveira Junior, Jalmiro Bispo Tatu e Agnaldo Ferreira da Silva.',
    graduacao:[
      {cor:'Branca — 10º Gub',hex:'#eee',desc:'Inocência; estudante sem conhecimento anterior'},
      {cor:'Amarela — 9º Gub',hex:'#fbc02d',desc:'A Terra da qual uma planta brota e começa a germinar'},
      {cor:'Amarela Ponta Verde — 8º Gub',hex:'linear-gradient(90deg,#fbc02d,#2e7d32)',desc:'Transição para o crescimento'},
      {cor:'Verde — 7º Gub',hex:'#2e7d32',desc:'Crescimento da planta; habilidades se desenvolvendo'},
      {cor:'Verde Ponta Azul — 6º Gub',hex:'linear-gradient(90deg,#2e7d32,#1565c0)',desc:'Transição para o céu'},
      {cor:'Azul — 5º Gub',hex:'#1565c0',desc:'O Céu; a planta cresce até tornar-se árvore frondosa'},
      {cor:'Azul Ponta Vermelha — 4º Gub',hex:'linear-gradient(90deg,#1565c0,#c62828)',desc:'Transição para o perigo'},
      {cor:'Vermelha — 3º Gub',hex:'#c62828',desc:'Perigo; advertência para exercitar controle'},
      {cor:'Vermelha Ponta Preta — 2º Gub',hex:'linear-gradient(90deg,#c62828,#212121)',desc:'Transição para a maturidade'},
      {cor:'Preta — 1º Gub',hex:'#212121',desc:'Maturidade e habilidade; imunidade ao medo'},
      {cor:'Preta 1º a 3º Dan',hex:'#212121',desc:'Faixa preta graduada'},
      {cor:'Preta 4º Dan+',hex:'#212121',desc:'Mestre (a partir do 4º Dan)'},
      {cor:'Preta 7º Dan+',hex:'#212121',desc:'Grão-Mestre (a partir do 7º Dan)'}
    ],
    tecnico:'Combates: área 8m×8m, 3 rounds de 2 min com 1 min de pausa. Pontos: 1 (ataque ao colete), 3 (rotativo ao colete ou cabeça), 4 (rotativo à cabeça). Sistema eletrônico + IVR. Categorias Olímpicas: Homens 58/68/80/+80kg, Mulheres 49/57/67/+67kg. Juramentos: Atleta (respeito ao adversário e regulamentos) e Taekwondo (mundo mais pacífico, campeão da liberdade e justiça).',
    fonte:'Registros oficiais FMTC-MMA',
    matchKey:'Taekwondo'
  },
  {
    slug:'krav-maga', name:'Krav Maga', icon:'⚔️',
    resumo:'O Krav Maga é um sistema de defesa pessoal de origem israelense, desenvolvido para as Forças de Defesa de Israel. Combina técnicas de boxe, luta greco-romana, aikido, judô e karatê com treinamento realista de combate.',
    detalhes:null,
    vinculo:'O Krav Maga é uma das 12 modalidades da FMTC-MMA. O Mestre Robson Costa possui Faixa Preta Krav Maga Metsuyan (FMKMM, nº 022/17, 17/12/2016).',
    graduacao:null,
    tecnico:null,
    fonte:null,
    matchKey:'Krav Maga'
  }
];

const ART_DETAIL_SLUGS = [
  'muay-thai',
  'boxe-chines',
  'boxe',
  'capoeira',
  'defesa-pessoal',
  'judo',
  'jiu-jitsu',
  'kick-boxing',
  'kung-fu',
  'mma',
  'taekwondo'
];

const TAEKWONDO_RICH_CONTENT = {
  origemContexto: 'Arte Marcial Coreana com consolidação esportiva olímpica. Foi modalidade de exibição em 1988 e 1992, e passou ao programa olímpico oficial com integração a partir de 2000. No Brasil, chegou em agosto de 1970 em São Paulo, trazido pelo grão-mestre Sang Min Cho.',
  principios: ['Cortesia', 'Integridade', 'Perseverança', 'Autocontrole', 'Espírito Indomável'],
  sistemaPontos: [
    '1 ponto por ataque válido ao colete com o pé ou o punho',
    '3 pontos por ataque válido rotativo ao colete com o pé',
    '3 pontos por ataque válido à cabeça com o pé',
    '4 pontos por ataque válido rotativo à cabeça com o pé',
    '1 ponto por cada dois Kyung-gos ou um Gam-jeom cometido pelo adversário'
  ],
  condicoesVitoria: [
    'Nocaute (KO)',
    'Árbitro para o combate (RSC)',
    'Resultado final (PTF)',
    'Margem de pontos (PTG)',
    'Morte súbita (SDP)',
    'Superioridade (SUP)',
    'Desistência (WDR)',
    'Desqualificação (DSQ)',
    'Decisão punitiva do árbitro central (PUN)'
  ],
  categoriasOlimpicas: [
    'Homens: abaixo de 58 kg, abaixo de 68 kg, abaixo de 80 kg, acima de 80 kg',
    'Mulheres: abaixo de 49 kg, abaixo de 57 kg, abaixo de 67 kg, acima de 67 kg'
  ],
  juramentos: [
    'Juramento do atleta: respeitar o adversário, competir com lealdade, respeitar regulamentos, juízes e superiores.',
    'Juramento do Taekwondo: observar as regras, respeitar instrutores e colegas, não fazer mau uso da arte, construir um mundo mais pacífico e ser campeão da liberdade e justiça.'
  ],
  numeros: [
    '1 = Hanã',
    '2 = Dulh',
    '3 = Set',
    '4 = Net',
    '5 = Da sôt',
    '6 = Io sôt',
    '7 = Il gob',
    '8 = Io dol',
    '9 = Arrob',
    '10 = Iol'
  ],
  comandos: [
    'KianLhe (saudação)',
    'Murupkuro (ajoelhar)',
    'Andja (sentar)',
    'Irosô (levantar)',
    'Tchariot (sentido)',
    'JumBi (preparar)',
    'Shidjak (começar)',
    'Chio (descansar)',
    'Kuman (cessar)',
    'Parô (sentido cessar)',
    'Retchiô (à vontade)',
    'Tiro-Tora (meia volta)',
    'Dong-Gong (aluno)',
    'Tchagui (soco)',
    'Thirigo (socos)',
    'Ap (frente)',
    'Yop (lado)',
    'Are (baixo)',
    'Olgul (alto)',
    'Uen (esquerda)',
    'Orum (direita)',
    'Dodjan (sala de treino)',
    'Dobok (roupa de treino)'
  ],
  departamentoResponsavel: 'Departamento técnico da modalidade: Mestre Robson Teixeira da Costa (4º Dan em Taekwondo — WTCDKF).'
};

function normalizeText(value) {
  return (value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/-/g, ' ')
    .toLowerCase();
}

function getArtCards() {
  return MARTIAL_ARTS.filter(art => ART_DETAIL_SLUGS.includes(art.slug));
}

function getArtMatchKeys(art) {
  const keys = [art.matchKey, art.name, art.slug];
  if (art.slug === 'kung-fu') keys.push('kung fu', 'kung-fu', 'kungu-fu');
  if (art.slug === 'jiu-jitsu') keys.push('jiu jitsu', 'jiujitsu', 'jiu-jítsu');
  if (art.slug === 'boxe-chines') keys.push('sanda', 'sanshou', 'boxe chines');
  return keys.map(normalizeText);
}

function athleteIncludesArt(athlete, art) {
  const modalities = normalizeText(athlete.m);
  return getArtMatchKeys(art).some(key => modalities.includes(key));
}

function getArtRelations(art) {
  const teachers = ATHLETES.filter(a =>
    ['mestre', 'professor', 'instrutor', 'monitor', 'grao-mestre', 'grão-mestre'].includes(normalizeText(a.l)) &&
    athleteIncludesArt(a, art)
  );
  const athletes = ATHLETES.filter(a =>
    !['mestre', 'professor', 'instrutor', 'monitor', 'grao-mestre', 'grão-mestre'].includes(normalizeText(a.l)) &&
    athleteIncludesArt(a, art)
  );
  const teams = [...new Set([...teachers, ...athletes].map(person => person.t).filter(Boolean))];
  const gyms = GYMS.filter(gym => teams.includes(gym.name));
  return { teachers, athletes, teams, gyms };
}

function renderListOrUpdate(items, listClass = '') {
  if (!items || !items.length) {
    return '<p class="art-update">Informações em breve.</p>';
  }
  return `<ul class="${listClass}">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function renderGradTable(art) {
  if (!art.graduacao || !art.graduacao.length) {
    return '<p class="art-update">Informações em breve.</p>';
  }
  return `
    ${art.gradIntro ? `<p class="grad-intro">${art.gradIntro}</p>` : ''}
    <div class="grad-table">
      ${art.graduacao.map(g => g.secao
        ? `<div class="grad-section-header">${g.secao}</div>`
        : `<div class="grad-row">
            <span class="grad-swatch" style="background:${g.hex}"></span>
            <div class="grad-info">
              <strong>${g.cor}</strong>
              <span>${g.desc}</span>
            </div>
          </div>`).join('')}
    </div>`;
}

/* Full athlete roster from official federation records */
const ATHLETES = [
  {n:'Robson Teixeira da Costa',r:'002',m:'Muay Thai, Taekwondo, Jiu Jitsu, Judô, Boxe, MMA',b:'Prajied Coral',l:'mestre',t:'Mago Team Centro Contagem'},
  {n:'Gevesan Antônio da Silva Neto',r:'003',m:'Muay Thai, Taekwondo, Jiu Jitsu, Boxe, MMA',b:'Prajied Preto',l:'mestre',t:'Naseveg Contagem'},
  {n:'Antônio Brandão da Silva Neto',r:'004',m:'Muay Thai, Jiu Jitsu, Boxe, MMA',b:'Prajied Verde',l:'instrutor',t:'Mago Team Centro Contagem'},
  {n:'Jacqueline Maria de Souza Pereira',r:'005',m:'Muay Thai, Jiu Jitsu, Boxe, MMA',b:'Prajied Verde',l:'instrutor',t:'Mago Team Centro Contagem'},
  {n:'Rafael Ribeiro Silva',r:'006',m:'Jiu Jitsu, MMA',b:'Faixa Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Diego Emílio dos Reis',r:'007',m:'Muay Thai, Jiu Jitsu, Boxe, MMA',b:'Prajied Verde',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Fernando Henrique Faria',r:'008',m:'Muay Thai, Jiu Jitsu, Boxe, MMA',b:'Prajied Verde',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Manoel Jandir de Almeida Junior',r:'009',m:'Muay Thai, Jiu Jitsu, Boxe, MMA',b:'Prajied Laranja',l:'aluno',t:'Mago Team Barro Preto Centro BH'},
  {n:'Roberta Keyla da Silveira Costa',r:'010',m:'Muay Thai, Jiu Jitsu, Boxe, MMA',b:'Prajied Verde',l:'instrutor',t:'Mago Team Centro Contagem'},
  {n:'Claudio Adriano de Carvalho',r:'011',m:'Muay Thai, Taekwondo',b:'Prajied Verde',l:'instrutor',t:'Mago Team Centro Contagem'},
  {n:'Pedro Antonio Cardoso Feraz',r:'012',m:'Muay Thai',b:'Prajied Marrom c/ Preto',l:'instrutor',t:'Mago Team Centro Contagem'},
  {n:'Paulo Henrique Neves da Silva',r:'013',m:'Muay Thai, MMA',b:'Prajied Verde',l:'instrutor',t:'Mago Team Centro Contagem'},
  {n:'Magno Candido da Silva',r:'014',m:'Taekwondo',b:'Faixa Preta',l:'professor',t:'Mago Team Amazonas Contagem'},
  {n:'Silviano Dias',r:'015',m:'Taekwondo',b:'Faixa Preta',l:'professor',t:'Mago Team Tropical Betim'},
  {n:'Thaner Alexsander',r:'016',m:'Taekwondo',b:'Faixa Preta',l:'professor',t:'Mago Team Barreiro de Baixo BH'},
  {n:'Luis Roberto Oliveira Junior',r:'017',m:'Taekwondo',b:'Faixa Preta',l:'professor',t:'Mago Team Barreiro de Baixo BH'},
  {n:'Jalmiro Bispo Tatu',r:'018',m:'Taekwondo',b:'Faixa Preta',l:'professor',t:'Mago Team Barreiro de Baixo BH'},
  {n:'Agnaldo Ferreira da Silva',r:'019',m:'Muay Thai, Taekwondo',b:'Prajied Preto',l:'professor',t:'Mago Team Industrial Contagem'},
  {n:'Douglas Rodrigues de Souza',r:'020',m:'Muay Thai, MMA',b:'Prajied Marrom',l:'instrutor',t:'Mago Team Vila Pinho'},
  {n:'Jucimar Alves da Silva',r:'021',m:'Muay Thai, MMA',b:'Prajied Marrom',l:'instrutor',t:'Mago Team Vila Pinho'},
  {n:'Alex Borges Gama',r:'022',m:'Muay Thai, Taekwondo',b:'Prajied Marrom',l:'instrutor',t:'Mago Team Vila Pinho'},
  {n:'Allan dos Santos Paiva Ferreira',r:'023',m:'Muay Thai',b:'Prajied Azul',l:'instrutor',t:'Mago Team Vila Pinho'},
  {n:'Emelly Rodrigues Cristo',r:'024',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Daniel Soares Guimarães',r:'025',m:'Boxe Chinês',b:'Faixa Preta',l:'professor',t:'Mago Team Horto BH'},
  {n:'Dimitry Adonai Costa de Carvalho',r:'026',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Ronan Raimundo Figueiredo Gonçalves',r:'027',m:'Muay Thai',b:'Prajied Marrom',l:'instrutor',t:'Mago Team Vila Pinho'},
  {n:'Rute Gabriela dos Santos',r:'028',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Ianca da Paixão Araujo',r:'029',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Valeria Diniz Ribeiro',r:'030',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Lilith da Paixão Borges Gama',r:'031',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Diogo Glaydson dos Santos',r:'032',m:'Muay Thai',b:'Prajied Verde',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Kaio Luigi Almeida Peixoto',r:'033',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Lucas Daniel Pereira Gonçalves',r:'034',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Adriano Contadini Nascimento',r:'035',m:'Muay Thai',b:'Prajied Amarelo',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Alexandre Basttos',r:'036',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Renato Pereira Dias',r:'037',m:'Muay Thai',b:'Prajied Amarelo',l:'monitor',t:'Soul of Lion'},
  {n:'Matheus Luiz Viana Esteves',r:'038',m:'Muay Thai',b:'Prajied Marrom',l:'instrutor',t:'Mago Team Centro Contagem'},
  {n:'Évisson Melato Santos',r:'039',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Gabriel de Freitas Silva',r:'040',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Gledson Guilherme dos Santos',r:'041',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Isabela Maciel de Oliveira',r:'042',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'João Vitor Adelário Rocha Diniz',r:'043',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Heder Alan de Deus Silva',r:'044',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Marcio Vinicius Gomes Silva',r:'045',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Marco Túlio Gomes de Gouveia',r:'046',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Marcos Fernando Ferreira Costa',r:'047',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Marta Cristina Mota de Souza',r:'048',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Rômulo Augusto Barbosa de Souza',r:'049',m:'Muay Thai',b:'Prajied Amarelo',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Sophia Virginia Prado e Castro',r:'050',m:'Muay Thai',b:'Prajied Verde',l:'instrutor',t:'Mago Team Centro Contagem'},
  {n:'Sheila Ferreira Lima',r:'051',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Taynara Noely Gomes de Araujo',r:'052',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Tamyres Estefane Gomes de Araujo',r:'053',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Wiliam Salomão do Nascimento',r:'054',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Bolivia'},
  {n:'Thiago Nascimento Santos',r:'055',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Gabriela Dutra Donoso Ponce de Leon',r:'058',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Magda Viana de Souza',r:'059',m:'Muay Thai',b:'Prajied Amarelo',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Lucas Henrique Cruz',r:'060',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Rânia Stephanie Furtado',r:'061',m:'Muay Thai',b:'Prajied Amarelo',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Dúllio Sérgio Diniz Junior',r:'062',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Davi Emmanuel Lisboa Lopes',r:'063',m:'Muay Thai',b:'Prajied Verde',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Fabiano Fernandes Nunes',r:'064',m:'Muay Thai',b:'Prajied Verde',l:'aluno',t:'Mago Team Esmeraldas'},
  {n:'Fernanda Lourdes Braga',r:'065',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Maria Marlene Magalhães Souza',r:'066',m:'Muay Thai',b:'Prajied Amarelo',l:'instrutor',t:'Mago Team Centro Contagem'},
  {n:'Vitor Moreira dos Santos',r:'067',m:'Muay Thai',b:'Prajied Amarelo',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Alysson Junior de Souza Lopes',r:'068',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Naseveg Contagem'},
  {n:'Renata Caroline Dias Teixeira',r:'069',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Jordana Daniele Coelho da Silva',r:'070',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Aldete de Souza Matos Cezar',r:'071',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Fabiano Almeida Diniz',r:'072',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Vittoria Alice Monteiro Lonato Silva',r:'073',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Victor Guilherme Braga Santos',r:'075',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Magda Oiama de Souza',r:'076',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Raone Mateus Rodrigues',r:'077',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Walison Marcos Ferreira',r:'078',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Weberson Bruno Santos dos Reis',r:'079',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Roger Avelino Porto',r:'080',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Amanda do Nascimento Camelo',r:'081',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Rassima Luisa Rinco Lopes',r:'082',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Cleuzeni Ventura Fernandes',r:'083',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Daniel Duarte Augusto',r:'084',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Delvanir Pedro Ramos de Oliveira',r:'085',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Diego Augusto Lopes Matos',r:'086',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Diego Rocha Santos França',r:'087',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Douglas Macarlos dos Santos',r:'088',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Edna Alves Silva',r:'089',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Elian Garcia de Lima',r:'090',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Eder Alan de Deus da Silva',r:'091',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Fausto Euclides dos Santos Junior',r:'092',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Filemon Junio Souza Cardoso',r:'093',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Gabriel Cocovick Cheloni',r:'094',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Jessica Santos Ferreira Prazeres',r:'095',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Licacia Carvalho',r:'096',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Lingia Menezes de Araujo',r:'097',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Luciana Costa Batalha da Silva',r:'098',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Matheus Felipe Silva Santos',r:'099',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Wilian Ferreira Lopes',r:'100',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Welingnton Gomes Generoso',r:'101',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Samuel Marques de Souza Bruno',r:'102',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Cleber Antonio Costa',r:'103',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Devisson Silva Santos',r:'104',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Eduardo Andrade Ancantara',r:'105',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Ezequiel Thiago de Souza Lopes',r:'106',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Felipe Gomes de Souza',r:'107',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Gabriel Pereira Diniz',r:'108',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Hiago Gomes dos Santos',r:'109',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Lucas Augusto Diniz',r:'110',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Luiz Gustavo Resende de Carvalho',r:'111',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Renato Henrique Diniz Resende',r:'112',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Rosangela Fatima Diniz Pereira',r:'113',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Thiago Alexandre Moura Oliveira',r:'114',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Naseveg Contagem'},
  {n:'Eduardo Coutinho de Almeida',r:'116',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Naseveg Contagem'},
  {n:'Felipe de Paula Ribeiro',r:'117',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Naseveg Contagem'},
  {n:'Adriana Álvares Tângari',r:'118',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Alessandro Pereira Julio',r:'119',m:'Muay Thai, Boxe',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Ana Carolina Diana Gonçalves',r:'120',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Andre Luiz Delasalle da Silva',r:'121',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Benicio Ferreira Freitas',r:'122',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Brendo Oliveira Gama',r:'123',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Bruno Miranda Neves da Silva',r:'124',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Camila Gonzaga Borba',r:'125',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Carlos Eduardo Aguiar de Almeida',r:'126',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Cauã Alejandro Rodrigues',r:'127',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Chiara Rodrigues Costa',r:'128',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Douglas Ênio de Oliveira',r:'129',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Gabriel Araújo Santos Pinto',r:'130',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Gabriele Fernanda Bueno Felicíssimo',r:'131',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Gislene Araújo Costa Cabrerisso',r:'132',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Graciele Mara da Silva',r:'133',m:'Muay Thai',b:'Prajied Amarelo',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Guilherme Henrique Gonçalves Marinho',r:'134',m:'Muay Thai',b:'Prajied Branco',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Guilherme Miguel dos Reis Paiva',r:'135',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Gustavo Araujo Santos Pinto',r:'136',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Gustavo Caetano Casagrande',r:'137',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Gustavo Caldeira dos Santos',r:'138',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Heliete Maria dos Santos',r:'139',m:'Muay Thai',b:'Prajied Amarelo',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Ícaro Fernando Caetano Barroso',r:'140',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'ISIS Mendes Ferreira',r:'141',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Jackson Tângari Campos',r:'142',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'João Henrique Alves de Souza Rocha',r:'143',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'João Pedro dos Santos Tarley',r:'144',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Kauã Tângari Campos',r:'145',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Micael Webster da Silva Foreaux Macedo',r:'146',m:'Muay Thai, Boxe, Jiu Jitsu, MMA',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Nathália de Lourdes Alves Ferreira',r:'147',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Príscila Oliveira Ferreira',r:'148',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Rafael Dias Vieira da Costa',r:'149',m:'Muay Thai',b:'Prajied Amarelo',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Shirley Lima Melo',r:'150',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Thiago Rodrigues Bonutti',r:'151',m:'Muay Thai, Boxe',b:'Intermediário',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Alan Cristhian Ferraz Carvalhais',r:'152',m:'Jiu Jitsu, MMA',b:'Faixa Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Eduardo de Oliveira',r:'153',m:'Jiu Jitsu, MMA',b:'Faixa Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Fábio Fídelis Costa',r:'154',m:'Jiu Jitsu, MMA',b:'Faixa Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Filipe Castro Cota Felix',r:'155',m:'Jiu Jitsu, MMA',b:'Faixa Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Laisla Campos da Fonseca',r:'156',m:'Jiu Jitsu, MMA',b:'Faixa Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Luiz Felipe Diniz Souza Barbacelos',r:'157',m:'Jiu Jitsu, MMA',b:'Faixa Roxa',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Paulo Henrique dos Santos Felomeno',r:'158',m:'Jiu Jitsu, MMA',b:'Faixa Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Paulo Rodrigo Silva Gomes',r:'159',m:'Jiu Jitsu, MMA',b:'Faixa Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Kelly Polliana de Souza Lima',r:'160',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Vinícios Roberto de Vasconcelos Miranda',r:'161',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Diego Meira Rumão',r:'162',m:'Muay Thai',b:'Prajied Branco',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Ciro Samuel Campos',r:'163',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'André Vinícius Arcanjo Diniz Sousa',r:'164',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Andrea Aparecida Moura do Couto',r:'165',m:'Boxe',b:'Iniciante',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Sônia Rosa Marinho Apolinário',r:'160',m:'Muay Thai',b:'Prajied Amarelo',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Ciro de Oliveira Simões',r:'195',m:'Muay Thai',b:'Prajied Branco',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Adair Rodrigues Junior',r:'323',m:'Muay Thai, Taekwondo, Judô, Jiu Jitsu, Karate, Krav Maga, MMA',b:'Mestre',l:'mestre',t:'Junior Top Team'},
  {n:'Adilson Conceição Silva',r:'324',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Leandro Jardeu Verdigal',r:'325',m:'Muay Thai',b:'Prajied Branco',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Alan Henrique Pessoa',r:'326',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Washington Justo de Miranda',r:'327',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Lucas Henrique Holanda Soares',r:'329',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Deyson Bruno Silva Thai',r:'330',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'William Alves Vieira',r:'331',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Liliane Neres Cabral',r:'332',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Betim'},
  {n:'Lorena Carazza Alves',r:'333',m:'Muay Thai, Jiu Jitsu',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Mariana Rena Moreira',r:'334',m:'Muay Thai, Jiu Jitsu',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Paula Fernanda da Silva Santos',r:'335',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Anderson Correa da Silva',r:'336',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Marco Túlio Souza Santos',r:'337',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Amanda de Castro Silva',r:'338',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Edimilson Wander H. Junior Ferreira Santos',r:'340',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Raquel de Oliveira',r:'341',m:'Muay Thai',b:'Prajied Azul',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Renato Cesar de Morais',r:'342',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Vila Pinho'},
  {n:'Andre Vinicius Neto',r:'343',m:'Muay Thai',b:'Prajied Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Alida Estephanny Estewgam',r:'344',m:'Muay Thai',b:'Prajied Branco',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Mariana Vieira da Silva',r:'345',m:'Muay Thai, Jiu Jitsu',b:'Prajied Branco',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Alexsandro Moreno da Cunha',r:'346',m:'Muay Thai, Jiu Jitsu',b:'Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Carla Cristina Henriques',r:'347',m:'Muay Thai',b:'Branco',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Fernanda Lucia de Souza Silva',r:'348',m:'Muay Thai, Boxe',b:'Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Jemima de Amorim Teodoro',r:'349',m:'Muay Thai, Boxe, Jiu Jitsu',b:'Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Marcus Vinicius Alves de Souza',r:'350',m:'Muay Thai, Boxe',b:'Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Michele Karla Guedes Moraes Seppe',r:'351',m:'Muay Thai',b:'Azul',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Mirian Rosa de Souza',r:'352',m:'Muay Thai',b:'Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Mauro Cipriano',r:'353',m:'Muay Thai, Karate',b:'Mestre',l:'mestre',t:'Dojo Cipriano'},
  {n:'Myllena Brugger de Almeida',r:'354',m:'Muay Thai',b:'Laranja',l:'aluno',t:'Mago Team Centro Contagem'},
  {n:'Magno Costa',r:'355',m:'Kung-Fu',b:'Mestre',l:'mestre',t:'AICCA'}
];

/* ── NORMALIZED DIRECTORIES ───────────────────── */

const TECHNICAL_LEVELS = new Set(['mestre', 'professor', 'instrutor', 'monitor']);

function slugify(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function splitModalidades(value) {
  return [...new Set((value || '')
    .split(/,|\//)
    .map(item => item.trim())
    .filter(Boolean))];
}

function roleLabel(role) {
  const key = normalizeText(role);
  if (key === 'mestre') return 'Mestre';
  if (key === 'professor') return 'Professor';
  if (key === 'instrutor') return 'Instrutor';
  if (key === 'monitor') return 'Monitor';
  if (key === 'aluno') return 'Aluno';
  return role || 'Integrante';
}

const GYM_BY_NAME = new Map(GYMS.map(gym => [gym.name, gym]));
const DIRECTOR_BY_NAME = new Map(DIRECTORS.map(d => [normalizeText(d.name), d]));

const ATHLETE_DIRECTORY = ATHLETES.map(item => {
  const roleKey = normalizeText(item.l);
  const gym = GYM_BY_NAME.get(item.t);
  const director = DIRECTOR_BY_NAME.get(normalizeText(item.n));
  return {
    tipo: 'atleta',
    slug: `${slugify(item.n)}-${item.r}`,
    nome: item.n,
    funcao: roleLabel(item.l),
    funcaoNorm: roleKey,
    modalidade: splitModalidades(item.m),
    equipe: item.t || '',
    academia: item.t || '',
    registro: item.r || '',
    cidade: gym?.city || '',
    contato: director?.contact || '',
    bio: director?.bio || '',
    resumo: item.b || ''
  };
});

const ATHLETE_BY_REG = new Map(ATHLETE_DIRECTORY.map(item => [item.registro, item]));
const ATHLETE_BY_NAME = new Map(ATHLETE_DIRECTORY.map(item => [normalizeText(item.nome), item]));

const PROFESSOR_DIRECTORY = ATHLETE_DIRECTORY
  .filter(item => TECHNICAL_LEVELS.has(item.funcaoNorm))
  .map(item => ({ ...item, tipo: 'professor' }));

const REFEREE_DIRECTORY = REFEREES.map(item => {
  const linkedAthlete = ATHLETE_BY_REG.get(item.reg) || ATHLETE_BY_NAME.get(normalizeText(item.name));
  return {
    tipo: 'arbitro',
    slug: `${slugify(item.name)}-${item.reg}`,
    nome: item.name,
    funcao: item.func,
    funcaoNorm: normalizeText(item.func),
    modalidade: linkedAthlete?.modalidade || [],
    equipe: linkedAthlete?.equipe || '',
    academia: linkedAthlete?.academia || '',
    registro: item.reg,
    cidade: linkedAthlete?.cidade || '',
    contato: linkedAthlete?.contato || '',
    bio: linkedAthlete?.bio || '',
    resumo: linkedAthlete?.resumo || '',
    atletaRelacionadoSlug: linkedAthlete?.slug || ''
  };
});

const REFEREE_BY_REG = new Map(REFEREE_DIRECTORY.map(item => [item.registro, item]));

const GYM_DIRECTORY = GYMS.map(gym => {
  const members = ATHLETE_DIRECTORY.filter(item => item.equipe === gym.name);
  const professores = members.filter(item => TECHNICAL_LEVELS.has(item.funcaoNorm));
  return {
    slug: slugify(gym.name),
    nome: gym.name,
    equipe: gym.name,
    academia: gym.name,
    cidade: gym.city,
    regiao: gym.region || '',
    modalidade: [...new Set(members.flatMap(item => item.modalidade))],
    membros: members,
    professores,
    totalAtletas: members.length
  };
});

function byName(a, b) {
  return a.nome.localeCompare(b.nome, 'pt-BR');
}

function hasMinimumProfileData(item) {
  const score = [item.funcao, item.modalidade?.length, item.equipe, item.cidade, item.contato, item.bio, item.resumo]
    .filter(Boolean).length;
  return score >= 3;
}

function profileBackRoute(type) {
  if (type === 'professor') return '#/professores';
  if (type === 'arbitro') return '#/arbitros';
  return '#/atletas';
}

function buildFilterOptions(values, firstLabel) {
  const options = [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  return `<option value="">${firstLabel}</option>${options.map(value => `<option value="${value}">${value}</option>`).join('')}`;
}

/* ── ROUTER ───────────────────────────── */

const routes = {
  '/inicio': renderInicio,
  '/institucional': renderInstitucional,
  '/diretoria': renderDiretoria,
  '/arbitros': renderArbitros,
  '/professores': renderProfessores,
  '/atletas': renderAtletas,
  '/onde-treinar': renderOndeTreinar,
  '/filiacao': renderFiliacao,
  '/documentos': renderDocumentos,
  '/departamentos': renderDepartamentos,
  '/contato': renderContato
};

function router() {
  const hashRaw = location.hash.slice(1) || '/inicio';
  const [hash] = hashRaw.split('?');
  if (hash.startsWith('/professores/')) {
    const slug = hash.replace('/professores/', '');
    const professor = PROFESSOR_DIRECTORY.find(item => item.slug === slug);
    const app = document.getElementById('main-content');
    app.innerHTML = professor ? renderPersonProfile(professor) : renderProfessores();
    app.classList.remove('view-enter');
    void app.offsetWidth;
    app.classList.add('view-enter');
    window.scrollTo({ top: 0 });
    updateActiveNav('/professores');
    closeMobileMenu();
    initPageFeatures('/professores');
    return;
  }
  if (hash.startsWith('/arbitros/')) {
    const slug = hash.replace('/arbitros/', '');
    const referee = REFEREE_DIRECTORY.find(item => item.slug === slug);
    const app = document.getElementById('main-content');
    app.innerHTML = referee ? renderPersonProfile(referee) : renderArbitros();
    app.classList.remove('view-enter');
    void app.offsetWidth;
    app.classList.add('view-enter');
    window.scrollTo({ top: 0 });
    updateActiveNav('/arbitros');
    closeMobileMenu();
    initPageFeatures('/arbitros');
    return;
  }
  if (hash.startsWith('/atletas/')) {
    const slug = hash.replace('/atletas/', '');
    const athlete = ATHLETE_DIRECTORY.find(item => item.slug === slug);
    const app = document.getElementById('main-content');
    app.innerHTML = athlete ? renderPersonProfile(athlete) : renderAtletas();
    app.classList.remove('view-enter');
    void app.offsetWidth;
    app.classList.add('view-enter');
    window.scrollTo({ top: 0 });
    updateActiveNav('/atletas');
    closeMobileMenu();
    initPageFeatures('/atletas');
    return;
  }
  /* Art detail sub-routes */
  if (hash.startsWith('/artes/')) {
    const slug = hash.replace('/artes/', '');
    const art = ART_DETAIL_SLUGS.includes(slug)
      ? MARTIAL_ARTS.find(a => a.slug === slug)
      : null;
    const app = document.getElementById('main-content');
    app.innerHTML = art ? renderArteDetail(art) : renderInicio();
    app.classList.remove('view-enter');
    void app.offsetWidth;
    app.classList.add('view-enter');
    window.scrollTo({ top: 0 });
    updateActiveNav('/institucional');
    closeMobileMenu();
    initPageFeatures('/artes');
    return;
  }
  const render = routes[hash] || renderInicio;
  const app = document.getElementById('main-content');
  app.innerHTML = render();
  app.classList.remove('view-enter');
  void app.offsetWidth;
  app.classList.add('view-enter');
  window.scrollTo({ top: 0 });
  updateActiveNav(hash);
  closeMobileMenu();
  initPageFeatures(hash);
}

function updateActiveNav(hash) {
  document.querySelectorAll('.nav-link').forEach(l => {
    const isActive = l.dataset.route === hash;
    l.classList.toggle('active', isActive);
    if (isActive) { l.setAttribute('aria-current','page'); }
    else { l.removeAttribute('aria-current'); }
  });
}

function closeMobileMenu() {
  document.getElementById('navMobile')?.classList.remove('open');
  document.getElementById('navMobile')?.setAttribute('aria-hidden','true');
  document.getElementById('mobileToggle')?.classList.remove('open');
  document.getElementById('mobileToggle')?.setAttribute('aria-expanded','false');
  document.getElementById('mobileToggle')?.setAttribute('aria-label','Abrir menu de navegação');
  document.body.classList.remove('menu-open');
}

/* ── VIEW RENDERERS ───────────────────── */

function renderInicio() {
  const totalAthletes = ATHLETES.length;
  const totalTeams = new Set(ATHLETES.map(a => a.t)).size;
  const totalRefs = REFEREES.length;
  const profs = ATHLETES.filter(a => ['mestre','professor','instrutor','monitor'].includes(a.l)).length;
  return `
    <section class="hero">
      <div class="container hero__shell">
        <div class="hero__content">
          <span class="hero__badge">Federação Oficial — Minas Gerais</span>
          <h1 class="hero__title">Disciplina, <em>Legado</em><br>e Formação Marcial</h1>
          <p class="hero__sub">Órgão oficial de regulamentação, filiação e promoção do Muay Thai Chaiya e das Artes Marciais Mistas em Minas Gerais — com atuação técnica, ética e voltada à tradição marcial.</p>
          <div class="hero__meta">
            <span class="hero__meta-item">12 modalidades regulamentadas</span>
            <span class="hero__meta-item">Corpo técnico e arbitragem oficial</span>
            <span class="hero__meta-item">Filiação, registro e competições</span>
          </div>
          <div class="hero__actions">
            <a href="#/filiacao" class="btn btn--primary">Solicitar Filiação</a>
            <a href="#/institucional" class="btn btn--outline">Conhecer a Federação</a>
          </div>
        </div>
        <aside class="hero__panel" aria-label="Destaques institucionais">
          <span class="hero__panel-eyebrow">O que oferecemos</span>
          <h2 class="hero__panel-title">Estrutura completa para o desenvolvimento marcial em Minas Gerais.</h2>
          <ul class="hero__panel-list">
            <li>Registro federativo oficial para atletas, professores, árbitros e equipes.</li>
            <li>Exames de graduação, campeonatos, seminários e ações institucionais.</li>
            <li>Suporte por departamentos jurídico, contábil, marketing, nutrição e odontologia.</li>
          </ul>
        </aside>
      </div>
    </section>
    <section class="stats-bar" aria-label="Indicadores institucionais">
      <div class="container stats-bar__inner">
        <div class="stat"><span class="stat__number" data-target="${totalAthletes}">0</span><span class="stat__label">Atletas filiados</span></div>
        <div class="stat"><span class="stat__number" data-target="${totalTeams}">0</span><span class="stat__label">Equipes ativas</span></div>
        <div class="stat"><span class="stat__number" data-target="${profs}">0</span><span class="stat__label">Professores e mestres</span></div>
        <div class="stat"><span class="stat__number" data-target="${totalRefs}">0</span><span class="stat__label">Árbitros cadastrados</span></div>
        <div class="stat"><span class="stat__number" data-target="12">0</span><span class="stat__label">Modalidades regulamentadas</span></div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section__header section__header--center">
          <span class="section__eyebrow">Navegação Rápida</span>
          <h2 class="section__title">Explore a Federação</h2>
        </div>
        <div class="quicklinks">
          <a href="#/institucional" class="ql-card"><span class="ql-card__icon">🏛️</span><span class="ql-card__label">Institucional</span></a>
          <a href="#/diretoria" class="ql-card"><span class="ql-card__icon">👥</span><span class="ql-card__label">Diretoria</span></a>
          <a href="#/atletas" class="ql-card"><span class="ql-card__icon">🥊</span><span class="ql-card__label">Atletas</span></a>
          <a href="#/arbitros" class="ql-card"><span class="ql-card__icon">⚖️</span><span class="ql-card__label">Árbitros</span></a>
          <a href="#/filiacao" class="ql-card"><span class="ql-card__icon">📋</span><span class="ql-card__label">Filiação</span></a>
          <a href="#/contato" class="ql-card"><span class="ql-card__icon">✉️</span><span class="ql-card__label">Contato</span></a>
        </div>
      </div>
    </section>`;
}

function renderInstitucional() {
  const artCards = getArtCards();
  return `
    <section class="section">
      <div class="container split">
        <div class="split__text">
          <span class="section__eyebrow">Quem Somos</span>
          <h2 class="section__title">Federação de Muay Thai Chaiya e MMA de Minas Gerais</h2>
          <p class="section__desc">A FMTC-MMA é o órgão oficial que regulamenta, fiscaliza e promove o Muay Thai Chaiya e as Artes Marciais Mistas no Estado de Minas Gerais. Fundada com a missão de preservar a tradição marcial e formar atletas, professores e cidadãos de excelência.</p>
          <p class="section__desc">Organizamos campeonatos, exames de graduação, cursos de arbitragem, seminários técnicos e ações sociais — sempre com compromisso ético, técnico e esportivo.</p>
          <p class="section__desc">Filiados contam com registro oficial, orientação jurídica e tributária, convênios médicos e odontológicos, e acesso a competições nacionais e internacionais.</p>
        </div>
        <div>
          <div class="pillars">
            <div class="pillar"><span class="pillar__icon">🎯</span><div><div class="pillar__title">Regulamentação</div><div class="pillar__text">Registro oficial de atletas, graduações e competições reconhecidas</div></div></div>
            <div class="pillar"><span class="pillar__icon">🏆</span><div><div class="pillar__title">Competição</div><div class="pillar__text">Campeonatos estaduais, nacionais e acesso a eventos internacionais</div></div></div>
            <div class="pillar"><span class="pillar__icon">📚</span><div><div class="pillar__title">Formação</div><div class="pillar__text">Cursos, seminários e exames técnicos para graduação profissional</div></div></div>
            <div class="pillar"><span class="pillar__icon">🤝</span><div><div class="pillar__title">Comunidade</div><div class="pillar__text">Ações sociais, inclusão e desenvolvimento pelo esporte</div></div></div>
            <div class="pillar"><span class="pillar__icon">⚖️</span><div><div class="pillar__title">Arbitragem</div><div class="pillar__text">Quadro de árbitros internacionais, nacionais e regionais</div></div></div>
            <div class="pillar"><span class="pillar__icon">📋</span><div><div class="pillar__title">Departamentos</div><div class="pillar__text">Jurídico, Odontológico, Contábil, Marketing e Nutrição</div></div></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section--gray">
      <div class="container">
        <div class="section__header section__header--center">
          <span class="section__eyebrow">Modalidades</span>
          <h2 class="section__title">Artes Marciais Praticadas</h2>
          <p class="section__desc">A FMTC-MMA regulamenta 12 modalidades de artes marciais, todas com estrutura técnica oficial.</p>
        </div>
        <div class="quicklinks">
          ${artCards.map(a =>
            `<a href="#/artes/${a.slug}" class="ql-card ql-card--art"><span class="ql-card__icon">${a.icon}</span><span class="ql-card__label">${a.name}</span><span class="ql-card__arrow">→</span></a>`
          ).join('')}
        </div>
      </div>
    </section>`;
}

/* ── ART DETAIL VIEW ─────────── */
function renderArteDetail(art) {
  const relations = getArtRelations(art);
  const taekwondo = art.slug === 'taekwondo' ? TAEKWONDO_RICH_CONTENT : null;
  const generalOverview = [art.resumo, art.detalhes].filter(Boolean).join(' ');
  const linkedTeams = relations.teams.length
    ? relations.teams.map(team => `${team}`)
    : [];
  const teacherCards = relations.teachers.length ? relations.teachers.map(person => `
      <div class="art-prof-chip">
        <span class="art-prof-chip__title">${person.l || 'Corpo técnico'}</span>
        <strong>${person.n}</strong>
        <span class="art-prof-chip__reg">${person.r ? `Reg. ${person.r}` : ''}</span>
      </div>`).join('') : '<p class="art-update">Informações em breve.</p>';

  const athletesTags = relations.athletes.length
    ? relations.athletes.slice(0, 36).map(person => `<span class="athlete-tag">${person.n}</span>`).join('')
    : '<p class="art-update">Informações em breve.</p>';

  const gymsCards = relations.gyms.length
    ? relations.gyms.map(gym => `<li><strong>${gym.name}</strong> — ${gym.city}${gym.region ? ` (${gym.region})` : ''}</li>`).join('')
    : '';

  const departmentText = taekwondo
    ? `${taekwondo.departamentoResponsavel} Apoio institucional integrado: ${DEPARTMENTS.map(d => d.title).join(', ')}.`
    : `Apoio institucional disponível por meio dos departamentos da FMTC-MMA: ${DEPARTMENTS.map(d => d.title).join(', ')}.`;

  return `
    <section class="art-hero">
      <div class="container">
        <a href="#/institucional" class="art-back">&larr; Voltar às Modalidades</a>
        <div class="art-hero__inner">
          <span class="art-hero__icon">${art.icon}</span>
          <h1 class="art-hero__title">${art.name}</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container art-detail">
        <div class="art-content">
          <div class="art-section art-section--hero">
            <h2>Visão Geral</h2>
            ${generalOverview ? `<p>${generalOverview}</p>` : '<p class="art-update">Informações em breve.</p>'}
          </div>

          <div class="art-section">
            <h2>Vínculo com a FMTC-MMA</h2>
            ${art.vinculo ? `<p>${art.vinculo}</p>` : '<p class="art-update">Informações em breve.</p>'}
          </div>

          ${taekwondo ? `
          <div class="art-section">
            <h2>Origem e Contexto</h2>
            <p>${taekwondo.origemContexto}</p>
          </div>

          <div class="art-section art-section--two">
            <div>
              <h2>Princípios</h2>
              ${renderListOrUpdate(taekwondo.principios, 'art-bullets')}
            </div>
            <div>
              <h2>Faixas, Gubs e Dans</h2>
              ${renderGradTable(art)}
            </div>
          </div>

          <div class="art-section art-section--two">
            <div>
              <h2>Sistema de Pontos</h2>
              ${renderListOrUpdate(taekwondo.sistemaPontos, 'art-bullets')}
            </div>
            <div>
              <h2>Condições de Vitória</h2>
              ${renderListOrUpdate(taekwondo.condicoesVitoria, 'art-bullets')}
            </div>
          </div>

          <div class="art-section art-section--two">
            <div>
              <h2>Categorias Olímpicas</h2>
              ${renderListOrUpdate(taekwondo.categoriasOlimpicas, 'art-bullets')}
            </div>
            <div>
              <h2>Juramentos</h2>
              ${renderListOrUpdate(taekwondo.juramentos, 'art-bullets')}
            </div>
          </div>

          <div class="art-section art-section--two">
            <div>
              <h2>Números</h2>
              ${renderListOrUpdate(taekwondo.numeros, 'art-bullets art-bullets--compact')}
            </div>
            <div>
              <h2>Comandos</h2>
              ${renderListOrUpdate(taekwondo.comandos, 'art-bullets art-bullets--compact')}
            </div>
          </div>
          ` : `
          <div class="art-section">
            <h2>Informações Técnicas</h2>
            ${art.tecnico ? `<p>${art.tecnico}</p>` : '<p class="art-update">Informações em breve.</p>'}
          </div>
          <div class="art-section">
            <h2>Faixas, Gubs e Dans</h2>
            ${renderGradTable(art)}
          </div>
          `}

          <div class="art-section">
            <h2>Professores e Mestres Relacionados</h2>
            <div class="art-profs-grid">${teacherCards}</div>
          </div>

          <div class="art-section art-section--two">
            <div>
              <h2>Atletas e Equipes Relacionadas</h2>
              <div class="art-athletes-list">${athletesTags}</div>
              <h3 class="art-subtitle">Equipes vinculadas</h3>
              ${renderListOrUpdate(linkedTeams, 'art-bullets')}
            </div>
            <div>
              <h2>Onde Treinar</h2>
              ${relations.gyms.length ? `<ul class="art-bullets">${gymsCards}</ul>` : '<p class="art-update">Informações em breve.</p>'}
            </div>
          </div>

          <div class="art-section">
            <h2>Departamento Relacionado</h2>
            <p>${departmentText}</p>
          </div>

          <div class="art-cta-band">
            <a href="#/filiacao" class="btn btn--primary">Solicitar filiação</a>
            <a href="#/documentos" class="btn btn--gold">Ver documentos</a>
          </div>

          ${art.fonte ? `<p class="art-source">Fonte técnica: <a href="${art.fonte}" target="_blank" rel="noopener">${art.fonte}</a></p>` : '<p class="art-source">Fonte técnica: a ser publicada.</p>'}
        </div>
      </div>
    </section>`;
}

function renderDiretoria() {
  return `
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__eyebrow">Diretoria Executiva</span>
          <h2 class="section__title">Liderança da Federação</h2>
          <p class="section__desc">Dirigentes da FMTC-MMA — atletas e profissionais dedicados ao fortalecimento das artes marciais em Minas Gerais.</p>
        </div>
        <div class="leader-grid">
          ${DIRECTORS.map(d => `
            <div class="leader-card">
              <div class="leader-card__bar"></div>
              <div class="leader-card__body">
                <div class="leader-card__role">${d.role}</div>
                <h3 class="leader-card__name">${d.name}</h3>
                <p class="leader-card__bio">${d.bio}</p>
                ${d.contact ? `<span class="leader-card__contact">☎ ${d.contact}</span>` : ''}
                <span class="leader-card__reg">Registro: ${d.reg}</span>
              </div>
            </div>
          `).join('')}
          ${[
            {role:'Diretor Financeiro',name:'Fernando Henrique Faria',reg:'008',bio:'Muay Thai, Jiu Jitsu, Boxe e MMA. Prajied Verde. Responsável pela gestão financeira da federação.'},
            {role:'Diretor de Marketing Digital',name:'Diego Emílio dos Reis',reg:'007',bio:'Muay Thai, Jiu Jitsu, Boxe e MMA. Prajied Verde. Responsável pela comunicação digital e identidade visual.'},
            {role:'Diretora de Contadoria',name:'Roberta Keyla da Silveira Costa',reg:'010',bio:'Muay Thai, Jiu Jitsu, Boxe e MMA. Prajied Verde. Contadora CRC-MG, responsável pela contabilidade e prestação de contas.'},
            {role:'Diretor Jurídico',name:'Manoel Jandir de Almeida Junior',reg:'009',bio:'Advogado OAB/MG 116.269. Orientação jurídica, tributária e administrativa. Contato: (31) 99867-1338.'}
          ].map(d => `
            <div class="leader-card">
              <div class="leader-card__bar"></div>
              <div class="leader-card__body">
                <div class="leader-card__role">${d.role}</div>
                <h3 class="leader-card__name">${d.name}</h3>
                <p class="leader-card__bio">${d.bio}</p>
                <span class="leader-card__reg">Registro: ${d.reg}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>`;
}

function renderArbitros() {
  const modalidades = REFEREE_DIRECTORY.flatMap(item => item.modalidade);
  const equipes = REFEREE_DIRECTORY.map(item => item.equipe);
  const cidades = REFEREE_DIRECTORY.map(item => item.cidade);
  const funcoes = REFEREE_DIRECTORY.map(item => item.funcao);
  return `
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__eyebrow">Corpo de Arbitragem</span>
          <h2 class="section__title">Quadro Oficial de Árbitros</h2>
          <p class="section__desc">Árbitros internacionais, nacionais e regionais credenciados pela FMTC-MMA.</p>
        </div>

        <div class="directory__controls directory__controls--grid">
          <div class="directory__field directory__field--search">
            <label for="refSearch" class="directory__label">Buscar árbitro</label>
            <div class="directory__search-row">
              <input type="search" class="directory__search" id="refSearch" placeholder="Nome, registro ou modalidade">
              <button type="button" class="directory__clear" id="refClearSearch">Limpar</button>
            </div>
          </div>
          <div class="directory__field"><label for="refFilterFuncao" class="directory__label">Função</label><select class="directory__filter" id="refFilterFuncao">${buildFilterOptions(funcoes, 'Todas as funções')}</select></div>
          <div class="directory__field"><label for="refFilterModalidade" class="directory__label">Modalidade</label><select class="directory__filter" id="refFilterModalidade">${buildFilterOptions(modalidades, 'Todas as modalidades')}</select></div>
          <div class="directory__field"><label for="refFilterEquipe" class="directory__label">Equipe</label><select class="directory__filter" id="refFilterEquipe">${buildFilterOptions(equipes, 'Todas as equipes')}</select></div>
          <div class="directory__field"><label for="refFilterCidade" class="directory__label">Cidade</label><select class="directory__filter" id="refFilterCidade">${buildFilterOptions(cidades, 'Todas as cidades')}</select></div>
        </div>

        <p class="directory__count" id="refCount"></p>
        <div class="directory-grid" id="refGrid"></div>
        <div class="directory__empty" id="refEmpty">Nenhum árbitro corresponde aos filtros selecionados.</div>
      </div>
    </section>`;
}

function renderProfessores() {
  const modalidades = PROFESSOR_DIRECTORY.flatMap(item => item.modalidade);
  const equipes = PROFESSOR_DIRECTORY.map(item => item.equipe);
  const cidades = PROFESSOR_DIRECTORY.map(item => item.cidade);
  const funcoes = PROFESSOR_DIRECTORY.map(item => item.funcao);
  return `
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__eyebrow">Corpo Técnico</span>
          <h2 class="section__title">Mestres, Professores e Instrutores</h2>
          <p class="section__desc">Diretório oficial de mestres, professores e instrutores credenciados pela federação.</p>
        </div>

        <div class="directory__controls directory__controls--grid">
          <div class="directory__field directory__field--search">
            <label for="profSearch" class="directory__label">Buscar professor</label>
            <div class="directory__search-row">
              <input type="search" class="directory__search" id="profSearch" placeholder="Nome, registro ou modalidade">
              <button type="button" class="directory__clear" id="profClearSearch">Limpar</button>
            </div>
          </div>
          <div class="directory__field"><label for="profFilterFuncao" class="directory__label">Função</label><select class="directory__filter" id="profFilterFuncao">${buildFilterOptions(funcoes, 'Todas as funções')}</select></div>
          <div class="directory__field"><label for="profFilterModalidade" class="directory__label">Modalidade</label><select class="directory__filter" id="profFilterModalidade">${buildFilterOptions(modalidades, 'Todas as modalidades')}</select></div>
          <div class="directory__field"><label for="profFilterEquipe" class="directory__label">Equipe</label><select class="directory__filter" id="profFilterEquipe">${buildFilterOptions(equipes, 'Todas as equipes')}</select></div>
          <div class="directory__field"><label for="profFilterCidade" class="directory__label">Cidade</label><select class="directory__filter" id="profFilterCidade">${buildFilterOptions(cidades, 'Todas as cidades')}</select></div>
        </div>

        <p class="directory__count" id="profCount"></p>
        <div class="prof-grid" id="profGrid"></div>
        <div class="directory__empty" id="profEmpty">Nenhum professor corresponde aos filtros selecionados.</div>
      </div>
    </section>`;
}

function renderAtletas() {
  const modalidades = ATHLETE_DIRECTORY.flatMap(item => item.modalidade);
  const equipes = ATHLETE_DIRECTORY.map(item => item.equipe);
  const cidades = ATHLETE_DIRECTORY.map(item => item.cidade);
  const funcoes = ATHLETE_DIRECTORY.map(item => item.funcao);
  return `
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__eyebrow">Atletas Filiados</span>
          <h2 class="section__title">Diretório de Atletas</h2>
          <p class="section__desc">Registro oficial de atletas filiados com busca por modalidade, equipe, cidade e função.</p>
        </div>

        <div class="directory__controls directory__controls--grid">
          <div class="directory__field directory__field--search">
            <label for="athleteSearch" class="directory__label">Buscar atleta</label>
            <div class="directory__search-row">
              <input type="search" class="directory__search" id="athleteSearch" placeholder="Nome, registro ou modalidade">
              <button type="button" class="directory__clear" id="athleteClearSearch">Limpar</button>
            </div>
          </div>
          <div class="directory__field"><label for="athleteFilterFuncao" class="directory__label">Função</label><select class="directory__filter" id="athleteFilterFuncao">${buildFilterOptions(funcoes, 'Todas as funções')}</select></div>
          <div class="directory__field"><label for="athleteFilterModalidade" class="directory__label">Modalidade</label><select class="directory__filter" id="athleteFilterModalidade">${buildFilterOptions(modalidades, 'Todas as modalidades')}</select></div>
          <div class="directory__field"><label for="athleteFilterEquipe" class="directory__label">Equipe</label><select class="directory__filter" id="athleteFilterEquipe">${buildFilterOptions(equipes, 'Todas as equipes')}</select></div>
          <div class="directory__field"><label for="athleteFilterCidade" class="directory__label">Cidade</label><select class="directory__filter" id="athleteFilterCidade">${buildFilterOptions(cidades, 'Todas as cidades')}</select></div>
        </div>
        <p class="directory__count" id="athleteCount"></p>
        <div class="athlete-grid" id="athleteGrid"></div>
        <div class="directory__empty" id="athleteEmpty">Nenhum atleta corresponde aos filtros selecionados.</div>
        <div class="pagination" id="athletePagination"></div>
      </div>
    </section>`;
}

function renderOndeTreinar() {
  const modalidades = GYM_DIRECTORY.flatMap(item => item.modalidade);
  const cidades = GYM_DIRECTORY.map(item => item.cidade);
  const equipes = GYM_DIRECTORY.map(item => item.equipe);
  return `
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__eyebrow">Onde Treinar</span>
          <h2 class="section__title">Academias e Equipes Filiadas</h2>
          <p class="section__desc">Academias e núcleos filiados à FMTC-MMA em Minas Gerais e outros estados.</p>
        </div>

        <div class="directory__controls directory__controls--grid">
          <div class="directory__field directory__field--search">
            <label for="gymSearch" class="directory__label">Buscar academia</label>
            <div class="directory__search-row">
              <input type="search" class="directory__search" id="gymSearch" placeholder="Academia, cidade ou modalidade">
              <button type="button" class="directory__clear" id="gymClearSearch">Limpar</button>
            </div>
          </div>
          <div class="directory__field"><label for="gymFilterEquipe" class="directory__label">Equipe</label><select class="directory__filter" id="gymFilterEquipe">${buildFilterOptions(equipes, 'Todas as equipes')}</select></div>
          <div class="directory__field"><label for="gymFilterCidade" class="directory__label">Cidade</label><select class="directory__filter" id="gymFilterCidade">${buildFilterOptions(cidades, 'Todas as cidades')}</select></div>
          <div class="directory__field"><label for="gymFilterModalidade" class="directory__label">Modalidade</label><select class="directory__filter" id="gymFilterModalidade">${buildFilterOptions(modalidades, 'Todas as modalidades')}</select></div>
        </div>

        <p class="directory__count" id="gymCount"></p>
        <div class="gym-grid" id="gymGrid"></div>
        <div class="directory__empty" id="gymEmpty">Nenhuma academia corresponde aos filtros selecionados.</div>
      </div>
    </section>`;
}

function renderPersonProfile(item) {
  const gym = item.equipe ? GYM_BY_NAME.get(item.equipe) : null;
  const referee = REFEREE_BY_REG.get(item.registro);
  const sameTeamPeople = item.equipe
    ? ATHLETE_DIRECTORY.filter(person => person.equipe === item.equipe && person.slug !== item.slug)
    : [];
  const noProfileData = !hasMinimumProfileData(item);

  return `
    <section class="art-hero">
      <div class="container">
        <a href="${profileBackRoute(item.tipo)}" class="art-back">&larr; Voltar ao diretório</a>
        <div class="art-hero__inner">
          <span class="art-hero__icon">👤</span>
          <h1 class="art-hero__title">${item.nome}</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container profile-detail">
        ${noProfileData ? `<div class="art-notice"><span>ℹ️</span><p><strong>Dados em consolidação.</strong> As informações oficiais deste cadastro estão sendo atualizadas.</p></div>` : ''}

        <div class="profile-grid">
          <article class="profile-card">
            <h2 class="profile-card__title">Dados principais</h2>
            <p><strong>Função:</strong> ${item.funcao || 'A confirmar'}</p>
            <p><strong>Registro:</strong> ${item.registro || 'A confirmar'}</p>
            <p><strong>Modalidades:</strong> ${item.modalidade.length ? item.modalidade.join(', ') : 'A confirmar'}</p>
            <p><strong>Equipe/Academia:</strong> ${item.equipe || 'A confirmar'}</p>
            <p><strong>Cidade:</strong> ${item.cidade || 'A confirmar'}</p>
            <p><strong>Contato:</strong> ${item.contato || 'A confirmar'}</p>
          </article>

          <article class="profile-card">
            <h2 class="profile-card__title">Resumo</h2>
            ${item.resumo ? `<p>${item.resumo}</p>` : '<p class="profile-update">Sem informação</p>'}
            ${item.bio ? `<p>${item.bio}</p>` : ''}
          </article>
        </div>

        <div class="profile-grid">
          <article class="profile-card">
            <h2 class="profile-card__title">Relações de treino</h2>
            ${gym ? `<p><strong>Academia relacionada:</strong> ${gym.name} — ${gym.city}${gym.region ? ` (${gym.region})` : ''}</p>` : '<p class="profile-update">Sem informação</p>'}
            ${gym ? `<p><a class="profile-link" href="#/onde-treinar">Ver todas as academias</a></p>` : ''}
            ${referee && item.tipo !== 'arbitro' ? `<p><a class="profile-link" href="#/arbitros/${referee.slug}">Ver no quadro de arbitragem</a></p>` : ''}
            ${item.atletaRelacionadoSlug ? `<p><a class="profile-link" href="#/atletas/${item.atletaRelacionadoSlug}">Ver atleta relacionado</a></p>` : ''}
          </article>

          <article class="profile-card">
            <h2 class="profile-card__title">Pessoas da mesma equipe</h2>
            ${sameTeamPeople.length
              ? `<ul class="profile-list">${sameTeamPeople.slice(0, 10).map(person => `<li><a class="profile-link" href="#/atletas/${person.slug}">${person.nome}</a></li>`).join('')}</ul>`
              : '<p class="profile-update">Sem informação</p>'}
          </article>
        </div>
      </div>
    </section>`;
}

function renderFiliacao() {
  const beneficios = [
    'Registro e graduação reconhecidos por órgão oficial do esporte',
    'Participação em competições oficiais com histórico preservado',
    'Emissão de comprovações para bolsa atleta e cartas para patrocinadores',
    'Participação em cursos e seminários nacionais e internacionais',
    'Orientação jurídica, tributária, administrativa e marketing digital',
    'Convênios médicos, odontológicos e seguros',
    'Desconto de 10% em correligionários'
  ];
  return `
    <section class="section section--dark cta-band">
      <div class="container">
        <span class="section__eyebrow">Filie-se</span>
        <h2 class="section__title section__title--light">Filiação Institucional</h2>
        <p class="section__desc section__desc--light">A filiação oficializa o vínculo com a FMTC-MMA, garantindo registro federativo, histórico técnico e acesso a competições e benefícios institucionais.</p>

        <h3 class="cta-band__subheading cta-band__subheading--md">Por que filiar-se?</h3>
        <ul class="cta-benefits">
          ${beneficios.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <div class="cta-steps">
          <div class="cta-step"><span class="cta-step__number">01</span><span class="cta-step__text">Acesse a ficha na seção Documentos</span></div>
          <div class="cta-step"><span class="cta-step__number">02</span><span class="cta-step__text">Preencha a ficha e reúna os anexos obrigatórios</span></div>
          <div class="cta-step"><span class="cta-step__number">03</span><span class="cta-step__text">Envie tudo para fmtc-mma@fmtc-mma.com junto com o comprovante de depósito</span></div>
          <div class="cta-step"><span class="cta-step__number">04</span><span class="cta-step__text">Aguarde a homologação do seu registro oficial</span></div>
        </div>

        <div class="inst-grid">
          <article class="inst-card">
            <h3 class="inst-card__title">Filiação de Atleta</h3>
            <p class="inst-card__desc">Dados de identificação pessoal, vínculo técnico e modalidades praticadas conforme ficha oficial.</p>
            <ul class="inst-list">
              ${FILIACAO_CAMPOS_ATLETA.map(field => `<li>${field}</li>`).join('')}
            </ul>
          </article>
          <article class="inst-card">
            <h3 class="inst-card__title">Filiação de Equipe/Clube/Academia</h3>
            <p class="inst-card__desc">Dados institucionais e documentação jurídica conforme o tipo de filiação.</p>
            <ul class="inst-list">
              ${FILIACAO_CAMPOS_EQUIPE.map(field => `<li>${field}</li>`).join('')}
            </ul>
          </article>
        </div>

        <h3 class="cta-band__subheading cta-band__subheading--sm">Documentos obrigatórios</h3>
        <ul class="cta-benefits">
          ${FILIACAO_DOCUMENTOS.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <blockquote class="inst-declaration">${FILIACAO_DECLARACAO}</blockquote>

        <div class="cta-band__actions">
          <a href="#/documentos" class="btn btn--gold">Ver documentos de filiação</a>
        </div>
      </div>
    </section>`;
}

function renderDocumentos() {
  const extIcon = e => {
    if (e === 'pdf') return '📕';
    if (e === 'doc') return '📘';
    if (e === 'xls') return '📗';
    return '📙';
  };
  const categories = [...new Set(DOCUMENT_HUB.map(item => item.category))];
  const statusClass = status => status === 'Disponível' ? 'doc-status--ok' : 'doc-status--update';
  return `
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__eyebrow">Documentos</span>
          <h2 class="section__title">Central de Documentos</h2>
          <p class="section__desc">Formulários, registros e materiais oficiais da FMTC-MMA. Documentos ainda não publicados aparecem com status “Em preparação”.</p>
        </div>

        <div class="doc-categories">
          ${categories.map(category => `
            <section class="doc-category">
              <h3 class="doc-category__title">${category}</h3>
              <div class="dl-grid">
                ${DOCUMENT_HUB.filter(item => item.category === category).map(item => {
                  const cardBody = `
                    <div class="dl-card__icon dl-card__icon--${item.ext}">${extIcon(item.ext)}</div>
                    <div class="dl-card__info">
                      <div class="dl-card__name">${item.name}</div>
                      <div class="dl-card__meta">${item.desc} · ${item.ext.toUpperCase()}</div>
                    </div>
                    <span class="doc-status ${statusClass(item.status)}">${item.status}</span>`;
                  return item.file
                    ? `<a href="${item.file}" target="_blank" class="dl-card" download>${cardBody}</a>`
                    : `<article class="dl-card dl-card--disabled" aria-label="${item.name}">${cardBody}</article>`;
                }).join('')}
              </div>
            </section>
          `).join('')}
        </div>
      </div>
    </section>`;
}

function renderDepartamentos() {
  return `
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__eyebrow">Departamentos</span>
          <h2 class="section__title">Estrutura Operacional da Federação</h2>
          <p class="section__desc">Setores de apoio institucional com responsáveis e contatos disponíveis para filiados.</p>
        </div>
        <div class="dept-grid">
          ${DEPARTMENTS.map(d => `
            <div class="dept-card">
              <div class="dept-card__header">
                <h3 class="dept-card__title">${d.title}</h3>
              </div>
              <div class="dept-card__body">
                <div class="dept-card__name">${d.name}</div>
                <div class="dept-card__role">${d.role}</div>
                <p class="dept-card__bio">${d.bio}</p>
                ${d.contact ? `<span class="dept-card__contact">📞 ${d.contact}</span>` : '<span class="dept-card__contact dept-card__contact--muted">Contato em breve</span>'}
              </div>
            </div>
          `).join('')}
          <div class="dept-card">
            <div class="dept-card__header"><h3 class="dept-card__title">Outros setores</h3></div>
            <div class="dept-card__body">
              <p class="dept-card__bio">Demais setores institucionais serão detalhados em breve.</p>
              <span class="dept-card__contact dept-card__contact--muted">Contato em breve</span>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function renderContato() {
  return `
    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__eyebrow">Contato</span>
          <h2 class="section__title">Fale com a Federação</h2>
          <p class="section__desc">Canal de contato oficial da FMTC-MMA, com sede em Contagem — Minas Gerais.</p>
        </div>
        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-info__item">
              <div class="contact-info__label">Email</div>
              <div class="contact-info__value">fmtc-mma@fmtc-mma.com</div>
            </div>
            <div class="contact-info__item">
              <div class="contact-info__label">Localização</div>
              <div class="contact-info__value">Contagem — Minas Gerais, Brasil</div>
            </div>
            <div class="contact-info__item">
              <div class="contact-info__label">Como filiar-se</div>
              <div class="contact-info__value">Envie ficha preenchida + comprovante de depósito + anexos para fmtc-mma@fmtc-mma.com</div>
            </div>
            <div class="contact-info__item">
              <div class="contact-info__label">Diretor Fiscal</div>
              <div class="contact-info__value">Rafael Ribeiro Silva — (31) 99185-0965</div>
            </div>
            <div class="contact-info__item">
              <div class="contact-info__label">Departamento Contábil</div>
              <div class="contact-info__value">Roberta Keyla — (31) 99953-9903</div>
            </div>
            <div class="contact-info__item">
              <div class="contact-info__label">Departamento Jurídico</div>
              <div class="contact-info__value">Dr. Manoel Jandir de Almeida Junior — OAB/MG 116.269 — (31) 99867-1338</div>
            </div>
          </div>
          <form class="form" id="contactForm" novalidate>
            <div class="form__row">
              <div class="form__group">
                <label class="form__label" for="cName">Nome</label>
                <input type="text" class="form__input" id="cName" name="name" required autocomplete="name">
              </div>
              <div class="form__group">
                <label class="form__label" for="cEmail">Email</label>
                <input type="email" class="form__input" id="cEmail" name="email" required autocomplete="email">
              </div>
            </div>
            <div class="form__group">
              <label class="form__label" for="cSubject">Assunto</label>
              <input type="text" class="form__input" id="cSubject" name="subject">
            </div>
            <div class="form__group">
              <label class="form__label" for="cMessage">Mensagem</label>
              <textarea class="form__textarea" id="cMessage" name="message" required></textarea>
            </div>
            <div class="form__actions">
              <button type="submit" class="btn btn--primary">Enviar Mensagem</button>
            </div>
            <div class="form__success" id="formSuccess">Mensagem enviada com sucesso. Retornaremos em breve.</div>
          </form>
        </div>
      </div>
    </section>`;
}

/* ── PAGE-SPECIFIC FEATURES ───────────── */

function initPageFeatures(hash) {
  if (hash === '/inicio') initCounters();
  if (hash === '/professores') initProfessorDirectory();
  if (hash === '/arbitros') initRefereeDirectory();
  if (hash === '/atletas') initAthleteDirectory();
  if (hash === '/onde-treinar') initGymDirectory();
  if (hash === '/contato') initContactForm();
  initScrollAnimations();
}

/* Counter animation */
function initCounters() {
  document.querySelectorAll('.stat__number[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(ease * target);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* Diretórios com busca e filtros */
let currentPage = 1;
const ATHLETE_PER_PAGE = 48;

function setupSearchClear(inputId, clearBtnId, onChange) {
  const input = document.getElementById(inputId);
  const clear = document.getElementById(clearBtnId);
  if (!input || !clear) return;
  input.addEventListener('input', onChange);
  clear.addEventListener('click', () => {
    input.value = '';
    onChange();
    input.focus();
  });
}

function updateEmptyState(emptyId, show) {
  const empty = document.getElementById(emptyId);
  if (!empty) return;
  empty.classList.toggle('show', show);
}

function initProfessorDirectory() {
  const update = () => renderProfessorGrid();
  setupSearchClear('profSearch', 'profClearSearch', update);
  ['profFilterFuncao', 'profFilterModalidade', 'profFilterEquipe', 'profFilterCidade'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', update);
  });
  renderProfessorGrid();
}

function getFilteredProfessors() {
  const q = normalizeText(document.getElementById('profSearch')?.value || '');
  const funcao = document.getElementById('profFilterFuncao')?.value || '';
  const modalidade = document.getElementById('profFilterModalidade')?.value || '';
  const equipe = document.getElementById('profFilterEquipe')?.value || '';
  const cidade = document.getElementById('profFilterCidade')?.value || '';
  return PROFESSOR_DIRECTORY.filter(item => {
    const searchable = normalizeText(`${item.nome} ${item.registro} ${item.modalidade.join(' ')}`);
    if (q && !searchable.includes(q)) return false;
    if (funcao && item.funcao !== funcao) return false;
    if (modalidade && !item.modalidade.includes(modalidade)) return false;
    if (equipe && item.equipe !== equipe) return false;
    if (cidade && item.cidade !== cidade) return false;
    return true;
  }).sort(byName);
}

function renderProfessorGrid() {
  const filtered = getFilteredProfessors();
  const grid = document.getElementById('profGrid');
  const count = document.getElementById('profCount');
  if (count) count.textContent = `${filtered.length} professor${filtered.length !== 1 ? 'es' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;
  if (!grid) return;
  grid.innerHTML = filtered.map(item => {
    const levelClass = normalizeText(item.funcao);
    return `<a class="prof-card" href="#/professores/${item.slug}">
      <span class="prof-card__level prof-card__level--${levelClass}">${item.funcao}</span>
      <h3 class="prof-card__name">${item.nome}</h3>
      <div class="prof-card__meta">
        <span><strong>Modalidades:</strong> ${item.modalidade.join(', ') || 'A confirmar'}</span>
        <span><strong>Equipe:</strong> ${item.equipe || 'A confirmar'}</span>
        <span><strong>Cidade:</strong> ${item.cidade || 'A confirmar'}</span>
        <span class="prof-card__reg">Registro: ${item.registro || 'A confirmar'}</span>
      </div>
    </a>`;
  }).join('');
  updateEmptyState('profEmpty', filtered.length === 0);
}

function initRefereeDirectory() {
  const update = () => renderRefereeGrid();
  setupSearchClear('refSearch', 'refClearSearch', update);
  ['refFilterFuncao', 'refFilterModalidade', 'refFilterEquipe', 'refFilterCidade'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', update);
  });
  renderRefereeGrid();
}

function getFilteredReferees() {
  const q = normalizeText(document.getElementById('refSearch')?.value || '');
  const funcao = document.getElementById('refFilterFuncao')?.value || '';
  const modalidade = document.getElementById('refFilterModalidade')?.value || '';
  const equipe = document.getElementById('refFilterEquipe')?.value || '';
  const cidade = document.getElementById('refFilterCidade')?.value || '';
  return REFEREE_DIRECTORY.filter(item => {
    const searchable = normalizeText(`${item.nome} ${item.registro} ${item.modalidade.join(' ')}`);
    if (q && !searchable.includes(q)) return false;
    if (funcao && item.funcao !== funcao) return false;
    if (modalidade && !item.modalidade.includes(modalidade)) return false;
    if (equipe && item.equipe !== equipe) return false;
    if (cidade && item.cidade !== cidade) return false;
    return true;
  }).sort(byName);
}

function renderRefereeGrid() {
  const filtered = getFilteredReferees();
  const grid = document.getElementById('refGrid');
  const count = document.getElementById('refCount');
  if (count) count.textContent = `${filtered.length} árbitro${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;
  if (!grid) return;
  grid.innerHTML = filtered.map(item => `
    <a class="directory-card" href="#/arbitros/${item.slug}">
      <h3 class="directory-card__title">${item.nome}</h3>
      <p class="directory-card__meta"><strong>Função:</strong> ${item.funcao}</p>
      <p class="directory-card__meta"><strong>Registro:</strong> ${item.registro || 'A confirmar'}</p>
      <p class="directory-card__meta"><strong>Modalidades:</strong> ${item.modalidade.join(', ') || 'A confirmar'}</p>
      <p class="directory-card__meta"><strong>Equipe:</strong> ${item.equipe || 'A confirmar'}</p>
      <p class="directory-card__meta"><strong>Cidade:</strong> ${item.cidade || 'A confirmar'}</p>
    </a>
  `).join('');
  updateEmptyState('refEmpty', filtered.length === 0);
}

function initAthleteDirectory() {
  currentPage = 1;
  const update = () => { currentPage = 1; renderAthleteGrid(); };
  setupSearchClear('athleteSearch', 'athleteClearSearch', update);
  ['athleteFilterFuncao', 'athleteFilterModalidade', 'athleteFilterEquipe', 'athleteFilterCidade'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', update);
  });
  renderAthleteGrid();
}

function getFilteredAthletes() {
  const q = normalizeText(document.getElementById('athleteSearch')?.value || '');
  const funcao = document.getElementById('athleteFilterFuncao')?.value || '';
  const modalidade = document.getElementById('athleteFilterModalidade')?.value || '';
  const equipe = document.getElementById('athleteFilterEquipe')?.value || '';
  const cidade = document.getElementById('athleteFilterCidade')?.value || '';
  return ATHLETE_DIRECTORY.filter(item => {
    const searchable = normalizeText(`${item.nome} ${item.registro} ${item.modalidade.join(' ')}`);
    if (q && !searchable.includes(q)) return false;
    if (funcao && item.funcao !== funcao) return false;
    if (modalidade && !item.modalidade.includes(modalidade)) return false;
    if (equipe && item.equipe !== equipe) return false;
    if (cidade && item.cidade !== cidade) return false;
    return true;
  }).sort(byName);
}

function renderAthleteGrid() {
  const filtered = getFilteredAthletes();
  const totalPages = Math.ceil(filtered.length / ATHLETE_PER_PAGE);
  if (currentPage > totalPages) currentPage = totalPages || 1;
  const start = (currentPage - 1) * ATHLETE_PER_PAGE;
  const pageItems = filtered.slice(start, start + ATHLETE_PER_PAGE);

  const countEl = document.getElementById('athleteCount');
  if (countEl) countEl.textContent = `${filtered.length} atleta${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;

  const grid = document.getElementById('athleteGrid');
  if (grid) {
    grid.innerHTML = pageItems.map(item => {
      const initials = item.nome.split(' ').filter(word => word.length > 1).slice(0, 2).map(word => word[0]).join('');
      return `<a class="athlete-card" href="#/atletas/${item.slug}">
        <div class="athlete-card__avatar athlete-card__avatar--${item.funcaoNorm}">${initials}</div>
        <div class="athlete-card__info">
          <div class="athlete-card__name" title="${item.nome}">${item.nome}</div>
          <div class="athlete-card__details">${item.modalidade.join(', ') || 'A confirmar'} · ${item.equipe || 'A confirmar'} · ${item.cidade || 'A confirmar'}</div>
        </div>
        <span class="athlete-card__reg">#${item.registro}</span>
      </a>`;
    }).join('');
  }

  updateEmptyState('athleteEmpty', filtered.length === 0);

  const pag = document.getElementById('athletePagination');
  if (pag && totalPages > 1) {
    let html = '';
    if (currentPage > 1) html += `<button class="pagination__btn" data-page="${currentPage - 1}">‹</button>`;
    const maxShow = 7;
    let startPage = Math.max(1, currentPage - 3);
    let endPage = Math.min(totalPages, startPage + maxShow - 1);
    if (endPage - startPage < maxShow - 1) startPage = Math.max(1, endPage - maxShow + 1);
    for (let page = startPage; page <= endPage; page++) {
      html += `<button class="pagination__btn${page === currentPage ? ' active' : ''}" data-page="${page}">${page}</button>`;
    }
    if (currentPage < totalPages) html += `<button class="pagination__btn" data-page="${currentPage + 1}">›</button>`;
    pag.innerHTML = html;
    pag.querySelectorAll('.pagination__btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page, 10);
        renderAthleteGrid();
        document.getElementById('athleteSearch')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  } else if (pag) {
    pag.innerHTML = '';
  }
}

function initGymDirectory() {
  const update = () => renderGymGrid();
  setupSearchClear('gymSearch', 'gymClearSearch', update);
  ['gymFilterEquipe', 'gymFilterCidade', 'gymFilterModalidade'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', update);
  });
  renderGymGrid();
}

function getFilteredGyms() {
  const q = normalizeText(document.getElementById('gymSearch')?.value || '');
  const equipe = document.getElementById('gymFilterEquipe')?.value || '';
  const cidade = document.getElementById('gymFilterCidade')?.value || '';
  const modalidade = document.getElementById('gymFilterModalidade')?.value || '';
  return GYM_DIRECTORY.filter(item => {
    const searchable = normalizeText(`${item.nome} ${item.cidade} ${item.modalidade.join(' ')}`);
    if (q && !searchable.includes(q)) return false;
    if (equipe && item.equipe !== equipe) return false;
    if (cidade && item.cidade !== cidade) return false;
    if (modalidade && !item.modalidade.includes(modalidade)) return false;
    return true;
  }).sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
}

function renderGymGrid() {
  const filtered = getFilteredGyms();
  const grid = document.getElementById('gymGrid');
  const count = document.getElementById('gymCount');
  if (count) count.textContent = `${filtered.length} academia${filtered.length !== 1 ? 's' : ''} encontrada${filtered.length !== 1 ? 's' : ''}`;
  if (!grid) return;
  grid.innerHTML = filtered.map(item => `
    <article class="gym-card">
      <h3 class="gym-card__name">${item.nome}</h3>
      <p class="gym-card__location">📍 ${item.cidade}${item.regiao ? ` — ${item.regiao}` : ''}</p>
      <p class="gym-card__stat">${item.totalAtletas} atleta${item.totalAtletas !== 1 ? 's' : ''} vinculado${item.totalAtletas !== 1 ? 's' : ''}</p>
      <p class="directory-card__meta"><strong>Modalidades:</strong> ${item.modalidade.join(', ') || 'A confirmar'}</p>
      <div class="gym-card__links">
        ${item.professores.slice(0, 3).map(person => `<a class="profile-link" href="#/professores/${person.slug}">${person.nome}</a>`).join('') || '<span class="profile-update">A confirmar</span>'}
      </div>
    </article>
  `).join('');
  updateEmptyState('gymEmpty', filtered.length === 0);
}

/* Contact form */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('cName')?.value.trim();
    const email = document.getElementById('cEmail')?.value.trim();
    const msg = document.getElementById('cMessage')?.value.trim();
    if (!name || !email || !msg) { alert('Por favor, preencha todos os campos obrigatórios.'); return; }
    document.getElementById('formSuccess')?.classList.add('show');
    form.reset();
  });
}

/* Accordions */
function initAccordions() {
  document.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const body = trigger.nextElementSibling;
      const isOpen = trigger.classList.contains('open');
      /* Close all first */
      trigger.closest('.accordion')?.querySelectorAll('.accordion__trigger').forEach(t => {
        t.classList.remove('open');
        t.nextElementSibling?.classList.remove('open');
      });
      if (!isOpen) {
        trigger.classList.add('open');
        body?.classList.add('open');
      }
    });
  });
}

/* Scroll animations */
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.anim-up').forEach(el => obs.observe(el));
}

/* ── GLOBAL INIT ─────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  /* Header scroll effect */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* Mobile menu */
  const toggle = document.getElementById('mobileToggle');
  const navMob = document.getElementById('navMobile');
  toggle?.addEventListener('click', () => {
    const open = navMob.classList.toggle('open');
    toggle.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    navMob.setAttribute('aria-hidden', !open);
    document.body.classList.toggle('menu-open', open);
  });

  /* Close mobile menu on link click */
  navMob?.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', closeMobileMenu);
  });

  /* Initial route */
  if (!location.hash) location.hash = '#/inicio';
  router();
});

window.addEventListener('hashchange', router);