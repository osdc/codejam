import React, { useEffect, useState } from "react";
import "./Needies.css";
import Needy from "./Needy";
import { db } from "../../firebase";

function Needies() {
  const [needies, setNeedies] = useState([]);
  const [displayArr, setDisplayArr] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("users")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setNeedies(
          snapshot.docs.map((doc) => {
            return { id: doc.id, needy: doc.data() };
          })
        );
      });
    console.log(needies);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    var new_input = e.target.value;
    setInput(new_input);

    setDisplayArr(
      needies.filter((firm) => {
        return (
          firm.needy.firm_name &&
          firm.needy.firm_name
            .toLowerCase()
            .indexOf(new_input.toLowerCase()) !== -1
        );
      })
    );
  };

  return (
    <div className="needies">
      <div className="needies_headline">
        <h1>We need Funds!</h1>
        <input
          type="text"
          placeholder="Search here..."
          value={input}
          onChange={handleChange}
        />

        {displayArr.length === 0
          ? needies.map(({ id, needy }) => {
              if (needy.firm_name) {
                return (
                  <Needy
                    key={id}
                    firm_id={id}
                    amount={needy.amount}
                    need_funds={needy.need_funds}
                    firm_name={needy.firm_name}
                    firm_image={needy.firm_image}
                  />
                );
              }
            })
          : displayArr.map(({ id, needy }) => {
              if (needy.firm_name) {
                return (
                  <Needy
                    key={id}
                    firm_id={id}
                    amount={needy.amount}
                    need_funds={needy.need_funds}
                    firm_name={needy.firm_name}
                    firm_image={needy.firm_image}
                  />
                );
              }
            })}
      </div>
    </div>
  );
}

export default Needies;
