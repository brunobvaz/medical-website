const treatmentsPage = {
  pt: {
    hero: {
      eyebrow: 'Tratamentos',
      title: 'Soluções especializadas para a saúde e harmonia do olhar',
      description: 'Uma abordagem personalizada e criteriosa, orientada para a função, a saúde ocular e o bem-estar de cada pessoa.',
      imageAlt: 'Avaliação clínica especializada da região dos olhos',
    },
    areas: {
      eyebrow: 'O que tratamos',
      title: 'Áreas de atuação',
      description: 'Conheça as principais áreas da Oculoplástica e encontre cuidados especializados para as pálpebras, órbita, vias lacrimais e região periocular.',
    },
    booking: {
      title: 'O seu bem-estar é a nossa prioridade',
      description: 'Unimos experiência clínica, tecnologia de ponta e atenção personalizada para oferecer um diagnóstico rigoroso e um acompanhamento de excelência.',
      buttonLabel: 'Agendar consulta',
    },
  },
  en: {
    hero: {
      eyebrow: 'Treatments',
      title: 'Specialist solutions for the health and harmony of your eyes',
      description: 'A personalised and considered approach guided by function, eye health and each person’s wellbeing.',
      imageAlt: 'Specialist clinical assessment of the eye area',
    },
    areas: {
      eyebrow: 'What we treat',
      title: 'Clinical areas',
      description: 'Explore the main areas of Oculoplastics and find specialist care for the eyelids, orbit, lacrimal system and periocular region.',
    },
    booking: {
      title: 'Your wellbeing is our priority',
      description: 'We combine clinical experience, advanced technology and personalised attention to provide a precise diagnosis and excellent ongoing care.',
      buttonLabel: 'Book an appointment',
    },
  },
}

export const getTreatmentsPage = (language) => treatmentsPage[language] ?? treatmentsPage.pt
