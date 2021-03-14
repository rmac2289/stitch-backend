import Link from "next/link";
import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import DeleteProduct from "./DeleteProduct";
import AddToCart from "./AddToCart";
import { useRouter } from "next/router";
import { useUser } from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
export default function Product({ product }) {
  const me = useUser();
  const router = useRouter();

  return (
    <ItemStyles>
      <img
        onClick={() => router.push(`/product/${product.id}`)}
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
        {["Ross MacDonald", "Nicole MacDonald"].includes(me?.name) && (
          <>
            <Link
              href={{
                pathname: "/update",
                query: {
                  id: product.id,
                },
              }}
            >
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  style={{ marginRight: "5px", fontSize: "12px" }}
                  icon={faEdit}
                />
                Edit
              </button>
            </Link>
            <DeleteProduct id={product.id}>Delete</DeleteProduct>
          </>
        )}
        <AddToCart id={product.id} />
      </div>
    </ItemStyles>
  );
}
