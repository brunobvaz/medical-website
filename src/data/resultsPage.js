import beforeOne from '../assets/before_after/antes.jpeg'
import beforeTwo from '../assets/before_after/antes2.jpeg'
import beforeThree from '../assets/before_after/antes3.jpeg'
import afterOne from '../assets/before_after/depois.jpeg'
import afterTwo from '../assets/before_after/depois2.jpeg'
import afterThree from '../assets/before_after/depois3.jpeg'

const resultsPage = {
  pt: {
    eyebrow: 'Antes e depois',
    title: 'Resultados Naturais que Falam por Si',
    introduction: 'Cada caso é único. Veja alguns exemplos de resultados, sempre planeados para respeitar a expressão e a identidade de cada pessoa.',
    categories: ['Pálpebras', 'Órbita', 'Vias lacrimais', 'Estética'],
    beforeLabel: 'Antes',
    afterLabel: 'Depois',
    sliderLabel: 'Deslize para comparar o resultado antes e depois',
    bookingLabel: 'Marcar consulta',
    disclaimer: 'As imagens apresentadas são ilustrativas. Os resultados variam de pessoa para pessoa.',
    items: [
      { title: 'Blefaroplastia Superior', beforeImage: beforeOne, afterImage: afterOne },
      { title: 'Blefaroplastia Inferior', beforeImage: beforeTwo, afterImage: afterTwo },
      { title: 'Ptose Palpebral', beforeImage: beforeThree, afterImage: afterThree },
    ],
  },
  en: {
    eyebrow: 'Before and after',
    title: 'Natural Results That Speak for Themselves',
    introduction: 'Every case is unique. Explore selected results, always planned to respect each person’s expression and identity.',
    categories: ['Eyelids', 'Orbit', 'Lacrimal system', 'Aesthetics'],
    beforeLabel: 'Before',
    afterLabel: 'After',
    sliderLabel: 'Slide to compare the before and after result',
    bookingLabel: 'Book an appointment',
    disclaimer: 'Images are illustrative. Results vary from person to person.',
    items: [
      { title: 'Upper Blepharoplasty', beforeImage: beforeOne, afterImage: afterOne },
      { title: 'Lower Blepharoplasty', beforeImage: beforeTwo, afterImage: afterTwo },
      { title: 'Eyelid Ptosis', beforeImage: beforeThree, afterImage: afterThree },
    ],
  },
}

export const getResultsPage = (language) => resultsPage[language] ?? resultsPage.pt
