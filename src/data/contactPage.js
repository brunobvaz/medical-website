const contactPage = {
  pt: {
    eyebrow: 'Contactos',
    title: 'Contacte-nos',
    introduction: 'Estamos disponíveis para esclarecer as suas dúvidas e ajudar na marcação da sua consulta.',
    phoneLabel: 'Telefone',
    emailLabel: 'Email',
    locationsLabel: 'Moradas',
    imageAlt: 'Interior luminoso e acolhedor do consultório',
    locations: [
      { name: 'MYFACE CLINIC', address: 'Avenida da Liberdade, 240,\n1250-145 Lisboa, Portugal' },
      { name: 'THE EZRA CLINIC', address: '21 Harley Street,\nLondon W1G 9QR, Reino Unido' },
    ],
  },
  en: {
    eyebrow: 'Contacts',
    title: 'Contact us',
    introduction: 'We are available to answer your questions and help you book your appointment.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    locationsLabel: 'Locations',
    imageAlt: 'Bright and welcoming clinic interior',
    locations: [
      { name: 'MYFACE CLINIC', address: '240 Avenida da Liberdade,\n1250-145 Lisbon, Portugal' },
      { name: 'THE EZRA CLINIC', address: '21 Harley Street,\nLondon W1G 9QR, United Kingdom' },
    ],
  },
}

export const getContactPage = (language) => contactPage[language] ?? contactPage.pt
