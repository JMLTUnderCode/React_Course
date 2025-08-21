export interface JsonProductProps {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

export interface ProductProps {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  img: string;
}

export interface CartItemProps {
  product: ProductProps;
  quantity: number;
  totalPrice: number;
}

export interface CartProps {
  items: CartItemProps[];
  totalAmount: number;
}

export interface CartContextProps {
  cartItems: CartProps;
  addToCart: (product: ProductProps) => void;
  updateCartItemQuantity: (item: CartItemProps, quantity: number) => void;
  removeFromCart: (product: CartItemProps) => void;
  clearCart: () => void;
}

export interface FiltersProps {
  category: string;
  minPrice: number;
}

export interface FiltersContextProps {
  filters: FiltersProps;
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
}