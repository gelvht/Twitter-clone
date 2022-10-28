import { useState } from "react";

import "../signin/SignIn.css";

import Input from "../common/input/Input";
import { SignUpAPI } from "../../Api/Api";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setmessages] = useState({ class: "", message: "" });

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      await SignUpAPI(email, username, password).then(
        (response) => {
          setmessages({ class: "success", message: response.data.message });
        },
        (error) => {
          console.log(error);
          // setmessages({class:"error", message:error.response.message});
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="form" onSubmit={registerHandler}>
      <div className={`messages ${messages.class}`}>{messages.message}</div>
      <Input
        type={"email"}
        label={"Email"}
        id={"email"}
        value={email}
        change={(e) => setEmail(e.target.value)}
      />
      <Input
        type={"username"}
        label={"Username"}
        id={"username"}
        value={username}
        change={(e) => setUsername(e.target.value)}
      />
      <Input
        type={"password"}
        label={"Password"}
        id={"password"}
        value={password}
        change={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn__blue btn__login--width">Sign up</button>
    </form>
  );
};
export default SignUp;
