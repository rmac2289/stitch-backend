import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --lightolive: #818f7d;
    --olive: #687864;
    --darkblue: #31708E;
    --medblue: #5085A5;
    --lightblue: #8FC1E3;
    --light: #F7F9FB;
    --red: #ff0000;
    --black: #393939;
    --lightGrey: #e1e1e1;
    --lightGray: var(---lightGray);
    --theme-main: black;
    --light-green: rgb(96,108,56);
    --light-brown: rgb(221,161,94,0.15);
    --brown: rgb(188,108,37,0.35);
    --offWhite: #ededed;
    --lightbrown: rgba(210,180,140,0.1);
    --maxWidth: 1200px;
    --bs: 8px 12px 24px -10px rgba(0,0,0,0.3);
    --bs-s: 4px 6px 12px -5px rgba(0,0,0,0.3);

    box-sizing: border-box;
    font-size: 10px;
    
    
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: var(---black);
  }
  a:hover {
    text-decoration: none;
  }
  button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    cursor: pointer;
  }
  
`;

const InnerStyles = styled.div`
  margin: 0;
  padding: 2rem;
  background: linear-gradient(0deg, var(--light), 98%, var(--lightolive));
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
