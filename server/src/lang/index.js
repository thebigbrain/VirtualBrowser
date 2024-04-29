import { createI18n } from 'vue-i18n'
import elementEnLocale from 'element-plus/es/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-plus/es/locale/lang/zh-cn' // element-ui lang
// import elementEsLocale from 'element-ui/lib/locale/lang/es' // element-ui lang
// import elementJaLocale from 'element-ui/lib/locale/lang/ja' // element-ui lang
import enLocale from './en'
import zhLocale from './zh'
// import esLocale from './es'
// import jaLocale from './ja'

// Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
  // es: {
  //   ...esLocale,
  //   ...elementEsLocale,
  // },
  // ja: {
  //   ...jaLocale,
  //   ...elementJaLocale,
  // },
}
export function getLanguage() {
  const chooseLanguage = localStorage.getItem('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}
const i18n = createI18n({
  // set locale
  // options: en | zh | es
  locale: getLanguage(),
  // set locale messages
  messages
})

export default i18n
