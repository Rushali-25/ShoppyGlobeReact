import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default CartPage;
