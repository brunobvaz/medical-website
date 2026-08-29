import beforeOne from '../assets/optimized/antes-result.webp'
import beforeOneMobile from '../assets/optimized/antes-result-mobile.webp'
import beforeTwo from '../assets/optimized/antes2-result.webp'
import beforeTwoMobile from '../assets/optimized/antes2-result-mobile.webp'
import beforeThree from '../assets/before_after/antes3.jpeg'
import afterOne from '../assets/optimized/depois-result.webp'
import afterOneMobile from '../assets/optimized/depois-result-mobile.webp'
import afterTwo from '../assets/optimized/depois2-result.webp'
import afterTwoMobile from '../assets/optimized/depois2-result-mobile.webp'
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
    sliderValueText: '{percentage}% da imagem {label} visível',
    bookingLabel: 'Marcar consulta',
    disclaimer: 'As imagens apresentadas são ilustrativas. Os resultados variam de pessoa para pessoa.',
    items: [
      { id: 'upper-blepharoplasty', title: 'Blefaroplastia Superior', beforeImage: beforeOne, beforeMobileImage: beforeOneMobile, afterImage: afterOne, afterMobileImage: afterOneMobile, imageWidth: 1200, imageHeight: 800 },
      { id: 'lower-blepharoplasty', title: 'Blefaroplastia Inferior', beforeImage: beforeTwo, beforeMobileImage: beforeTwoMobile, afterImage: afterTwo, afterMobileImage: afterTwoMobile, imageWidth: 1200, imageHeight: 800 },
      { id: 'eyelid-ptosis', title: 'Ptose Palpebral', beforeImage: beforeThree, afterImage: afterThree },
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
    sliderValueText: '{percentage}% of the {label} image visible',
    bookingLabel: 'Book an appointment',
    disclaimer: 'Images are illustrative. Results vary from person to person.',
    items: [
      { id: 'upper-blepharoplasty', title: 'Upper Blepharoplasty', beforeImage: beforeOne, beforeMobileImage: beforeOneMobile, afterImage: afterOne, afterMobileImage: afterOneMobile, imageWidth: 1200, imageHeight: 800 },
      { id: 'lower-blepharoplasty', title: 'Lower Blepharoplasty', beforeImage: beforeTwo, beforeMobileImage: beforeTwoMobile, afterImage: afterTwo, afterMobileImage: afterTwoMobile, imageWidth: 1200, imageHeight: 800 },
      { id: 'eyelid-ptosis', title: 'Eyelid Ptosis', beforeImage: beforeThree, afterImage: afterThree },
    ],
  },
}

export const getResultsPage = (language) => resultsPage[language] ?? resultsPage.pt
