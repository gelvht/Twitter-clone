import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignIn.css";
import { LoginAPI } from "../../Api/Api";
import Input from "../common/input/Input";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setmessages] = useState({ class: "", message: "" });

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await LoginAPI(username, password).then(
        () => {
          navigate("/home");
        },
        (error) => {
          console.log(error);
          setmessages({ class: "error", message: error.response.data.message });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="form" onSubmit={loginHandler}>
      <div className={`messages ${messages.class}`}>{messages.message}</div>
      <Input
        label={"Username"}
        type={"text"}
        id={"userNameRef"}
        value={username}
        change={(e) => setUsername(e.target.value)}
      />
      <Input
        label={"Password"}
        type={"password"}
        id={"passwordRef"}
        value={password}
        change={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn__blue btn__login--width">Sign in</button>
    </form>
  );
};
export default SignIn;
