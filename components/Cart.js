import styled from "styled-components";
import CartStyles, { CloseCartButton } from "./styles/CartStyles";
import { CartHeaderText } from "./styles/CartStyles";
import formatMoney from "../lib/formatMoney";
import { useUser } from "./User";
import calcTotalPrice from "../lib/calcTotalPrice";
import { useCart } from "../lib/cartState";
import RemoveFromCart from "./RemoveFromCart";
import Checkout from "./Checkout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const CartItemStyles = styled.li`
  padding: 1rem;
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
const CartList = styled.ul``;

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
          {formatMoney(product.price * cartItem.quantity)}-
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
}

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  if (!me) return null;
  return (
    <CartStyles open={cartOpen}>
      <header>
        <CloseCartButton onClick={closeCart}>
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
        </CloseCartButton>
        <CartHeaderText>My Cart</CartHeaderText>
      </header>
      <CartList>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CartList>
      <footer>
        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
        <Checkout />
      </footer>
    </CartStyles>
  );
}
