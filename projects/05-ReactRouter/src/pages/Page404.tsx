import { Link } from '../components/Link';
import './Page404.css';

export function Page404 () {
  return (
    <section className="page_404">
      <div className="four_zero_four_bg">
          <h1 className="text-center">404</h1>
      </div>

      <div className="content_box_404">
        <h3>Look like you're lost</h3>
        <p>The page you are looking for is not available!</p>
        <Link to="/">Go to Home</Link>
      </div>
    </section>
  )
}