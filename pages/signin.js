import styled from "styled-components";
import RequestReset from "../components/RequestReset";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { motion } from "framer-motion";
const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export default function SignInPage() {
  return (
    <GridStyles>
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SignIn />
      </motion.div>
      <motion.div
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SignUp />
      </motion.div>
      <motion.div
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <RequestReset />
      </motion.div>
    </GridStyles>
  );
}
