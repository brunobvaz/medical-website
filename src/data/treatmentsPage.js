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
    equipment: {
      eyebrow: 'Equipamentos de última geração',
      title: 'Para ver além, com a máxima precisão',
      description: 'Os nossos equipamentos permitem obter imagens detalhadas e medições extremamente precisas, fundamentais para um diagnóstico correto e um plano de tratamento eficaz.',
      imageAlt: 'Equipamento de diagnóstico oftalmológico de alta precisão',
      items: [
        'OCT (Tomografia de Coerência Ótica)',
        'Topografia e Paquimetria Corneana',
        'Retinografia Digital',
        'Tonometria Não Contacto',
        'Campo Visual Computadorizado',
        'Biomicroscopia de Alta Definição',
      ],
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
    equipment: {
      eyebrow: 'Latest-generation equipment',
      title: 'Seeing further, with maximum precision',
      description: 'Our equipment provides detailed images and extremely precise measurements, essential for an accurate diagnosis and an effective treatment plan.',
      imageAlt: 'High-precision ophthalmic diagnostic equipment',
      items: [
        'OCT (Optical Coherence Tomography)',
        'Corneal Topography and Pachymetry',
        'Digital Retinography',
        'Non-contact Tonometry',
        'Computerised Visual Field Testing',
        'High-definition Biomicroscopy',
      ],
    },
    booking: {
      title: 'Your wellbeing is our priority',
      description: 'We combine clinical experience, advanced technology and personalised attention to provide a precise diagnosis and excellent ongoing care.',
      buttonLabel: 'Book an appointment',
    },
  },
}

export const getTreatmentsPage = (language) => treatmentsPage[language] ?? treatmentsPage.pt
