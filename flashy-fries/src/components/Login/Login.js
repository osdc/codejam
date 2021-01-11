import "./Login.css";
const Login = () => {
  return (
    <div className="form">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1ueC3iCmaW5la1MI4pF2AY2Yp20Utb6bwQ&usqp=CAU" alt="sign up"/>
      <form action="null">
       
        <div>
          EMAIL ID:<input type="email" name="MYEMAIL"/>
        </div>
        <div>
          Password:<input type="password" name="MYPASSWORD"/>
        </div>
        <div className="submit">
          <input type="Submit" value="Login As A Teacher"/>
        </div>
        <div className="submit">
          <input type="Submit" value="Login As A Student"/>
        </div>
        <div >
          <input type="reset" value="RESET"/>
          <input  type="Submit" value="Forget Password ?"/>
        </div>
      </form>
    </div>
  );
};

export default Login;