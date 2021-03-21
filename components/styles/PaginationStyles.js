import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  width: 100%;
  display: inline-grid;
  background: var(--light);
  grid-template-columns: repeat(3, auto);
  align-content: center;
  background: rgba(255, 255, 255, 0.8);
  margin: 2rem 0;
  border-radius: 5px;
  border: 5px solid var(--blackboard);
  box-shadow: var(--bs-s);
  color: var(--blackboard);
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--olive);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled="true"] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
