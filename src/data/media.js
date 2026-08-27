import eyelidsImage from '../assets/optimized/eyelids-area-icon.webp'
import orbitImage from '../assets/optimized/orbit-area-icon.webp'
import lacrimalImage from '../assets/optimized/lacrimal-area-icon.webp'
import rejuvenationImage from '../assets/optimized/aesthetics-area-icon.webp'
import eyelidsCover from '../assets/optimized/eyelids-area-cover.webp'
import eyelidsMobileCover from '../assets/optimized/eyelids-area-cover-mobile.webp'
import orbitCover from '../assets/optimized/orbit-area-cover.webp'
import orbitMobileCover from '../assets/optimized/orbit-area-cover-mobile.webp'
import lacrimalCover from '../assets/optimized/lacrimal-area-cover.webp'
import lacrimalMobileCover from '../assets/optimized/lacrimal-area-cover-mobile.webp'
import rejuvenationCover from '../assets/optimized/aesthetics-area-cover.webp'
import rejuvenationMobileCover from '../assets/optimized/aesthetics-area-cover-mobile.webp'
import consultationRoom from '../assets/optimized/consultation-room.jpg'
import doctorPortrait from '../assets/optimized/doctor.webp'
import doctorPortraitMobile from '../assets/optimized/doctor-mobile.webp'
import featuredFeedImage from '../assets/optimized/feed-featured.webp'
import featuredFeedMobileImage from '../assets/optimized/feed-featured-mobile.webp'
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
import heroMobileImageOne from '../assets/optimized/hero-1-mobile.webp'
import heroMobileImageTwo from '../assets/optimized/hero-2-mobile.webp'
import heroMobileImageThree from '../assets/optimized/hero-3-mobile.webp'

const siteMedia = {
  hero: [heroImageOne, heroImageTwo, heroImageThree],
  heroMobile: [heroMobileImageOne, heroMobileImageTwo, heroMobileImageThree],
  clinicalAreas: {
    palpebras: {
      icon: { src: eyelidsImage, width: 192, height: 128 },
      cover: { desktop: eyelidsCover, mobile: eyelidsMobileCover, width: 1200, height: 504 },
    },
    orbita: {
      icon: { src: orbitImage, width: 192, height: 128 },
      cover: { desktop: orbitCover, mobile: orbitMobileCover, width: 1200, height: 675 },
    },
    'vias-lacrimais': {
      icon: { src: lacrimalImage, width: 192, height: 96 },
      cover: { desktop: lacrimalCover, mobile: lacrimalMobileCover, width: 1200, height: 660 },
    },
    'rejuvenescimento-estetica': {
      icon: { src: rejuvenationImage, width: 192, height: 189 },
      cover: { desktop: rejuvenationCover, mobile: rejuvenationMobileCover, width: 1200, height: 675 },
    },
  },
  clinicIntroduction: {
    desktop: doctorPortrait,
    mobile: doctorPortraitMobile,
  },
  feed: {
    featured: {
      desktop: featuredFeedImage,
      mobile: featuredFeedMobileImage,
      width: 1200,
      height: 800,
    },
    gallery: [botoxImage, fillerImage, peelingImage, skinboosterImage, beforeImage, afterImage],
  },
  testimonials: [customerOne, customerTwo, customerThree],
  cta: consultationRoom,
}

export default siteMedia
