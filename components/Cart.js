import styled from "styled-components";
import CartStyles from "./styles/CartStyles";
import Supreme from "./styles/Supreme";
import formatMoney from "../lib/formatMoney";
import { useUser } from "./User";
import calcTotalPrice from "../lib/calcTotalPrice";
import { useCart } from "../lib/cartState";
import CloseButton from "./styles/CloseButton";
import RemoveFromCart from "./RemoveFromCart";
import Checkout from "./Checkout";
const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          Quantity: {cartItem.quantity} &times;
          <em> {formatMoney(product.price)}</em>
        </p>
        <p>{formatMoney(product.price * cartItem.quantity)}</p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
}

export default function Cart() {
  const { cartOpen, closeCart } = useCart();
  const me = useUser();
  if (!me) return null;
  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{me.name}'s Cart</Supreme>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
        <Checkout />
      </footer>
    </CartStyles>
  );
}
