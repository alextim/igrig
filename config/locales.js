/**
 * webmanifest   - gatsby-config.js: htmlLang, siteTitle, siteDescription, siteShortName
 * SEO           - SeoBase.jsx:      htmlLang, siteTitle, siteDescription, ogLocale
 * datePublished - PostInfo.jsx:     formatLocale
 * Site Title    - Logo.jsx:         siteShortName
 */
module.exports = {
  en: {
    default: true,

    htmlLang: 'en',
    formatLocale: 'en-UK',
    ogLocale: 'en_UA',
    name: 'English',
    shortName: 'En',
    localName: 'English',
    shortLocalName: 'En',

    dateFormat: 'dd/MM/yyyy',

    siteTitle: 'Inna Grygorashchenko',
    siteDescription: 'Adventurer, photographer, inspirer, extreme sportswoman',
    siteHeadline: 'Where your desire is, the path will be there',
    siteShortName: 'IGRIG',
  },

  ru: {
    htmlLang: 'ru',
    formatLocale: 'ru-UA',
    ogLocale: 'ru_UA',
    name: 'Russian',
    shortName: 'Ру',
    localName: 'Русский',
    shortLocalName: 'Ру',

    dateFormat: 'dd.MM.yyyy',

    siteTitle: 'Инна Григоращенко',
    siteDescription: 'Авантюрист, фотограф, вдохновительница, экстремальная спортсменка',
    siteHeadline: 'Где желание, там и путь',
    siteShortName: 'ИГРИГ',
  },
};
