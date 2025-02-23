import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) =>
          dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))
        }
      />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
