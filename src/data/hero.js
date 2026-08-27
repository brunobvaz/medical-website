const heroContent = {
  pt: {
    ariaLabel: 'Destaques da clínica',
    statsLabel: 'Experiência e cuidado da clínica',
    stats: [
      { value: '15+', label: 'Anos de experiência' },
      { value: '5K+', label: 'Pacientes' },
      { value: '3', label: 'Áreas de especialidade', shortLabel: 'Especialidades' },
      { value: '★★★★★', label: 'Cuidado ao paciente', accessibleValue: '5 estrelas' },
    ],
    previousSlideLabel: 'Slide anterior',
    nextSlideLabel: 'Slide seguinte',
    indicatorsLabel: 'Selecionar slide',
    showSlideLabel: (index, title) => `Mostrar slide ${index + 1}: ${title}`,
    slides: [
      {
        eyebrow: 'Especialista em Oftalmologia e Cirurgia Oculoplástica',
        title: 'Cuidar do seu olhar com precisão e excelência',
        titleLines: ['Cuidar do seu olhar com', 'precisão e excelência'],
        description: 'Uma abordagem especializada e personalizada à saúde das pálpebras, órbita, vias lacrimais e região periocular.',
        buttonLabel: 'Conhecer a médica',
        buttonTo: '/about',
      },
      {
        eyebrow: 'Cirurgia Oculoplástica',
        title: 'Cuidado especializado para a saúde do seu olhar',
        titleLines: ['Cuidado especializado', 'para a saúde do seu olhar'],
        description: 'Diagnóstico e tratamento das alterações das pálpebras, órbita e vias lacrimais, com soluções adaptadas a cada paciente.',
        buttonLabel: 'Conhecer a especialidade',
        buttonTo: '/cirurgia-oculoplastica',
      },
      {
        eyebrow: 'Saúde · Função · Harmonia',
        title: 'Um olhar cuidado para além da visão',
        titleLines: ['Um olhar cuidado', 'para além da visão'],
        description: 'Conhecimento médico, precisão cirúrgica e sentido estético unidos para promover saúde ocular, conforto e harmonia facial.',
        buttonLabel: 'Marcar consulta',
        buttonTo: '/booking',
      },
    ],
  },
  en: {
    ariaLabel: 'Clinic highlights',
    statsLabel: 'Clinic experience and care',
    stats: [
      { value: '15+', label: 'Years Experience' },
      { value: '5K+', label: 'Patients' },
      { value: '3', label: 'Specialist Areas', shortLabel: 'Specialties' },
      { value: '★★★★★', label: 'Patient Care', accessibleValue: '5 stars' },
    ],
    previousSlideLabel: 'Previous slide',
    nextSlideLabel: 'Next slide',
    indicatorsLabel: 'Select slide',
    showSlideLabel: (index, title) => `Show slide ${index + 1}: ${title}`,
    slides: [
      {
        eyebrow: 'Specialist in Ophthalmology and Oculoplastic Surgery',
        title: 'Caring for your eyes with precision and excellence',
        titleLines: ['Caring for your eyes with', 'precision and excellence'],
        description: 'A specialist and personalised approach to the health of the eyelids, orbit, lacrimal system and periocular region.',
        buttonLabel: 'Meet the doctor',
        buttonTo: '/about',
      },
      {
        eyebrow: 'Oculoplastic Surgery',
        title: 'Specialist expertise dedicated to the health of your eyes',
        titleLines: ['Specialist expertise dedicated', 'to the health of your eyes'],
        description: 'Diagnosis and treatment of conditions affecting the eyelids, orbit and lacrimal system, with solutions tailored to each patient.',
        buttonLabel: 'Explore the specialty',
        buttonTo: '/cirurgia-oculoplastica',
      },
      {
        eyebrow: 'Health · Function · Harmony',
        title: 'Care for your eyes beyond vision',
        titleLines: ['Care for your eyes', 'beyond vision'],
        description: 'Medical expertise, surgical precision and aesthetic sensitivity come together to promote eye health, comfort and facial harmony.',
        buttonLabel: 'Book an appointment',
        buttonTo: '/booking',
      },
    ],
  },
}

export default heroContent
