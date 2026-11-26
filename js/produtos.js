// Fatto a Mano: dados do catalogo de UNIFORMES CORPORATIVOS FEMININOS 2026, iguais ao PDF de atacado (7 paginas)
// mais a capa e o contato. Para trocar texto ou cor, e so mexer aqui. Fotos de cada peca, pelo id:
//   fotos/grande/<id>-modelo.webp      foto grande da modelo
//   fotos/grande/<id>-detalhe-1.webp   detalhe de cima
//   fotos/grande/<id>-detalhe-2.webp   detalhe de baixo
//   fotos/media/  (mesmos nomes, menores, usados no celular)   fotos/zoom/<id>-modelo.webp (foto ampliada)
// As fotos ficam uma semana guardadas no navegador de quem ja abriu: ao trocar uma foto, troque tambem o NOME do arquivo.

window.LOJA = {
  nome: 'Fatto a Mano',
  assinatura: 'Alfaiataria contemporânea',
  whatsapp: '5511920526328',                     // so digitos, com 55 e DDD
  whatsappTexto: '+55 11 92052-6328',            // como aparece na pagina de contato
  email: 'fattoamanomarketplaces@gmail.com',
  mensagem: 'Olá! Vi o catálogo de uniformes da Fatto a Mano e tenho interesse na peça {peca}, cor {cor}. Gostaria de um orçamento.',
  mensagemGeral: 'Olá! Vi o catálogo de uniformes da Fatto a Mano e gostaria de um orçamento para a minha equipe.',
};

// Os tres atributos que aparecem em toda ficha (icones: broto, camadas, peca).
window.ATRIBUTOS = [
  { icone: 'broto',   texto: 'Conforto' },
  { icone: 'camadas', texto: 'Versatilidade' },
  { icone: 'peca',    texto: 'Caimento' },
];

// As pecas, na ordem do PDF. `id` e o comeco do nome dos arquivos de foto.
window.PRODUTOS = [
  {
    id: 'camisa-social',
    nome: 'Camisa social feminina',
    linhas: ['Camisa social', 'feminina'],
    descricao: 'Camisa de manga longa, gola clássica e fechamento frontal. Uma opção versátil para a rotina corporativa.',
    cores: [
      { id: 'preto',      nome: 'Preto',      hex: '#151515' },
      { id: 'azul-claro', nome: 'Azul claro', hex: '#b8d4ec' },
      { id: 'vinho',      nome: 'Vinho',      hex: '#6c1a2b' },
      { id: 'branco',     nome: 'Branco',     hex: '#f5f4f1' },
      { id: 'marinho',    nome: 'Marinho',    hex: '#1c2a4e' },
    ],
    fotos: { modelo: 'Camisa social branca com calça preta na modelo', detalhe1: 'Gola e botões da camisa social branca', detalhe2: 'Cintura da camisa com a calça de alfaiataria' },
  },
  {
    id: 'colete-calca',
    nome: 'Colete e calça de alfaiataria',
    linhas: ['Colete e calça', 'de alfaiataria'],
    descricao: 'Conjunto com colete alongado e calça de pernas amplas. Visual alinhado para equipes de atendimento.',
    cores: [
      { id: 'preto',   nome: 'Preto',   hex: '#151515' },
      { id: 'caqui',   nome: 'Caqui',   hex: '#b9a685' },
      { id: 'marinho', nome: 'Marinho', hex: '#1c2a4e' },
    ],
    fotos: { modelo: 'Colete alongado e calça de alfaiataria pretos na modelo', detalhe1: 'Lapela e botões do colete preto', detalhe2: 'Bolso e caimento do colete' },
  },
  {
    id: 'calca-alfaiataria',
    nome: 'Calça de alfaiataria',
    linhas: ['Calça de', 'alfaiataria'],
    descricao: 'Calça feminina de cintura alta e pernas amplas. Silhueta elegante para diferentes combinações.',
    cores: [
      { id: 'caqui',   nome: 'Caqui',   hex: '#b9a685' },
      { id: 'preto',   nome: 'Preto',   hex: '#151515' },
      { id: 'marinho', nome: 'Marinho', hex: '#1c2a4e' },
    ],
    fotos: { modelo: 'Calça de alfaiataria caqui com camisa preta na modelo', detalhe1: 'Cintura alta e passantes da calça caqui', detalhe2: 'Pernas amplas da calça caqui' },
  },
  {
    id: 'polo',
    nome: 'Polo feminina',
    linhas: ['Polo', 'feminina'],
    descricao: 'Polo de manga curta e gola clássica. Uma proposta prática para uniformes corporativos.',
    cores: [
      { id: 'marinho',       nome: 'Marinho',       hex: '#1c2a4e' },
      { id: 'caqui',         nome: 'Caqui',         hex: '#b9a685' },
      { id: 'branco',        nome: 'Branco',        hex: '#f5f4f1' },
      { id: 'vinho',         nome: 'Vinho',         hex: '#6c1a2b' },
      { id: 'verde-militar', nome: 'Verde militar', hex: '#4c5a25' },
      { id: 'vermelho',      nome: 'Vermelho',      hex: '#b01f2a' },
      { id: 'azul-claro',    nome: 'Azul claro',    hex: '#b8d4ec' },
      { id: 'preto',         nome: 'Preto',         hex: '#151515' },
    ],
    fotos: { modelo: 'Polo branca com calça preta na modelo', detalhe1: 'Gola e abotoamento da polo branca', detalhe2: 'Barra da polo com a calça preta' },
  },
  {
    id: 'conjunto-alfaiataria',
    nome: 'Conjunto de alfaiataria',
    linhas: ['Conjunto de', 'alfaiataria'],
    descricao: 'Blazer e calça em proposta coordenada, com visual contemporâneo para ambientes profissionais.',
    cores: [
      { id: 'off-white',   nome: 'Off-white',   hex: '#ece6da' },
      { id: 'azul-claro',  nome: 'Azul claro',  hex: '#b8d4ec' },
      { id: 'marrom',      nome: 'Marrom',      hex: '#8b5234' },
      { id: 'verde-oliva', nome: 'Verde oliva', hex: '#6a7235' },
    ],
    fotos: { modelo: 'Conjunto de blazer e calça off-white na modelo', detalhe1: 'Lapela e botão do blazer off-white', detalhe2: 'Cintura e pregas da calça off-white' },
  },
  {
    id: 'costume',
    nome: 'Costume feminino',
    linhas: ['Costume', 'feminino'],
    descricao: 'Blazer estruturado e calça de alfaiataria. Uma composição clássica para a apresentação profissional.',
    cores: [
      { id: 'marinho', nome: 'Marinho', hex: '#1c2a4e' },
      { id: 'preto',   nome: 'Preto',   hex: '#151515' },
      { id: 'bordo',   nome: 'Bordô',   hex: '#6a1925' },
    ],
    fotos: { modelo: 'Costume marinho com camisa branca na modelo', detalhe1: 'Lapela do blazer marinho', detalhe2: 'Bolso e caimento do costume marinho' },
  },
];

// O que aparece em toda ficha no lugar do preco
window.CONSULTA = {
  selo: 'Sob consulta',
  titulo: 'Valores sob consulta',
  texto: 'Projetos desenvolvidos conforme a escolha de tecido, personalização e volume do pedido.',
};

// Capa (abre o catalogo): foto do conjunto off-white e painel creme
window.CAPA = {
  foto: 'capa-conjunto',                 // o conjunto sem a faixa esticada da lateral
  alt: 'Modelo com conjunto de alfaiataria off-white',
  rotulo: 'Uniformes corporativos',
  titulo: ['Coleção', 'feminina'],
  ano: '2026',
  texto: 'Alfaiataria contemporânea para equipes que se apresentam bem todos os dias.',
  rodape: 'Catálogo de atacado · valores sob consulta',
};

// Penultima pagina, igual ao PDF
window.PERSONALIZACAO = {
  rotulo: 'Uniformes corporativos',
  titulo: 'Personalização',
  tecnicas: [
    { titulo: 'Bordado',    texto: 'Acabamento elegante e resistente para polos e uniformes corporativos.' },
    { titulo: 'Silk',       texto: 'Estampa de cores vivas, indicada para grandes tiragens.' },
    { titulo: 'Sublimação', texto: 'Personalização colorida para tecidos compatíveis e ações promocionais.' },
    { titulo: 'DTF',        texto: 'Aplicação de logotipos detalhados em tecidos compatíveis.' },
  ],
};

// Ultima pagina, contato
window.FINAL = {
  titulo: 'Vista a sua equipe com a Fatto a Mano',
  texto: 'Conte o tecido, a personalização e o volume do pedido.',
};
