const treatmentsPage = {
  pt: {
    eyebrow: 'Tratamentos',
    title: 'Cuidados pensados para si',
    description: 'Conheça as áreas clínicas e encontre uma abordagem personalizada, orientada pela precisão, segurança e naturalidade.',
    bookingLabel: 'Agendar consulta',
  },
  en: {
    eyebrow: 'Treatments',
    title: 'Care designed around you',
    description: 'Explore our clinical areas and find a personalised approach guided by precision, safety and natural-looking results.',
    bookingLabel: 'Book an appointment',
  },
}

export const getTreatmentsPage = (language) => treatmentsPage[language] ?? treatmentsPage.pt
