import clinicalAreas from './clinicalAreas.js'
import heroContent from './hero.js'
import siteMedia from './media.js'

export const getHeroContent = (language) => {
  const content = heroContent[language] ?? heroContent.pt

  return {
    ...content,
    slides: content.slides.map((slide, index) => ({ ...slide, image: siteMedia.hero[index] })),
  }
}

export const getClinicalAreas = (language) => {
  const content = clinicalAreas[language] ?? clinicalAreas.pt

  return {
    ...content,
    items: content.items.map((item) => ({
      ...item,
      image: siteMedia.clinicalAreas[item.slug].icon,
      coverImage: siteMedia.clinicalAreas[item.slug].cover,
      to: `/treatments/${item.slug}`,
    })),
  }
}

export const getTestimonials = (content) => content.items.map((item, index) => ({
  ...item,
  image: siteMedia.testimonials[index],
}))

export const testimonialsBackground = siteMedia.testimonialsBackground

export const feedMedia = siteMedia.feed
export const clinicIntroductionMedia = siteMedia.clinicIntroduction
export const ctaMedia = siteMedia.cta
