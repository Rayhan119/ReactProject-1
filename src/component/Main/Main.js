import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Members from "../Members/Members";
import "./Main.css";
const Main = () => {
  //Declare Use state
  const [members, setMember] = useState([]);

  //counting total add
  const [cart, setCart] = useState([]);
  //even handler:
  const handleAddBtn = (name) => {
    const newCart = [...cart, name];
    setCart(newCart);
  };
  //Data load from MembersData
  useEffect(() => {
    fetch("/memberData.json")
      .then((res) => res.json())
      .then((data) => setMember(data));
  }, []);

  return (
    <section className="contain">
      <div className="row">
        <div className="col-md-9">
          <div className="members">
            {members.map((member) => (
              <Members
                key={member.id}
                handleAddBtn={handleAddBtn}
                member={member}
              ></Members>
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <div className="members-info">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
