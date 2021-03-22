import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import { perPage } from "../config";
import Product from "./Product";
import ItemStyles from "../components/styles/ItemStyles";
export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 2rem;
  position: relative;
  margin: 1rem auto 0 auto;
  max-width: var(--maxWidth);
  &:before {
    content: "";
    height: 75%;
    width: 75%;
    border-radius: 50%;
    opacity: 0.5;
    position: absolute;
    border: 10px solid #deb887;
    bottom: 50%;
    margin-bottom: -10%;
    left: 50%;
    margin-left: -10%;
    z-index: 0;
    background: linear-gradient(
        -90deg,
        rgba(0, 0, 0, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(#b9a37a 1px, transparent 1px),
      linear-gradient(-90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
      linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
      linear-gradient(
        transparent 2px,
        #f2f2f2 2px,
        #f2f2f2 78px,
        transparent 78px
      ),
      linear-gradient(-90deg, #aaa 1px, transparent 1px),
      linear-gradient(
        -90deg,
        transparent 2px,
        #f2f2f2 2px,
        #f2f2f2 78px,
        transparent 78px
      ),
      linear-gradient(#aaa 1px, transparent 1px), #f2f2f2;
    background-size: 4px 4px, 4px 4px, 80px 80px, 80px 80px, 80px 80px,
      80px 80px, 80px 80px, 80px 80px;
  }

  ${ItemStyles}:nth-child(odd) {
    transform: rotate(5deg) skew(1deg);
    transition: 0.25s all ease;
  }
  ${ItemStyles}:nth-child(even) {
    transform: rotate(-5deg) skew(-1deg);
    transition: 0.25s all ease;
  }
  ${ItemStyles}:hover {
    transform: rotate(0) skew(0) scale(1.1);
    z-index: 2;
  }
`;

export default function Products({ page }) {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <ProductsListStyles>
      {data?.allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsListStyles>
  );
}
