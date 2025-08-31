import type { FromLanguage, Language } from '../types.d';

interface Response {
  responseData: { translatedText: string; match: number };
  responseStatus: number;
}

const URL_MYMEMORY = 'https://api.mymemory.translated.net/get?';

export async function Translate({ text, fromLanguage, toLanguage }: { text: string; fromLanguage: FromLanguage; toLanguage: Language }) {
  if (!text.trim()) {
	  throw new Error('El texto a traducir no puede estar vacío');
  }
  
  if (fromLanguage === toLanguage) {
	  return text; // No es necesario traducir si es el mismo idioma
  }

  const response = await fetch(`${URL_MYMEMORY}q=${text}&langpair=${fromLanguage}|${toLanguage}`);
  const data : Response = await response.json();
  const status = data?.responseStatus;
  const result = data?.responseData?.translatedText;
	if (status !== 200) {
    throw new Error(`Error en la traducción: ${result}`);
  }

  return result;
};