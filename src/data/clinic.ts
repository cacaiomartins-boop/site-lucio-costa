// Todos os textos, preços, links e imagens do site ficam aqui.
// Para editar o site, mexa neste arquivo — não precisa mexer nos componentes.

const address = {
  building: "Ed. Liberty Mall",
  street: "SCN, Quadra 02, Bloco B, sala 711 - Asa Norte",
  streetShort: "SCN Q. 2 Bloco B, Sala 711",
  city: "Brasília — DF",
  cep: "70712-020",
};

const mapsQuery =
  "Ed.+Liberty+Mall,+SCN,+Quadra+02,+Bloco+B,+sala+711+-+Asa+Norte,+Bras%C3%ADlia+-+DF,+70712-020";

export const clinic = {
  name: "Lucio Costa",
  crp: "CRP 01/20083",
  role: "Psicólogo · Clínica psicanalítica",
  copyYear: 2026,

  // WhatsApp: só números, com 55 + DDD. Número do Lucio: (61) 99113-1309.
  whatsapp: "5561991131309",
  whatsappMessage: "Olá, Lucio! Vim pelo seu site e gostaria de agendar um primeiro encontro.",

  address,
  // Consultórios (Brasília e Sorocaba). Endereço completo de Sorocaba ainda não informado.
  offices: [
    { city: "Brasília (DF)", place: "Ed. Liberty Mall", detail: `${address.street}`, extra: `CEP ${address.cep}` },
    { city: "Sorocaba (SP)", place: "Ed. Campolim Tower", detail: "Campolim", extra: "" },
  ],
  mapsLink: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapsEmbed: `https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`,

  // Vídeo de apresentação — PENDENTE. Cole o link (YouTube/Vimeo) ou o arquivo .mp4 em "url".
  // Vazio = a seção de vídeo não aparece.
  video: { url: "", poster: "", title: "Vídeo de apresentação do Lucio Costa" },

  // Imagens: coloque os arquivos em public/img/ e use "/img/arquivo.jpg".
  // (A foto do Lucio ainda é o link provisório do layout original.)
  images: {
    // Topo do site (foto do Lucio) — foto de retrato. É a única foto dele no site.
    heroPortrait:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2lSxrUUHcBz9jD82h7wrvr_bspnzrh3z4tqSYyztpgg7TphxJAIcGE-XMRuscL5X4lwa0VFuv90JDfWEN9jbNzgsUO5luFo4TGqWC0pz3m-GIrKqkfrvC5gn8xSFfMQX83m5KMKPSQMJhvOOjdOVu3RHpOPi_3b_940t4ZgnAAF8Hv1JWMNI8z_F-j4UlPnlN3NeqBE52fzR1Li7MlAiAk8z1KnxxUGulkD-YQc3z9atwgfpYVEL6",
    heroPortraitAlt: "Lucio Costa, psicólogo",

    // FOTOS DO CONSULTÓRIO (pendente).
    // - heroBackground: imagem de fundo do topo. Vazio = fundo verde liso.
    // - abordagem: foto ao lado do texto da seção 03. Vazio = mostra a frase em destaque.
    heroBackground: "",
    abordagem: "",
    abordagemAlt: "Consultório do Lucio Costa",
  },

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Abordagem", href: "#como-trabalho" },
    { label: "Modalidades", href: "#atendimento" },
    { label: "Valores", href: "#valores" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
  mobileNav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Abordagem", href: "#como-trabalho" },
    { label: "Modalidades", href: "#atendimento" },
    { label: "Valores e Formas de Pagamento", href: "#valores" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    srTitle: "Lucio Costa — Psicólogo, clínica psicanalítica em Brasília, Sorocaba e online",
    badge: "Psicólogo · CRP 01/20083 · Clínica psicanalítica",
    text: "Um lugar para falar do que sente, do que se repete e do que ainda não tem nome.",
    support: "Atendimento de adultos e casais, presencial e online.",
    credit: "Psicólogo",
    cta1: "Agendar um primeiro encontro",
    cta2: "Como eu trabalho",
  },

  trust: [
    { icon: "badge", title: "CRP 01/20083", text: "Psicólogo · clínica psicanalítica" },
    { icon: "pin_drop", title: "Brasília (DF) – Asa Norte", text: "Consultório no Ed. Liberty Mall" },
    { icon: "location_on", title: "Sorocaba (SP) – Campolim", text: "Consultório no Ed. Campolim Tower" },
    { icon: "devices", title: "Atendimento presencial e online", text: "Adultos e casais" },
  ],

  paraQuemE: {
    kicker: "01 — Para quem é",
    titleBefore: "Quando algo se repete e você ",
    titleItalic: "não entende",
    titleAfter: " por quê",
    intro:
      "Muitas pessoas chegam a uma análise sem saber dizer exatamente o que as trouxe. Chegam com um mal-estar, uma pergunta, um cansaço de si. Não é preciso ter um diagnóstico nem saber o que dizer: a análise pode começar justamente pelo que ainda não está evidenciado.",
    items: [
      {
        title: "Angústia e ansiedade",
        text: "Uma inquietação que não passa, mesmo quando “está tudo bem”.",
      },
      {
        title: "Amor e laços",
        text: "Relacionamentos que se desfazem sempre do mesmo jeito; ciúmes, brigas, silêncios que pesam.",
      },
      {
        title: "Tristeza e perda de sentido",
        text: "Quando as coisas deixam de ter sabor e o futuro parece não chamar.",
      },
      {
        title: "Trabalho e exigência",
        text: "A cobrança que não cessa, o esgotamento, a dificuldade de parar.",
      },
      {
        title: "Excessos",
        text: "Comer, comprar, beber ou trabalhar além da conta, como quem tenta calar alguma coisa.",
      },
      {
        title: "Escolhas e desejo",
        text: "A dúvida que paralisa, a sensação de viver o desejo dos outros.",
      },
      {
        title: "Autoconhecimento e reflexão",
        text: "O desejo de compreender melhor a própria história, as escolhas e a maneira de se relacionar com o mundo, mesmo quando não há um sofrimento específico.",
      },
    ],
    closing:
      "Na psicanálise, o sintoma não é visto apenas como algo a eliminar. Ele também pode revelar questões da existência de cada pessoa que merecem ser escutadas.",
  },

  sobre: {
    kicker: "02 — Sobre",
    titleBefore: "Uma escuta formada na clínica, orientada pela perspectiva dos ",
    titleItalic: "direitos humanos",
    titleAfter: "",
    cardName: "Lucio Costa",
    cardRole: "Psicólogo",
    cardInfo: "CRP 01/20083 · Mestre em Educação (UFSCar)",
    paragraphs: [
      "Sou psicólogo há 18 anos e trabalho com base na psicanálise. Atendo adultos e casais em consultório particular, presencialmente em Brasília (DF) e Sorocaba (SP), e online. Minha clínica parte da escuta de cada pessoa em sua singularidade, considerando sua história, seus impasses e a maneira como estabelece relações consigo mesma e com o mundo.",
      "Minha formação em psicanálise se sustenta no que a tradição psicanalítica considera indispensável: análise pessoal, supervisão clínica e estudo teórico permanente. Parte desse percurso foi desenvolvido na Sociedade de Psicanálise de Brasília (SPB). Sou mestre em Educação pela Universidade Federal de São Carlos (UFSCar) e minha experiência com formação e supervisão inclui a tutoria de profissionais de Psicologia na Residência Multiprofissional em Saúde da Família com Ênfase na População do Campo, realizada pela Fundação Oswaldo Cruz (Fiocruz Brasília), e a supervisão clínica no Centro de Orientação Médico e Psicopedagógica do Distrito Federal.",
      "Ao lado da clínica, construí uma trajetória profissional ligada às políticas públicas de saúde mental e à defesa dos direitos humanos. Coordenei área de saúde mental e direitos humanos da Secretaria de Direitos Humanos da Presidência da República e fui perito do Mecanismo Nacional de Prevenção e Combate à Tortura, entre 2016 e 2022. Também atuei como diretor técnico de Saúde Mental no Centro de Atendimento e Estudos da Saúde do Servidor Público do Distrito Federal e como conselheiro do Conselho Regional de Psicologia do Distrito Federal (CRP-DF), em seu 17º Plenário. Atualmente, sou diretor executivo do Desinstitute, organização da sociedade civil que atua em saúde mental e direitos humanos no Brasil e no Sul Global. Essa experiência também inclui atividades de formação e pesquisa, atuando como palestrante e representante institucional em congressos e seminários em países como Itália, Suíça, Estados Unidos, Áustria, México, Cuba, Colômbia, Argentina e África do Sul.",
    ],
    quote:
      "O diálogo entre clínica, saúde mental e direitos humanos atravessa minha trajetória e participa da maneira como compreendo o sofrimento psíquico: sem reduzir a pessoa à necessidade de se adaptar a uma norma e sem separar sua experiência das relações e do contexto em que vive.",
  },

  abordagem: {
    kicker: "03 — Abordagem",
    titleBefore: "Como funciona uma ",
    titleItalic: "análise",
    titleAfter: "",
    paragraphs: [
      "Na psicanálise não há roteiro, exercício ou conselho. O convite é falar do que vier à cabeça, sem selecionar apenas o que parece importante, adequado ou lógico. É nessa fala livre – nos tropeços, nos esquecimentos, nos sonhos e no que se repete – que algo do inconsciente pode aparecer e ser escutado.",
      "O analista não diz ao paciente quem ele é nem o que deve fazer. Sua função é sustentar uma escuta ativa, pontuando e formulando, de modo que a própria pessoa possa se ouvir de outro jeito.",
    ],
    quote:
      "Na análise, as perguntas também fazem parte do trabalho. Ao falar sobre sua história, cada pessoa pode encontrar outras maneiras de compreender o que vive, assumindo a autoria daquilo que se pergunta, do que se decide e do que ainda está por se construir.",
    caption: "Atendimento clínico — Brasília, Sorocaba e online",
    pillarsTitle: "Três aspectos do trabalho",
    pillars: [
      {
        num: "i.",
        title: "Uma escuta para cada pessoa",
        text: "Cada análise se constrói a partir da história e das palavras de quem fala.",
      },
      {
        num: "ii.",
        title: "O que se repete tem história",
        text: "Aquilo que insiste no presente pode ter raízes antigas. A análise abre espaço para reconhecer essas tramas e a maneira como cada pessoa se coloca nelas.",
      },
      {
        num: "iii.",
        title: "Responsabilizar-se pelo próprio desejo",
        text: "O trabalho não busca ensinar alguém a se adaptar, mas criar condições para que possa reconhecer seus impasses e fazer escolhas próprias.",
      },
    ],
    efeitos: {
      title: "Sobre os efeitos de uma análise",
      text: "Cada percurso é singular, e seus efeitos podem aparecer de maneiras diferentes: numa relação que se transforma, numa escolha que passa a ser possível ou num sintoma que perde força.",
    },
    notIs: {
      title: "O que este trabalho não é",
      items: [
        "Não é autoajuda nem treinamento de comportamento.",
        "Não é aconselhamento nem julgamento moral.",
        "Não é promessa de mudança rápida.",
        "Não segue protocolo com número fixo de sessões.",
      ],
    },
    closing: "Uma análise começa quando alguém decide falar e também se dispõe a escutar o que diz.",
  },

  passos: {
    kicker: "04 — Como começar",
    titleBefore: "Como ",
    titleItalic: "começar",
    items: [
      {
        num: "01",
        title: "Primeiro contato",
        text: "Você envia uma mensagem e diz se prefere atendimento presencial ou online.",
      },
      {
        num: "02",
        title: "Combinamos horário e formato",
        text: "Envio as orientações de acesso à videochamada ou ao consultório.",
      },
      {
        num: "03",
        title: "Entrevistas iniciais",
        text: "Os primeiros encontros servem para falar do que trouxe você até aqui e para avaliarmos juntos se e como seguir.",
      },
      {
        num: "04",
        title: "Continuidade",
        text: "Definimos frequência, horário e os demais combinados do trabalho.",
      },
    ],
  },

  atendimento: {
    kicker: "05 — Modalidades",
    title: "Modalidades",
    text: "Atendimento particular, com recibo para solicitação de reembolso ao plano de saúde.",
    cta: "Agendar um primeiro encontro",
    plans: [
      {
        modeIcon: "location_on",
        mode: "Presencial",
        title: "Atendimento individual presencial",
        text: "Adultos. Consultório no Ed. Liberty Mall, Asa Norte (Brasília/DF) e no Ed. Campolim Tower, Campolim (Sorocaba/SP).",
      },
      {
        modeIcon: "videocam",
        mode: "Online",
        title: "Atendimento individual online",
        text: "Adultos, por videochamada, para quem está em qualquer lugar do Brasil ou para brasileiros que vivem no exterior.",
      },
      {
        modeIcon: "favorite",
        mode: "Presencial ou online",
        title: "Atendimento de casal",
        text: "Presencial ou online, para casais que atravessam impasses, crises ou mudanças na relação.",
      },
    ],
  },

  online: {
    kicker: "06 — Atendimento online",
    titleBefore: "A escuta também acontece ",
    titleItalic: "a distância",
    text: "O atendimento online segue os mesmos princípios éticos e técnicos do presencial. Como a psicanálise se apoia na palavra e na relação com o analista, o trabalho pode acontecer por vídeo, desde que você esteja em um lugar reservado, onde possa falar livremente.",
    badgeKicker: "Online",
    badgeText: "Atendimento online · Brasil e exterior",
    bullets: [
      "Plataforma de videochamada com criptografia; o link é enviado antes da sessão.",
      "Para quem mora longe, viaja com frequência ou vive fora do Brasil.",
      "Atendimento conforme as resoluções do Conselho Federal de Psicologia.",
    ],
  },

  faq: {
    kicker: "07 — Perguntas frequentes",
    titleBefore: "Perguntas ",
    titleItalic: "frequentes",
    items: [
      {
        q: "Como são os primeiros encontros?",
        a: "Você fala do que trouxe você até aqui, do jeito que puder. Eu explico como trabalho e, juntos, avaliamos se é o momento de iniciar uma análise e com que frequência.",
      },
      {
        q: "Com que frequência são as sessões?",
        a: "No mínimo uma vez por semana, em horário fixo. A regularidade faz parte do trabalho, e a frequência é combinada caso a caso.",
      },
      {
        q: "Atende por plano de saúde?",
        a: "O atendimento é particular. Forneço recibo com CRP para que você solicite reembolso, conforme as regras do seu plano de saúde.",
      },
      {
        q: "Como fica o sigilo?",
        a: "O sigilo profissional é um dever do psicólogo, definido no Código de Ética Profissional do Conselho Federal de Psicologia.",
      },
      {
        q: "Qual é o valor da sessão?",
        a: "A sessão individual é R$ 400,00 e a sessão de casal é R$ 600,00.",
      },
      {
        q: "Como é o pagamento?",
        a: "As condições são combinadas no início do trabalho.",
      },
      {
        q: "Qual a diferença entre psicanálise e outras psicoterapias?",
        a: "A psicanálise não parte de técnicas voltadas apenas à eliminação dos sintomas. Considera que eles podem ter relação com a história de cada pessoa. Por isso, o tempo de cada análise é singular. O foco não se resume a olhar a questão apenas no presente, mas entender como ela se relaciona a vivências e trajetórias pessoais.",
      },
    ],
  },

  valores: {
    kicker: "08 — Valores e formas de pagamento",
    titleBefore: "Valores e formas de ",
    titleItalic: "pagamento",
    prices: [
      { label: "Sessão individual", price: "R$ 400,00" },
      { label: "Sessão de casal", price: "R$ 600,00" },
    ],
    paymentTitle: "Como é o pagamento?",
    paymentText: "As condições são combinadas no início do trabalho.",
    cta: "Agendar um primeiro encontro",
  },

  contato: {
    kicker: "09 — Contato",
    titleBefore: "Comece por uma ",
    titleItalic: "conversa",
    text: "Se algo em você pede para ser dito, este pode ser um bom lugar para começar.",
    cta: "Agendar um primeiro encontro",
    onlineText: "Disponível para pacientes de todo o Brasil e brasileiros residentes no exterior.",
    mapTitle: "Ed. Liberty Mall, Asa Norte",
    mapSub: "SCN Quadra 02 Bloco B sala 711 · Brasília/DF",
    mapLink: "Abrir no Google Maps",
  },

  footer: {
    onlineText: "Atendimento online para adultos e casais, em todo o Brasil e no exterior.",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Abordagem", href: "#como-trabalho" },
      { label: "Modalidades", href: "#atendimento" },
      { label: "Valores e Formas de Pagamento", href: "#valores" },
      { label: "Perguntas Frequentes", href: "#duvidas" },
      { label: "Contato", href: "#contato" },
    ],
    crisisTitle: "Aviso de crise",
    crisisText:
      "Este consultório não realiza atendimento de emergência. Se você está em sofrimento intenso ou pensando em tirar a própria vida, procure o CVV (ligue 188, gratuito, 24 horas), o SAMU (192) ou o CAPS mais próximo.",
    ethics: "Código de Ética Profissional do Psicólogo (CFP).",
  },
};

export const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
  clinic.whatsappMessage,
)}`;
