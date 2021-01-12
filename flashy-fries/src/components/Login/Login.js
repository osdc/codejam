import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useAuth } from "../AuthContext";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();
  // const { signup } = useAuth();

  const onSubmit = async (data) => {
    setError("");
    setLoading(true);
    try {
      // await signup(data.email, data.password);
      history.push("/dashboard");
    } catch {
      setError("Failed to create an account");
      setLoading(false);
    }
  };

  return (
    <div className="form">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1ueC3iCmaW5la1MI4pF2AY2Yp20Utb6bwQ&usqp=CAU"
        alt="sign up"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        {error !== "" ? <div className="form-error">{error}</div> : null}
        <div className="form-control">
          Email:
          <input type="email" name="email" ref={register({ required: true })} />
          {errors.email && (
            <div className="form-error">This field is required</div>
          )}
        </div>
        <div className="form-control">
          Password:
          <input
            type="password"
            name="password"
            ref={register({
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <div className="form-error">Password is required</div>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <div className="form-error">
              Password must be atleast 6 characters long
            </div>
          )}
        </div>
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
