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

  position: relative;
  display: flex;
  background: var(--olive);
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  display: flex;
  margin: 0;
  align-items: center;
  text-align: center;
  @media (min-width: 700px) {
    font-size: 6rem;
  }
  a {
    color: var(--light);
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
    display: grid;
    grid-template-columns: 1fr;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  svg {
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
`;

export default function Header() {
  return (
    <>
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

            <Image src="/warmheart.png" width="85" height="72" />

            <div className="sub-bar"></div>

            <Cart />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon
                fill="#818f7d"
                points="0,100 15,75 30,100 60,15 90,100 120,15 150,100 0,100"
              />
            </svg>
          </Logo>
        </div>
      </HeaderStyles>
      <Nav />
    </>
  );
}
