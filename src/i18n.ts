import i18n from "i18next";
import { initReactI18next } from "react-i18next";

async function getLngFile(lang : string) {
  let response : Response = await fetch(`/locale/${lang}.json`, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  return await response.json()
}

export default async function loadI18n() {
  i18n.use(initReactI18next).init({
    lng: "en",
    resources: {
      en: {
        translation: await getLngFile('en')
      },
      pt: {
        translation: await getLngFile('pt')
      }
    }
  })
};
