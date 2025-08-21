import { Link } from "../Link";

export function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <div>
        <img src="https://avatars.githubusercontent.com/u/45317638?v=4" alt="Perfil of Junior Lara" />
      </div>
      <p>Welcome to the About Page!</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  )
};