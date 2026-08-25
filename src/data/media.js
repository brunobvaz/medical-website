import eyelidsImage from '../assets/optimized/eyelids-icon.png'
import orbitImage from '../assets/optimized/orbit-icon.png'
import lacrimalImage from '../assets/optimized/lacrimal-icon.png'
import rejuvenationImage from '../assets/optimized/aesthetics-icon.png'
import consultationRoom from '../assets/optimized/consultation-room.jpg'
import doctorPortrait from '../assets/optimized/doctor.jpg'
import featuredFeedImage from '../assets/optimized/consultation-room.jpg'
import botoxImage from '../assets/feed/botox.jpg'
import fillerImage from '../assets/feed/filler.jpg'
import peelingImage from '../assets/optimized/peeling.jpg'
import skinboosterImage from '../assets/feed/skinbooster.jpg'
import beforeImage from '../assets/before_after/antes3.jpeg'
import afterImage from '../assets/before_after/depois3.jpeg'
import customerOne from '../assets/faces/customer-1.jpg'
import customerTwo from '../assets/faces/customer-2.jpg'
import customerThree from '../assets/faces/customer-3.jpg'
import heroImageOne from '../assets/optimized/hero-1.jpg'
import heroImageTwo from '../assets/optimized/hero-2.jpg'
import heroImageThree from '../assets/optimized/hero-3.jpg'

const siteMedia = {
  hero: [heroImageOne, heroImageTwo, heroImageThree],
  clinicalAreas: {
    palpebras: eyelidsImage,
    orbita: orbitImage,
    'vias-lacrimais': lacrimalImage,
    'rejuvenescimento-estetica': rejuvenationImage,
  },
  clinicIntroduction: doctorPortrait,
  feed: {
    featured: featuredFeedImage,
    gallery: [botoxImage, fillerImage, peelingImage, skinboosterImage, beforeImage, afterImage],
  },
  testimonials: [customerOne, customerTwo, customerThree],
  cta: consultationRoom,
}

export default siteMedia
