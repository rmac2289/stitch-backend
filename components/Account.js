import { useUser } from "./User";

export default function Account() {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <h2>Account</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <h3>Cart:</h3>
      {user?.cart[0]?.product === null ? (
        <p>Your cart is empty.</p>
      ) : (
        user?.cart?.map((item) => {
          return <p>{item.product}</p>;
        })
      )}
    </div>
  );
}
