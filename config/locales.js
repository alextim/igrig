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
    shortLocalName: 'Eng',

    dateFormat: 'dd/MM/yyyy',
    siteTitle: 'Inna Grygoraschenko',
    siteDescription: 'Adventurer, photographer, inspirer, extreme sportswoman',
    siteHeadline: 'Where`s there`s a will, there`s a way…',
    siteShortName: 'IGRIG',
  },

  uk: {
    htmlLang: 'uk', // uk-ua
    formatLocale: 'uk-UA',
    ogLocale: 'uk_UA',
    name: 'Ukranian',
    shortName: 'Ua',
    localName: 'Український',
    shortLocalName: 'Укр',

    dateFormat: 'dd.MM.yyyy',

    siteTitle: 'Інна Григоращенко',
    siteDescription: 'Авантюрист, фотограф, натхненниця, екстремальна спортсменка',
    siteHeadline: 'Where`s there`s a will, there`s a way…',
    siteShortName: 'ІГРІГ',
  },

  ru: {
    htmlLang: 'ru',
    formatLocale: 'ru-UA',
    ogLocale: 'ru_UA',
    name: 'Russian',
    shortName: 'Ru',
    localName: 'Русский',
    shortLocalName: 'Руc',

    dateFormat: 'dd.MM.yyyy',

    siteTitle: 'Инна Григоращенко',
    siteDescription: 'Авантюрист, фотограф, вдохновительница, экстремальная спортсменка',
    siteHeadline: 'Where`s there`s a will, there`s a way…', // гДЕ ЖЕЛАНИЕ, ТАМ И ПУТЬ…
    siteShortName: 'ИГРИГ',
  },
};
