import Link from "next/link";
import styled from "styled-components";
import Cart from "./Cart";
import Nav from "./Nav";
import Search from "./Search";
import Image from "next/image";
const Logo = styled.h1`
  font-size: 4rem;
  width: 100%;
  margin-left: 2rem;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  display: flex;
  margin: 0;
  align-items: center;
  text-align: center;
  background: var(--tan);
  @media (min-width: 700px) {
    font-size: 6rem;
  }

  a {
    color: var(--theme-main);
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: 0.25s all linear;
  }
  a:hover {
    text-decoration: none;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 5px solid var(--theme-main);
    display: grid;
    grid-template-columns: 1fr;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>
              stitched{" "}
              <span style={{ fontSize: "2.25rem", fontWeight: "100" }}>
                by Nicole
              </span>
            </a>
          </Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar"></div>
      <Cart />
    </HeaderStyles>
  );
}
