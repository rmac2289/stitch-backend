import Link from "next/link";
import styled from "styled-components";
import Cart from "./Cart";
import Nav from "./Nav";
import Search from "./Search";

const Logo = styled.h1`
  font-size: 2.75rem;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--theme-main);
  a {
    color: white;
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
    border-bottom: 10px solid var(--theme-main);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid black;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">
            <a>
              stitched <br />{" "}
              <span style={{ fontSize: "2.25rem", fontWeight: "100" }}>
                by Nicole
              </span>
            </a>
          </Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <Search />
      </div>
      <Cart />
    </HeaderStyles>
  );
}
