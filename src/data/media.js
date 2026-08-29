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
import customerOne from '../assets/faces/customer-1.jpg'
import customerTwo from '../assets/faces/customer-2.jpg'
import customerThree from '../assets/faces/customer-3.jpg'
import heroImageOne from '../assets/optimized/hero-1.jpg'
import heroImageTwo from '../assets/optimized/hero-2.jpg'
import heroImageThree from '../assets/optimized/hero-3.jpg'
import heroMobileImageOne from '../assets/optimized/hero-1-mobile.webp'
import heroMobileImageTwo from '../assets/optimized/hero-2-mobile.webp'
import heroMobileImageThree from '../assets/optimized/hero-3-mobile.webp'
import identityMark from '../assets/optimized/identity-mark.webp'
import signatureImage from '../assets/optimized/signature.webp'
import positioningEye from '../assets/optimized/positioning-eye.webp'
import positioningEyeMobile from '../assets/optimized/positioning-eye-mobile.webp'
import positioningFunctionIcon from '../assets/optimized/positioning-function-icon.webp'
import positioningHarmonyIcon from '../assets/optimized/positioning-harmony-icon.webp'
import positioningPrecisionIcon from '../assets/optimized/positioning-precision-icon.webp'
import specialityImage from '../assets/optimized/speciality.webp'
import specialityMobileImage from '../assets/optimized/speciality-mobile.webp'
import specialityIdentityMark from '../assets/optimized/speciality-identity-mark.webp'
import testimonialsMark from '../assets/optimized/testimonials-mark.webp'

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
  clinicalAreasSection: {
    identityMark: { src: identityMark, width: 760, height: 380 },
  },
  clinicIntroduction: {
    portrait: {
      desktop: doctorPortrait,
      mobile: doctorPortraitMobile,
      width: 1498,
      height: 1050,
    },
    identityMark: { src: identityMark, width: 760, height: 380 },
    signature: { src: signatureImage, width: 560, height: 187 },
  },
  positioning: {
    background: {
      desktop: positioningEye,
      mobile: positioningEyeMobile,
      width: 1600,
      height: 551,
    },
    pillarIcons: {
      function: { src: positioningFunctionIcon, width: 192, height: 192 },
      precision: { src: positioningPrecisionIcon, width: 192, height: 192 },
      harmony: { src: positioningHarmonyIcon, width: 192, height: 192 },
    },
  },
  speciality: {
    mainImage: {
      desktop: specialityImage,
      mobile: specialityMobileImage,
      width: 1024,
      height: 1536,
    },
    identityMark: { src: specialityIdentityMark, width: 192, height: 192 },
  },
  feed: {
    featured: {
      desktop: featuredFeedImage,
      mobile: featuredFeedMobileImage,
      width: 1200,
      height: 800,
    },
  },
  testimonials: {
    'ana-martins': customerOne,
    'carla-silva': customerTwo,
    'marta-ferreira': customerThree,
  },
  testimonialsSection: {
    identityMark: { src: testimonialsMark, width: 640, height: 640 },
  },
  cta: consultationRoom,
}

export default siteMedia
