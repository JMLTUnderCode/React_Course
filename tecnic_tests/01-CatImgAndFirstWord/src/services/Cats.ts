import { IMG_CAT_URL } from "../constants";

export const getCatImg = async (fact: string) => {
	const firstWord = fact.split(' ')[0];
  const url_cat = `${IMG_CAT_URL}${firstWord}`;
  const res = await fetch(url_cat);
  if (res.ok) {
    const { url } = res;
    return url;
  } else {
    throw new Error(`${url_cat} failed with status ${res.status}`);
  }
}