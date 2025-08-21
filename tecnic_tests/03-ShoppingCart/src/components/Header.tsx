import { Filters } from './Filters';

export function Header () {
	return (
		<header>
			<h1>Shopping Cart</h1>
			<p>Welcome to the shopping cart application!</p>
			<Filters />
		</header>
	)
}