import "./Signup.css";
const Signup = () => {
  return (
    <div className="form">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1ueC3iCmaW5la1MI4pF2AY2Yp20Utb6bwQ&usqp=CAU" alt="sign up"/>
      <form action="null">
        <div>
          Name:<input type="text" name="MYNAME"/>
        </div>
        <div>
          EMAIL ID:<input type="email" name="MYEMAIL"/>
        </div>
        <div>
          Password:<input type="password" name="MYPASSWORD"/>
        </div>
        <div className="submit">
          <input type="Submit" value="Submit As A Teacher"/>
        </div>
        <div className="submit">
          <input type="Submit" value="Submit As A Student"/>
        </div>
        <div >
          <input type="reset" value="RESET"/>
        </div>
      </form>
    </div>
  );
};

export default Signup;
