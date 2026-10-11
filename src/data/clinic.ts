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
  name: "Lúcio Costa",
  crp: "CRP 01/20083",
  role: "Psicólogo Clínico & Psicanalista",
  copyYear: 2025,

  // WhatsApp: só números, com 55 + DDD. Número do Lúcio: (61) 99113-1309.
  whatsapp: "5561991131309",
  whatsappMessage: "Olá, Lúcio! Vim pelo seu site e gostaria de agendar uma consulta.",

  address,
  mapsLink: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapsEmbed: `https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`,

  // Nota: sempre mostrar como "5,0 de 5,0" para ficar claro que é a pontuação máxima.
  // (Redação a confirmar com o Lúcio.)
  rating: { score: "5,0", max: "5,0", count: 41, platform: "Doctoralia" },

  // Perfil do Lúcio no Doctoralia (link que o Caio enviou).
    doctoralia: {
    url: "https://www.doctoralia.com.br/lucio-costa/psicologo-psicanalista/sao-paulo#address-id=851212&is-online-only=true&filters%5Bspecializations%5D%5B%5D=75&filters%5Bonline_only%5D%5B%5D=true",
    cta: "Confira mais depoimentos",
  },

  // Vídeo de apresentação — PENDENTE. Cole o link (YouTube/Vimeo) ou o arquivo .mp4 em "url".
  // Vazio = a seção de vídeo não aparece.
  video: { url: "", poster: "", title: "Vídeo de apresentação do Lúcio Costa" },

  // Imagens: coloque os arquivos em public/img/ e use "/img/arquivo.jpg".
  // (As duas fotos do Lúcio ainda são os links provisórios do layout original.)
  images: {
    // Topo do site (foto do Lúcio) — foto de retrato
    heroPortrait:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2lSxrUUHcBz9jD82h7wrvr_bspnzrh3z4tqSYyztpgg7TphxJAIcGE-XMRuscL5X4lwa0VFuv90JDfWEN9jbNzgsUO5luFo4TGqWC0pz3m-GIrKqkfrvC5gn8xSFfMQX83m5KMKPSQMJhvOOjdOVu3RHpOPi_3b_940t4ZgnAAF8Hv1JWMNI8z_F-j4UlPnlN3NeqBE52fzR1Li7MlAiAk8z1KnxxUGulkD-YQc3z9atwgfpYVEL6",
    heroPortraitAlt: "Lúcio Costa, psicólogo e psicanalista",
    // Seção 02 (Sobre) — outra foto do Lúcio, para não repetir a do topo
    sobrePortrait:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtlHGU_4ZTNEKfpUFBNr2kesjLcO3ZC-jPBqiBuOaCZ5xou0bQ5Ih7AS9B8c6u1rxfnbJBzyjgf8afA8HMoA4Wgj4CxZ1QG8l6CmxMQWI1VMfVhK15HuDLLGxDjQBd2tauer6a1L8z0Ze9yAn0-kHB3yxWLi17NwYNHdn5U5ye3z-F0xeXcL9kPQxLrNkEhM58EXEcqKxmwAkTzEfNdQpt1k4RocqMeeobqz6z244bfcofy9lHQaZZ",
    sobrePortraitAlt: "Lúcio Costa, psicólogo e psicanalista",

    // FOTOS DO CONSULTÓRIO (pendente: o Lúcio vai enviar fotos reais).
    // - heroBackground: imagem de fundo do topo. Vazio = fundo verde liso.
    //   A foto provisória antiga (parece cama de hospital) está em "/img/consultorio.webp".
    // - abordagem: foto ao lado do texto da seção 03. Vazio = mostra a frase em destaque.
    heroBackground: "",
    abordagem: "",
    abordagemAlt: "Consultório do Lúcio Costa",
  },

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Abordagem", href: "#como-trabalho" },
    { label: "Atendimento", href: "#atendimento" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
  mobileNav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Abordagem", href: "#como-trabalho" },
    { label: "Atendimento", href: "#atendimento" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Localização", href: "#contato" },
  ],

  hero: {
    srTitle: "Lúcio Costa — Psicólogo e psicanalista em Brasília e online",
    badge: "Atendimento presencial e online",
    text: "Um espaço de escuta clínica aprofundada para adultos e casais, integrando o rigor teórico e a sensibilidade humana.",
    credit: "Psicólogo e psicanalista",
    cta1: "Marcar primeira sessão",
    cta2: "Conhecer a abordagem",
  },

  trust: [
    { icon: "badge", title: "CRP 01/20083", text: "Registro profissional ativo no CRP-DF" },
    { icon: "reviews", title: "Nota 5,0 de 5,0 no Doctoralia", text: "Pontuação máxima · 41 opiniões verificadas" },
    { icon: "pin_drop", title: "Brasília — Asa Norte", text: "Consultório no Ed. Liberty Mall" },
    { icon: "devices", title: "Atendimento Online", text: "Plataforma segura e sigilo garantido" },
  ],

  paraQuemE: {
    kicker: "01 — Para quem é",
    titleBefore: "Quando algo se repete e você ",
    titleItalic: "não entende",
    titleAfter: " por quê",
    items: [
      {
        title: "Ansiedade e angústia persistente",
        text: "Sensação constante de apreensão, aceleração do pensamento e sobrecarga interna sem causa evidente imediata, gerando cansaço mental e tensão física.",
      },
      {
        title: "Conflitos nos relacionamentos e casamento",
        text: "Dificuldades recorrentes de comunicação, sensação de isolamento na convivência a dois, ciúmes ou impasses na intimidade que geram desgaste contínuo.",
      },
      {
        title: "Depressão e perda de vitalidade",
        text: "Sensação prolongada de vazio, desânimo em relação a projetos significativos, anedonia e dificuldade em encontrar sentido nas rotinas cotidianas.",
      },
      {
        title: "Adoecimento ligado ao trabalho e estresse",
        text: "Cobrança desmedida, esgotamento profissional, crises em transições de carreira e dificuldade severa em estabelecer limites na vida produtiva.",
      },
      {
        title: "Compulsões e comportamentos de fuga",
        text: "Compulsão alimentar, impulsos por consumo ou dependências comportamentais que funcionam como anestésicos temporários para dores psíquicas mais profundas.",
      },
      {
        title: "Insegurança e tomada de decisões",
        text: "Paralisia diante de momentos de escolha, excesso de dúvida sobre o próprio desejo e necessidade permanente de aprovação externa.",
      },
    ],
  },

  sobre: {
    kicker: "02 — Sobre",
    titleBefore: "Uma trajetória com rigor clínico e ",
    titleItalic: "sensibilidade",
    titleAfter: " humana",
    cardName: "Lúcio Costa",
    cardRole: "Psicólogo Clínico & Psicanalista",
    cardInfo: "Mestre em Educação (UFSCar) · Membro do Instituto Virginia Bicudo (SPB)",
    paragraphs: [
      "Sou psicólogo e psicanalista (CRP 01/20083), com 17 anos dedicados à prática clínica, escutando adultos e casais em suas mais variadas questões conflitivas e existenciais. Minha formação inclui mestrado em Educação pela Universidade Federal de São Carlos (UFSCar) e pós-graduação em Neuropsicologia pelo IEPSE Brasília.",
      "Ao longo desse percurso, atuei como Diretor Técnico de Saúde Mental no Centro de Atendimento e Estudos da Saúde do Servidor Público (CAESSP-DF) e como Supervisor Clínico no COMPP-DF, participando ativamente da formulação de políticas públicas de cuidado em saúde mental no Brasil e no exterior.",
      "Atualmente, sou membro do Instituto de Psicanálise Virginia Bicudo da Sociedade de Psicanálise de Brasília (SPB), conselheiro no CRP-DF e tutor na Residência Multiprofissional em Saúde da Família pela Fundação Oswaldo Cruz (Fiocruz-Brasília).",
    ],
    quote:
      "A clínica psicanalítica não busca adequar a pessoa a um padrão, mas abrir espaço para que ela encontre palavras próprias para aquilo que antes só se manifestava em dor.",
    pills: [
      "Mestrado em Educação · UFSCar",
      "Especialista em Neuropsicologia · IEPSE",
      "Sociedade de Psicanálise de Brasília · SPB",
      "Docência & Tutoria · Fiocruz-DF",
    ],
    cta: "Agendar uma consulta",
  },

  abordagem: {
    kicker: "03 — Abordagem",
    titleBefore: "Clareza também é uma forma de ",
    titleItalic: "cuidado",
    titleAfter: ".",
    text: "A orientação psicanalítica propõe um ritmo singular. Em vez de prescrições apressadas, oferecemos um espaço de sustentação ética onde sentimentos ambivalentes e pensamentos censurados podem ser finalmente ditos e compreendidos.",
    quote: "Um trabalho terapêutico sólido constrói autonomia, não dependência.",
    caption: "Atendimento clínico — Brasília e Teleconsulta",
    pillars: [
      {
        num: "i.",
        title: "Escuta atenta e singular",
        text: "Cada biografia é única. A sessão é estruturada para acolher sua história sem fórmulas padronizadas ou enquadramentos arbitrários.",
      },
      {
        num: "ii.",
        title: "Compreensão das origens",
        text: "Identificamos os pontos de fixação e as defesas construídas ao longo do tempo que sustentam os impasses e sintomas no presente.",
      },
      {
        num: "iii.",
        title: "Autonomia e sustentação",
        text: "Desenvolvemos a capacidade de tomar decisões alinhadas consigo mesmo e bancar as transformações necessárias com estabilidade.",
      },
    ],
    // SEÇÃO 03 — PENDENTE: o Lúcio vai enviar novo título e texto para substituir os dois
    // cartões abaixo ("O que costuma mudar" / "O que este trabalho não é").
    // Para ativar, troque `null` por:
    //   { kicker: "", title: "novo título", paragraphs: ["texto 1", "texto 2"] }
    novoBloco: null as { kicker?: string; title: string; paragraphs: string[] } | null,
    change: {
      kicker: "Transformação",
      title: "O que costuma mudar",
      items: [
        "Maior clareza e autorização sobre os próprios desejos e limites",
        "Ruptura gradual de ciclos relacionais destrutivos",
        "Capacidade de sustentar escolhas difíceis com serenidade",
        "Redução expressiva do ruído ansioso e da culpa constante",
      ],
      footnote:
        "Cada pessoa percorre esse caminho no seu próprio tempo. As mudanças costumam surgir de forma gradual, a partir do trabalho construído em sessão.",
    },
    notIs: {
      kicker: "Rigor ético",
      title: "O que este trabalho não é",
      items: [
        "Não é aplicação de manuais de autoajuda ou regras engessadas",
        "Não é aconselhamento moralizante ou julgamento de atitudes",
        "Não são promessas ilusórias de transformações sem processo",
        "Não é um protocolo com prazos pré-determinados e rígidos",
      ],
      footnote:
        "Este trabalho faz sentido para pessoas dispostas a olhar com honestidade para sua própria história e construir caminhos mais consistentes.",
    },
  },

  passos: {
    kicker: "04 — Passo a passo",
    titleBefore: "O percurso de início com ",
    titleItalic: "tranquilidade",
    text: "Um processo claro e sem burocracias para que você saiba exatamente o que esperar desde a primeira interação.",
    items: [
      {
        num: "01",
        title: "Primeiro contato",
        text: "Você envia uma solicitação de agendamento informando sua preferência por atendimento presencial ou online.",
      },
      {
        num: "02",
        title: "Horário e formato",
        text: "Alinhamos o dia e o horário mais convenientes na grade semanal e compartilhamos as orientações de acesso.",
      },
      {
        num: "03",
        title: "Primeira sessão",
        text: "Encontro inicial de 50 minutos para você expor suas demandas e avaliarmos juntos como conduzir o percurso.",
      },
      {
        num: "04",
        title: "Continuidade",
        text: "Estabelecemos uma frequência regular e os acordos de trabalho, assegurando estabilidade ao processo.",
      },
    ],
  },

  atendimento: {
    kicker: "05 — Modalidades de atendimento",
    titleBefore: "Formatos de ",
    titleItalic: "atendimento",
    text: "Sessões individuais ou de casal com valores transparentes, emitindo recibos para reembolso junto a planos de saúde.",
    investLabel: "Investimento",
    perSession: " / sessão",
    button: "Agendar",
    plans: [
      {
        modeIcon: "videocam",
        mode: "Teleconsulta",
        duration: "50 min",
        title: "Psicoterapia Online",
        text: "Atendimento psicanalítico individual por videochamada para adultos que buscam flexibilidade geográfica com rigor técnico.",
        bullets: ["Público: Adultos", "Abrangência: Todo o Brasil e exterior", "Recibo com CRP para reembolso"],
        price: "R$ 400",
      },
      {
        modeIcon: "location_on",
        mode: "Presencial",
        duration: "50 min",
        title: "Consulta Presencial",
        text: "Sessão presencial em consultório acolhedor e privativo, proporcionando espaço protegido para a elaboração de questões íntimas.",
        bullets: ["Público: Adultos", "Local: Ed. Liberty Mall, Asa Norte", "Recibo com CRP para reembolso"],
        price: "R$ 400",
      },
      {
        modeIcon: "favorite",
        mode: "Presencial / Online",
        duration: "60 min",
        title: "Terapia de Casal",
        text: "Mediação terapêutica para casais que enfrentam impasses na convivência, crises de confiança ou transições desafiadoras no vínculo.",
        bullets: ["Público: Casais", "Formato: No consultório ou por vídeo", "Recibo com CRP para reembolso"],
        price: "R$ 600",
      },
    ],
  },

  depoimentos: {
    kicker: "06 — Depoimentos",
    titleBefore: "O que dizem os ",
    titleItalic: "pacientes",
    summaryLabel: "41 avaliações no Doctoralia",
    summaryNote: "Avaliações reais e autenticadas por pacientes verificados",
    items: [
      {
        text: "Encontrei o Lúcio em um momento bem turbulento da minha história. Desde então ele conseguiu me auxiliar a ter autonomia e segurança nas minhas decisões, além de me ajudar a questionar diversas crenças pessoais... Humano, dedicado, profissional, educado, acolhedor, assertivo e engajado.",
        author: "Yargo S.",
        meta: "Consulta verificada · Doctoralia",
      },
      {
        text: "Sem palavras para descrever o quanto me ajudou em relação aos problemas que eu vinha lidando no meu dia a dia. Só tenho a agradecer tanto ao profissional quanto a pessoa que é. Recomendo a qualquer pessoa que esteja necessitando de auxílio psicológico.",
        author: "João A.",
        meta: "Opinião verificada · Telemedicina",
      },
      {
        text: "O Lucio foi essencial no meu processo de autoconhecimento. Com sua ajuda, pude amadurecer, entender melhor minhas necessidades e tomar decisões mais alinhadas comigo mesmo — um passo importante para melhorar minha qualidade de vida.",
        author: "Lucas",
        meta: "Consulta verificada · Telemedicina",
      },
      {
        text: "Excelente profissional, extremamente capacitado, ético e atencioso. Sempre faz as considerações com muita clareza e respeito, trazendo observações muito pertinentes que ajudam no processo de autoconhecimento. As consultas são sempre pontuais.",
        author: "Ana Paula D. H.",
        meta: "Opinião verificada · Consultório",
      },
    ],
  },

  online: {
    kicker: "07 — Atendimento Remoto",
    titleBefore: "A proximidade da escuta, onde quer que você ",
    titleItalic: "esteja",
    text: "O atendimento psicológico online segue exatamente os mesmos parâmetros éticos, de sigilo e rigor técnico das consultas presenciais. A clínica psicanalítica se apoia na palavra e na relação analítica, sendo plenamente sustentada pelo ambiente virtual.",
    badgeKicker: "Teleatendimento",
    badgeText: "Atendimento online · Todo o Brasil & Exterior",
    bullets: [
      "Plataforma estável, segura e confidencial com envio prévio de link",
      "Flexibilidade de rotina para quem viaja frequentemente ou mora fora do país",
      "Atuação em conformidade com as resoluções vigentes do Conselho Federal de Psicologia (CFP)",
    ],
    cta: "Tirar dúvidas sobre atendimento online",
  },

  faq: {
    kicker: "08 — Dúvidas",
    titleBefore: "Perguntas ",
    titleItalic: "frequentes",
    text: "Respostas claras sobre como funciona o percurso analítico, contratos terapêuticos e particularidades do atendimento.",
    cta: "Perguntar",
    items: [
      {
        q: "Como funciona a primeira sessão?",
        a: "A primeira sessão é um momento de escuta mútua. Você traz o que motivou a procura e as questões que estão causando desconforto. Ao mesmo tempo, explico o método de trabalho, combinamos a viabilidade dos horários e definimos se daremos início ao acompanhamento contínuo.",
      },
      {
        q: "Qual é a frequência indicada para os atendimentos?",
        a: "Usualmente, as sessões acontecem em periodicidade semanal, reservando um mesmo horário fixo toda semana para garantir a continuidade necessária ao processo. Casos específicos podem demandar arranjos combinados na primeira consulta.",
      },
      {
        q: "Você aceita plano de saúde ou convênio médico?",
        a: "O atendimento é exclusivamente particular. No entanto, fornecemos recibo detalhado com número de registro ativo (CRP 01/20083), o que possibilita a solicitação de reembolso junto ao seu plano de saúde de acordo com a sua apólice.",
      },
      {
        q: "Como é resguardado o sigilo profissional?",
        a: "O sigilo é absoluto e protegido pelo Código de Ética Profissional do Psicólogo (CEP-CFP). Nada do que é tratado em sessão é compartilhado com familiares, empresas ou terceiros. Nas consultas online, utilizamos canais com criptografia.",
      },
      {
        q: "O atendimento online tem a mesma eficácia que o presencial?",
        a: "Sim. A literatura científica contemporânea e a prática clínica comprovam que os resultados são equivalentes. O elemento central do processo é o compromisso analítico e a escuta, exigindo apenas que você esteja em um local privado e confortável.",
      },
      {
        q: "Quais são as formas de pagamento disponíveis?",
        a: "As sessões podem ser pagas via Pix, transferência bancária ou em dinheiro para atendimentos presenciais. Combinamos a dinâmica de acerto (por sessão ou mensalmente) no início do acompanhamento.",
      },
    ],
  },

  contato: {
    kicker: "09 — Atendimento e localização",
    titleBefore: "Comece por uma ",
    titleItalic: "conversa",
    text: "Dê o primeiro passo para compreender o que está acontecendo e reorganizar seus sentimentos. Agende sua sessão inicial.",
    cta: "Agendar Consulta",
    onlineText: "Disponível para pacientes de todo o Brasil e brasileiros residentes no exterior.",
    mapTitle: "Ed. Liberty Mall, Asa Norte",
    mapSub: "SCN Quadra 02 Bloco B sala 711 · Brasília/DF",
    mapLink: "Abrir no Google Maps",
  },

  footer: {
    onlineText:
      "Sessões individuais por teleconsulta com sigilo resguardado para pacientes em todo o território nacional e no exterior.",
    links: [
      { label: "Sobre o Profissional", href: "#sobre" },
      { label: "Abordagem Clínica", href: "#como-trabalho" },
      { label: "Modalidades & Valores", href: "#atendimento" },
      { label: "Opiniões de Pacientes", href: "#depoimentos" },
      { label: "Perguntas Frequentes", href: "#duvidas" },
      { label: "Localização", href: "#contato" },
    ],
    crisisTitle: "Em caso de crise ou urgência emocional",
    crisisText:
      "Este espaço oferece acompanhamento psicoterapêutico eletivo e não presta pronto atendimento de emergência. Em situações de sofrimento agudo ou ideação de crise, procure o CVV (188), gratuito e 24 horas, ou o SAMU (192).",
    ethics: "Código de Ética Profissional do Psicólogo (CFP).",
  },
};

export const whatsappUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
  clinic.whatsappMessage,
)}`;
