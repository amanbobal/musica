import Image from "next/image";
import "./login.css";

export const metadata = {
  title: "Musica - Login",
  description: "Login to your Musica account",
};

function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <div className="logo-box">
          <Image src="/logo.svg" alt="Musica Logo" width={70} height={70} />
        </div>
        <div className="input-box">
          <label id="one" htmlFor="username">
            Username
          </label>
          <input type="text" />
          <label id="two" htmlFor="password">
            Password
          </label>
          <input type="password" />
        </div>
        <div className="login-button">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
