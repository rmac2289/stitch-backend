import { useRouter } from "next/dist/client/router";
import Pagination from "../../components/Pagination";
import Products from "../../components/Products";
import Search from "../../components/Search";
export default function OrderPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Search />
      <Products page={page || 1} />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Pagination page={page || 1} />
      </div>{" "}
    </div>
  );
}
