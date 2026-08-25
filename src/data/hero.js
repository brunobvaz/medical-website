const heroContent = {
  pt: {
    ariaLabel: 'Destaques da clínica',
    previousSlideLabel: 'Slide anterior',
    nextSlideLabel: 'Slide seguinte',
    indicatorsLabel: 'Selecionar slide',
    showSlideLabel: (index, title) => `Mostrar slide ${index + 1}: ${title}`,
    slides: [
      {
        eyebrow: 'Oftalmologia especializada',
        title: 'O seu olhar merece excelência.',
        description: 'Cuidamos da sua visão com rigor, experiência e uma abordagem personalizada, num espaço pensado para o seu conforto e bem-estar.',
        buttonLabel: 'Conheça a clinica',
        buttonHref: '#contactos',
      },
      {
        eyebrow: 'Tecnologia e precisão',
        title: 'Uma nova forma de olhar pela sua saúde',
        description: 'Diagnósticos rigorosos e tratamentos personalizados, apoiados por uma equipa dedicada ao seu bem-estar visual.',
        buttonLabel: 'Conhecer tratamentos',
        buttonTo: '/treatments',
      },
      {
        eyebrow: 'Cuidado personalizado',
        title: 'A sua visão merece toda a nossa atenção',
        description: 'Acompanhamento especializado em todas as etapas, com soluções adaptadas às suas necessidades e à saúde dos seus olhos.',
        buttonLabel: 'Marcar consulta',
        buttonTo: '/booking',
      },
    ],
  },
  en: {
    ariaLabel: 'Clinic highlights',
    previousSlideLabel: 'Previous slide',
    nextSlideLabel: 'Next slide',
    indicatorsLabel: 'Select slide',
    showSlideLabel: (index, title) => `Show slide ${index + 1}: ${title}`,
    slides: [
      {
        eyebrow: 'Specialist ophthalmology',
        title: 'Your vision deserves excellence',
        description: 'We care for your vision with precision, expertise, and a personalized approach, in a space designed for your comfort and well-being.',
        buttonLabel: 'Discover our clinic',
        buttonHref: '#contactos',
      },
      {
        eyebrow: 'Technology and precision',
        title: 'A new way to look after your eye health',
        description: 'Accurate diagnoses and personalised treatments, supported by a team dedicated to your visual well-being.',
        buttonLabel: 'Explore treatments',
        buttonTo: '/treatments',
      },
      {
        eyebrow: 'Personalised care',
        title: 'Your vision deserves our full attention',
        description: 'Specialist support at every stage, with solutions tailored to your needs and the health of your eyes.',
        buttonLabel: 'Book an appointment',
        buttonTo: '/booking',
      },
    ],
  },
}

export default heroContent
