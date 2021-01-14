import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import user from "./user.png";

import { useAuth } from "../AuthContext";
import "./Signup.css";

const Signup = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();
  const { signup } = useAuth();

  const onSubmit = async (data) => {
    setError("");
    setLoading(true);
    try {
      await signup(data.email, data.password);
      history.push("/dashboard");
    } catch {
      setError("Failed to create an account");
      setLoading(false);
    }
  };

  return (
    <div className="form login">
      <img className="image"src={user} alt="sign up" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {error !== "" ? <div className="form-error">{error}</div> : null}
        <div className="form-control">
        <h1>Username:</h1>
          <input
            type="text"
            name="username"
            ref={register({ required: true })}
          />
          {errors.username && (
            <div className="form-error">This field is required</div>
          )}
        </div>
        <div className="form-control">
          <h1>Email:</h1>
          <input type="email" name="email" ref={register({ required: true })} />
          {errors.email && (
            <div className="form-error">This field is required</div>
          )}
        </div>
        <div className="form-control">
        <h1>Password:</h1>
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
        <div className="form-control">
          <h1 className="role">Role:</h1>
          <select className="role1" name="role" ref={register}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          class="btn btn-primary btn-block btn-large"
        >
          Signup
        </button>
        <br/>
      </form>
    </div>
  );
};

export default Signup;
