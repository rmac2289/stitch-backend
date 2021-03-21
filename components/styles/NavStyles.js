import styled from "styled-components";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  background: var(--lightolive);
  font-size: 2rem;
  width: 100%;
  justify-content: flex-end;
  align-content: center;
  a,
  button {
    padding: 0 10px;
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 900;
    font-size: 1em;
    color: var(--light);
    background: none;
    border: 0;
    cursor: pointer;
    font-size: 10px;
    @media (min-width: 700px) {
      padding: 1rem 3rem;
      font-size: 1.5rem;

      &:after {
        height: 2px;
        background: var(--oxblood);
        content: "";
        width: 0;
        position: absolute;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
        left: 50%;
        margin-top: 3rem;
      }
      &:hover,
      &:focus {
        text-decoration: none;
        outline: none;
        &:after {
          width: calc(100% - 60px);
        }
      }
    }
  }
  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`;

export default NavStyles;
