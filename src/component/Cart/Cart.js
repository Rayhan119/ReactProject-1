import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
const Cart = (props) => {
  //destructurin
  const { cart } = props;
  //total count
  let total = 0;
  for (const info of cart) {
    total = total + parseInt(info.salary);
  }
  //Fontawesom
  const icon = <FontAwesomeIcon icon={faCheckCircle} size="lg" />;
  return (
    <div className="card shadow p-2 member-info">
      <div className="card-body">
        <h4 className="card-title text-center cart-member">
          Members Added:
          <span className="text-danger fs-2"> {props.cart.length}</span>
        </h4>
        <br />
        <h5>Total salary :{total}$ </h5>
        <br />
        <h5 className="text-center  cart-member">Members Name</h5>
        <ul>
          {cart.map((member) => (
            <li>{member.name}</li>
          ))}
        </ul>
        <div className="button">
          <button> {icon} Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
