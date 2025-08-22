import { Link } from "../components/Link";

const i18n = {
  es: {
    title: "Sobre mi",
    subtitle: "Bienvenido a mi página de información",
    description: "Soy Junior Lara, un programador apasionado por la tecnología.",
    alt: "Imagen de perfil de Junior Lara con una camisa gris",
    button: "Ir a la página principal"
  },
  en: {
    title: "About Me",
    subtitle: "Welcome to my information page",
    description: "I am Junior Lara, a programmer passionate about technology.",
    alt: "Profile picture of Junior Lara with a grey shirt",
    button: "Go to Home Page"
  }
};

const useI18n = (lang: string) => {
  return i18n[lang as keyof typeof i18n] || i18n.en;
};

export function AboutPage({ routeParams } : { routeParams: Partial<Record<string, string | string[]>>} ) {
  const i18n = useI18n(routeParams.lang as string ?? 'en');
  return (
    <div className="aboutpage">
      <h1>{i18n.title}</h1>
      <p>{i18n.subtitle}</p>
      <div>
        <img src="https://avatars.githubusercontent.com/u/45317638?v=4" alt={i18n.alt} />
      </div>
      <span>{i18n.description}</span>

      <Link to="/">{i18n.button}</Link>
    </div>
  )
};