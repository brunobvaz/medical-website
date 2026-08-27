import clinicalAreas from './clinicalAreas.js'
import heroContent from './hero.js'
import siteMedia from './media.js'

export const getHeroContent = (language) => {
  const content = heroContent[language] ?? heroContent.pt

  return {
    ...content,
    slides: content.slides.map((slide, index) => ({
      ...slide,
      image: siteMedia.hero[index],
      mobileImage: siteMedia.heroMobile[index],
    })),
  }
}

export const getClinicalAreas = (language) => {
  const content = clinicalAreas[language] ?? clinicalAreas.pt

  return {
    ...content,
    items: content.items.map((item) => {
      const media = siteMedia.clinicalAreas[item.slug]

      return {
        ...item,
        image: media.icon.src,
        imageWidth: media.icon.width,
        imageHeight: media.icon.height,
        coverImage: media.cover.desktop,
        coverMobileImage: media.cover.mobile,
        coverWidth: media.cover.width,
        coverHeight: media.cover.height,
        to: `/treatments/${item.slug}`,
      }
    }),
  }
}

export const getTestimonials = (content) => content.items.map((item, index) => ({
  ...item,
  image: siteMedia.testimonials[index],
}))

export const feedMedia = siteMedia.feed
export const clinicIntroductionMedia = siteMedia.clinicIntroduction
export const ctaMedia = siteMedia.cta
