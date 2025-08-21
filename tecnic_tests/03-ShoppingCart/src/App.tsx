import { useProducts } from './hooks/useProducts';
import { useFilters } from './hooks/useFilters';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { CartProvider } from './providers/CartProvider.tsx'

function App() {
  const { products } = useProducts();
  const { filterProducts } = useFilters();

  return (
    <CartProvider>
      <div className="project-shopping-cart">
        <Header />
        <Cart />
        <Products products={filterProducts(products)} />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
