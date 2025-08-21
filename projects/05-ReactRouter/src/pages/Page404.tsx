import { Link } from '../components/Link';

export function Page404 () {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif of a dog sitting in a burning room' />
      </div>
      <Link to="/">Go to Home Page</Link>
    </>
  )
}