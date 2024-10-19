import "./signup.css";
import Image from "next/image";

export const metadata = {
  title: "Musica - Sign up",
  description: "Signup into your new Musica account",
};

function Signup() {
  return (
    <div className="container">
      <div className="txt">
        <h1>
          <u>Signup</u> to
          <br />
          start
          <br /> <strong>listening</strong>
          <br />
          <em>
            your <br />
            favourite
            <br /> songs!
          </em>
        </h1>
      </div>
      <div className="signup-box">
        <div className="logo-box">
          <Image
            src="./logo.svg"
            alt="Musica logo"
            width={80}
            height={80}
            className="logo-clr"
          />
        </div>
        <div className="data-box">
          <form method="post" action="">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="usrName">Username</label>
            <input type="text" name="usrname" id="usrName" />
            <label htmlFor="password">Password</label>
            <input type="password" name="passwd" id="password" />
            <label htmlFor="repassword">Repassword</label>
            <input type="password" id="repassword" />
          </form>
        </div>
        <div className="signup-btn">
          <button>Signup</button>
        </div>
        <div className="alt-txt">
          <p>
            Already have an accout? <a href="/login">login</a>
          </p>
        </div>
      </div>
      <div className="txt-title">
        <h1>Musica</h1>
      </div>
    </div>
  );
}

export default Signup;
