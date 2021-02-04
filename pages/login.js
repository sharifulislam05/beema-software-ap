import Link from "next/link";
import Header from "../src/components/Header/Header";

const Login = () => {
  return (
    <div>
      <h1>this is a login page</h1>
      <Link href="/">
          <a>back</a>
      </Link>
    </div>
  );
};

export default Login;
