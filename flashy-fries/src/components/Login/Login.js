import "./Login.css";
const Login = () => {
  return (
    <div className="form">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1ueC3iCmaW5la1MI4pF2AY2Yp20Utb6bwQ&usqp=CAU" alt="sign up"/>
      <form action="null">
       
        <div>
          Email-ID: <input type="email" name="MYEMAIL"/>
        </div>
        <div>
          Password: <input type="password" name="MYPASSWORD"/>
        </div>
        <div className="submit">
          <input type="Submit" value="Login as a Teacher"/>
        </div>
        <div className="submit">
          <input type="Submit" value="Login as a Student"/>
        </div>
        <div >
          <input type="reset" value="Reset Fields"/>
          <input  type="Submit" value="Forgot Password"/>
        </div>
      </form>
    </div>
  );
};

export default Login;