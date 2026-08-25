import eyelidsHero from '../assets/optimized/eyelids-hero.jpg'
import orbitHero from '../assets/optimized/orbit-hero.jpg'
import lacrimalHero from '../assets/optimized/lacrimal-hero.jpg'
import aestheticsHero from '../assets/optimized/aesthetics-hero.jpg'

const treatmentDetails = {
  palpebras: {
    heroImage: eyelidsHero,
    pt: {
      eyebrow: 'Área clínica', title: 'Pálpebras',
      heroDescription: 'Cirurgia funcional e estética das pálpebras superiores e inferiores.',
      heroAlt: 'Olho feminino em grande plano, representando os tratamentos das pálpebras',
      introduction: 'Tratamos condições que afetam a função, o conforto e a aparência das pálpebras, com técnicas seguras e resultados naturais.',
      listLabel: 'Condições e tratamentos das pálpebras', linkLabel: 'Saber mais',
      items: [
        { slug: 'blefaroplastia', title: 'Blefaroplastia', description: 'Corrige o excesso de pele e bolsas nas pálpebras superiores e/ou inferiores.', imagePosition: '68% 45%' },
        { slug: 'ptose-palpebral', title: 'Ptose palpebral', description: 'Correção da queda da pálpebra superior que pode afetar o campo visual e a estética.', imagePosition: '73% 50%' },
        { slug: 'entropio-ectropio', title: 'Entrópio e ectrópio', description: 'Tratamento da pálpebra virada para dentro ou para fora.', imagePosition: '78% 43%' },
        { slug: 'lesoes-palpebra', title: 'Lesões da pálpebra', description: 'Diagnóstico e tratamento de lesões benignas e malignas das pálpebras.', imagePosition: '64% 52%' },
      ],
    },
    en: {
      eyebrow: 'Clinical area', title: 'Eyelids',
      heroDescription: 'Functional and cosmetic surgery of the upper and lower eyelids.',
      heroAlt: 'Close-up of a woman’s eye representing eyelid treatments',
      introduction: 'We treat conditions affecting eyelid function, comfort and appearance, using safe techniques designed to achieve natural results.',
      listLabel: 'Eyelid conditions and treatments', linkLabel: 'Learn more',
      items: [
        { slug: 'blepharoplasty', title: 'Blepharoplasty', description: 'Corrects excess skin and bags affecting the upper and/or lower eyelids.', imagePosition: '68% 45%' },
        { slug: 'eyelid-ptosis', title: 'Eyelid ptosis', description: 'Corrects a drooping upper eyelid that may affect the visual field and appearance.', imagePosition: '73% 50%' },
        { slug: 'entropion-ectropion', title: 'Entropion and ectropion', description: 'Treatment for an eyelid that turns inward or outward.', imagePosition: '78% 43%' },
        { slug: 'eyelid-lesions', title: 'Eyelid lesions', description: 'Diagnosis and treatment of benign and malignant eyelid lesions.', imagePosition: '64% 52%' },
      ],
    },
  },
  orbita: {
    heroImage: orbitHero,
    pt: {
      eyebrow: 'Área clínica', title: 'Órbita',
      heroDescription: 'Tratamento de condições da órbita e reconstrução orbitária.',
      heroAlt: 'Olho feminino em grande plano, representando os tratamentos da órbita',
      introduction: 'Abordagem especializada em doenças orbitárias, traumatismos e alterações que podem comprometer a função e a estética.',
      listLabel: 'Condições e tratamentos da órbita', linkLabel: 'Saber mais',
      items: [
        { slug: 'orbitopatia-tiroideia', title: 'Doença da tiroide (orbitopatia)', description: 'Avaliação e tratamento da orbitopatia associada à doença da tiroide.', imagePosition: '69% 44%' },
        { slug: 'fraturas-orbitarias', title: 'Fraturas orbitárias', description: 'Reconstrução de fraturas da órbita para restaurar a função e a aparência.', imagePosition: '75% 48%' },
        { slug: 'tumores-orbita', title: 'Tumores da órbita', description: 'Diagnóstico e tratamento de tumores benignos e malignos da órbita.', imagePosition: '80% 45%' },
        { slug: 'enoftalmia', title: 'Enoftalmia', description: 'Correção da retração do globo ocular provocada por diversas causas.', imagePosition: '65% 51%' },
      ],
    },
    en: {
      eyebrow: 'Clinical area', title: 'Orbit',
      heroDescription: 'Treatment of orbital conditions and orbital reconstruction.',
      heroAlt: 'Close-up of a woman’s eye representing orbital treatments',
      introduction: 'Specialist care for orbital diseases, trauma and changes that may affect function and appearance.',
      listLabel: 'Orbital conditions and treatments', linkLabel: 'Learn more',
      items: [
        { slug: 'thyroid-eye-disease', title: 'Thyroid eye disease', description: 'Assessment and treatment of orbitopathy associated with thyroid disease.', imagePosition: '69% 44%' },
        { slug: 'orbital-fractures', title: 'Orbital fractures', description: 'Reconstruction of orbital fractures to restore function and appearance.', imagePosition: '75% 48%' },
        { slug: 'orbital-tumours', title: 'Orbital tumours', description: 'Diagnosis and treatment of benign and malignant orbital tumours.', imagePosition: '80% 45%' },
        { slug: 'enophthalmos', title: 'Enophthalmos', description: 'Correction of a sunken eye caused by a range of underlying conditions.', imagePosition: '65% 51%' },
      ],
    },
  },
  'vias-lacrimais': {
    heroImage: lacrimalHero,
    pt: {
      eyebrow: 'Área clínica', title: 'Vias lacrimais',
      heroDescription: 'Diagnóstico e tratamento das doenças do sistema lacrimal.',
      heroAlt: 'Olho feminino com uma lágrima, representando os tratamentos das vias lacrimais',
      introduction: 'Tratamos obstruções e outras condições que causam lacrimejo, infeções e desconforto ocular.',
      listLabel: 'Condições e tratamentos das vias lacrimais', linkLabel: 'Saber mais',
      items: [
        { slug: 'obstrucao-canal-lacrimal', title: 'Obstrução do canal lacrimal', description: 'Desobstrução e tratamento da obstrução do canal lacrimal.', imagePosition: '77% 43%' },
        { slug: 'dacriocistorrinostomia', title: 'Dacriocistorrinostomia (DCR)', description: 'Cirurgia para criar uma nova via de drenagem entre o saco lacrimal e a cavidade nasal.', imagePosition: '81% 49%' },
        { slug: 'sondagens-lavagens', title: 'Sondagens e lavagens', description: 'Procedimentos minimamente invasivos para desobstrução das vias lacrimais.', imagePosition: '72% 46%' },
        { slug: 'estenose-punctal', title: 'Estenose punctal', description: 'Tratamento do estreitamento dos pontos lacrimais.', imagePosition: '84% 52%' },
      ],
    },
    en: {
      eyebrow: 'Clinical area', title: 'Lacrimal system',
      heroDescription: 'Diagnosis and treatment of conditions affecting the lacrimal system.',
      heroAlt: 'Close-up of a woman’s eye with a tear, representing lacrimal treatments',
      introduction: 'We treat obstructions and other conditions that cause excessive tearing, infections and eye discomfort.',
      listLabel: 'Lacrimal conditions and treatments', linkLabel: 'Learn more',
      items: [
        { slug: 'blocked-tear-duct', title: 'Blocked tear duct', description: 'Clearing and treatment of an obstructed tear drainage pathway.', imagePosition: '77% 43%' },
        { slug: 'dacryocystorhinostomy', title: 'Dacryocystorhinostomy (DCR)', description: 'Surgery to create a new drainage pathway between the lacrimal sac and the nasal cavity.', imagePosition: '81% 49%' },
        { slug: 'probing-irrigation', title: 'Probing and irrigation', description: 'Minimally invasive procedures used to clear the tear drainage system.', imagePosition: '72% 46%' },
        { slug: 'punctal-stenosis', title: 'Punctal stenosis', description: 'Treatment of narrowing affecting the lacrimal puncta.', imagePosition: '84% 52%' },
      ],
    },
  },
  'rejuvenescimento-estetica': {
    heroImage: aestheticsHero,
    pt: {
      eyebrow: 'Área clínica', title: 'Rejuvenescimento e estética',
      heroDescription: 'Procedimentos minimamente invasivos para um olhar mais jovem e harmonioso.',
      heroAlt: 'Olho feminino em grande plano, representando tratamentos de rejuvenescimento e estética',
      introduction: 'Tratamentos personalizados para suavizar sinais de envelhecimento e valorizar a expressão, preservando sempre a naturalidade do olhar.',
      listLabel: 'Tratamentos de rejuvenescimento e estética', linkLabel: 'Saber mais',
      items: [
        { slug: 'blefaroplastia-estetica', title: 'Blefaroplastia estética', description: 'Rejuvenescimento das pálpebras com resultados naturais e harmoniosos.', imagePosition: '79% 43%' },
        { slug: 'lifting-sobrancelha', title: 'Lifting de sobrancelha', description: 'Elevação das sobrancelhas para um olhar mais aberto e descansado.', imagePosition: '73% 35%' },
        { slug: 'preenchimento-sulco-lagrimas', title: 'Preenchimento do sulco das lágrimas', description: 'Suaviza o sulco entre o olho e a maçã do rosto, reduzindo o aspeto de cansaço.', imagePosition: '83% 53%' },
        { slug: 'toxina-botulinica', title: 'Toxina botulínica', description: 'Atenua rugas dinâmicas da região periocular, incluindo os pés de galinha e a testa.', imagePosition: '69% 46%' },
      ],
    },
    en: {
      eyebrow: 'Clinical area', title: 'Rejuvenation and aesthetics',
      heroDescription: 'Minimally invasive procedures for a younger, more harmonious appearance.',
      heroAlt: 'Close-up of a woman’s eye representing rejuvenation and aesthetic treatments',
      introduction: 'Personalised treatments designed to soften signs of ageing and enhance expression while preserving a natural appearance.',
      listLabel: 'Rejuvenation and aesthetic treatments', linkLabel: 'Learn more',
      items: [
        { slug: 'aesthetic-blepharoplasty', title: 'Aesthetic blepharoplasty', description: 'Eyelid rejuvenation designed to deliver natural and harmonious results.', imagePosition: '79% 43%' },
        { slug: 'brow-lift', title: 'Brow lift', description: 'Raises the eyebrows to create a more open and rested appearance.', imagePosition: '73% 35%' },
        { slug: 'tear-trough-filler', title: 'Tear trough filler', description: 'Softens the hollow between the eye and cheek, reducing the appearance of tiredness.', imagePosition: '83% 53%' },
        { slug: 'botulinum-toxin', title: 'Botulinum toxin', description: 'Softens dynamic lines around the eyes, including crow’s feet and forehead lines.', imagePosition: '69% 46%' },
      ],
    },
  },
}

export const getTreatmentDetail = (slug, language) => {
  const treatment = treatmentDetails[slug]
  if (!treatment) return null

  return { ...(treatment[language] ?? treatment.pt), slug, heroImage: treatment.heroImage }
}

const procedureLabels = {
  pt: {
    home: 'Início', breadcrumbsLabel: 'Navegação estrutural', tabsLabel: 'Informação sobre o tratamento',
    book: 'Marcar consulta',
    tabs: {
      what: 'O que é', causes: 'Causas/Sintomas', treatment: 'Tratamento',
    },
    copy: {
      what: (item) => [
        item.description,
        'A indicação depende das características de cada pessoa e é confirmada através de uma avaliação clínica individualizada.',
      ],
      causes: () => [
        'As causas e manifestações podem variar. Algumas alterações desenvolvem-se progressivamente, enquanto outras podem estar relacionadas com fatores anatómicos, funcionais ou adquiridos.',
        'A avaliação médica permite compreender os sintomas, observar a região afetada e identificar a abordagem mais adequada para cada situação.',
      ],
      treatment: () => [
        'O tratamento é definido de forma personalizada, tendo em conta o diagnóstico, o impacto funcional e os objetivos de cada pessoa.',
        'Durante a consulta são explicadas as opções disponíveis, a preparação necessária, a recuperação esperada e o plano de acompanhamento.',
      ],
    },
  },
  en: {
    home: 'Home', breadcrumbsLabel: 'Breadcrumb navigation', tabsLabel: 'Treatment information',
    book: 'Book an appointment',
    tabs: {
      what: 'What it is', causes: 'Causes/Symptoms', treatment: 'Treatment',
    },
    copy: {
      what: (item) => [
        item.description,
        'Suitability depends on each person’s individual characteristics and is confirmed through a personalised clinical assessment.',
      ],
      causes: () => [
        'Causes and symptoms can vary. Some changes develop gradually, while others may be related to anatomical, functional or acquired factors.',
        'A medical assessment helps clarify the symptoms, examine the affected area and identify the most appropriate approach for each situation.',
      ],
      treatment: () => [
        'Treatment is planned individually, taking the diagnosis, functional impact and each person’s goals into account.',
        'During the consultation, the available options, preparation, expected recovery and follow-up plan are explained clearly.',
      ],
    },
  },
}

export const getProcedureDetail = (areaSlug, procedureSlug, language) => {
  const area = treatmentDetails[areaSlug]
  if (!area) return null

  const itemIndex = area.pt.items.findIndex((item) => item.slug === procedureSlug)
  const fallbackIndex = itemIndex >= 0 ? itemIndex : area.en.items.findIndex((item) => item.slug === procedureSlug)
  if (fallbackIndex < 0) return null

  const resolvedLanguage = language in procedureLabels ? language : 'pt'
  const areaContent = area[resolvedLanguage] ?? area.pt
  const procedure = areaContent.items[fallbackIndex]
  const labels = procedureLabels[resolvedLanguage]

  return {
    areaSlug,
    areaTitle: areaContent.title,
    areaDescription: areaContent.heroDescription,
    procedure,
    heroImage: area.heroImage,
    heroAlt: areaContent.heroAlt,
    breadcrumbsLabel: labels.breadcrumbsLabel,
    bookLabel: labels.book,
    tabsLabel: labels.tabsLabel,
    breadcrumbs: [
      { label: labels.home, to: '/' },
      { label: areaContent.title, to: `/treatments/${areaSlug}` },
      { label: procedure.title },
    ],
    tabs: [
      { id: 'what', label: labels.tabs.what, title: labels.tabs.what, paragraphs: labels.copy.what(procedure) },
      { id: 'causes', label: labels.tabs.causes, title: labels.tabs.causes, paragraphs: labels.copy.causes(procedure) },
      { id: 'treatment', label: labels.tabs.treatment, title: labels.tabs.treatment, paragraphs: labels.copy.treatment(procedure) },
    ],
  }
}
