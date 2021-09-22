import React from "react";
import BigText from "../../BigText";
import { LoginStyle } from "./style";

function Login() {
  return (
    <LoginStyle>
      <BigText>Login</BigText>
      <div className="form_box">
        <div className="instructions">
          <h2>New to our Shop?</h2>
          <p className="text">
            There are advances being made in science and technology everyday,
            and a good example of this is the
          </p>
          <button>Create an account</button>
        </div>
        <form>
          <p className="title">
            Welcome Back ! <br />
            Please Sign in now
          </p>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div className="remember">
            <input type="checkbox" /> Remember me
          </div>
          <button>LOG IN</button>
          <a href="#" className="forgot">
            Forget Password?
          </a>
        </form>
      </div>
    </LoginStyle>
  );
}

export default Login;
