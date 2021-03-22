import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  width: 100%;
  display: inline-grid;
  background: var(--light);
  grid-template-columns: repeat(3, auto);
  align-content: center;
  margin: 2rem 0;
  border-radius: 3px;
  align-self: center;
  border: 1px solid var(--medblue);
  color: var(--medblue);
  max-width: 400px;

  & > * {
    margin: 0;
    padding: 5px 20px;
    border-right: 1px solid var(--medblue);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled="true"] {
    color: var(--lightblue);
    pointer-events: none;
  }
`;

export default PaginationStyles;
