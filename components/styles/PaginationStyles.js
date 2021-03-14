import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  align-content: center;
  background: rgba(255, 255, 255, 0.75);
  color: var(--theme-main);
  box-shadow: var(--bs);
  margin: 2rem 0;
  border: 1px solid var(--theme-main);
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--theme-main);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled="true"] {
    color: var(--light-green);
    pointer-events: none;
  }
`;

export default PaginationStyles;
