import Account from "../components/Account";
import Head from "next/head";

export default function AccountPage() {
  return (
    <div>
      <Head>
        <title>Your Stitched Account</title>
      </Head>
      <Account />
    </div>
  );
}
