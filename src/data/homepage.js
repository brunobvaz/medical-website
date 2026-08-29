import clinicalAreas from './clinicalAreas.js'
import heroContent from './hero.js'
import siteMedia from './media.js'
import { getResultsPage } from './resultsPage.js'
import translations from './translations.js'

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
        icon: media.icon,
        cover: media.cover,
        to: `/treatments/${item.slug}`,
      }
    }),
  }
}

export const getTestimonialsContent = (language) => {
  const content = translations[language]?.testimonials ?? translations.pt.testimonials

  return {
    ...content,
    items: content.items.map((item) => ({
      ...item,
      image: siteMedia.testimonials[item.id],
    })),
    identityMark: siteMedia.testimonialsSection.identityMark,
    pageStatus: ({ current, total, names }) => content.pageStatus
      .replace('{current}', String(current))
      .replace('{total}', String(total))
      .replace('{names}', names),
  }
}

export const getFAQContent = (language) =>
  translations[language]?.faq ?? translations.pt.faq

export const getCTAContent = (language) => ({
  ...(translations[language]?.cta ?? translations.pt.cta),
  background: siteMedia.cta,
})

export const getFeedContent = (language) => {
  const content = translations[language]?.feed ?? translations.pt.feed
  const results = getResultsPage(language)

  return {
    ...content,
    comparisons: results.items.slice(0, 2),
    comparisonLabels: {
      beforeLabel: results.beforeLabel,
      afterLabel: results.afterLabel,
      sliderLabel: results.sliderLabel,
      sliderValueText: results.sliderValueText,
    },
    disclaimer: results.disclaimer,
    featuredMedia: siteMedia.feed.featured,
  }
}

export const clinicIntroductionMedia = siteMedia.clinicIntroduction
export const positioningMedia = siteMedia.positioning
export const specialityMedia = siteMedia.speciality
export const clinicalAreasSectionMedia = siteMedia.clinicalAreasSection
