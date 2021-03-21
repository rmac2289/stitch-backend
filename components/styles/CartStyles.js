import styled from "styled-components";

const CartStyles = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  color: black;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 2px solid black;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer {
    border-top: 2px solid black;
    margin-top: 2rem;
    padding-top: 2rem;
    /* display: grid;
    grid-template-columns: auto auto; */
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`;

export const CloseCartButton = styled.button`
  background: none;
  color: var(--theme-main);
  font-size: 3.5rem;
  border: 0;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartHeaderText = styled.h3`
  color: black;
  display: inline-block;
  padding: 1rem;
  box-shadow: var(--bs-s);
  margin: 0;
  border: 2px solid black;
  font-size: 2rem;
`;

export const CheckoutButton = styled.button`
  background: none;
  color: var(--theme-main);
  font-weight: 500;
  border: 2px solid var(--theme-main);
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }
`;

export default CartStyles;
