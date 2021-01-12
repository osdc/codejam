import "./Dashboard.css";
function Dashboard() {
  return(
    <div>
      <h1 className="heading">WELCOME TO STUDY DATE</h1>
      <div>
        <h1 className="heading1">LIST OF TOPICS</h1>
      </div>
      <div className="select">
      <label class="container">One
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>
      </div>
      <div>
      <label class="container">Two
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
      </div>
      <div>
      <label class="container">Three
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
      </div>
      <div>
      <label class="container">Four
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>

      </div>
      <div>
        <button className="btn">Submit</button>
      </div>
      </div> 
  );
}

export default Dashboard;
