import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let total = 0;
  for (const info of cart) {
    total = total + parseInt(info.salary);
  }
  const icon = <FontAwesomeIcon icon={faCheckCircle} size="lg" />;
  return (
    <div className="card shadow p-2 cart">
      <div class="card-body">
        <h4 class="card-title text-center text-success">
          Members Added:
          <span className="text-danger fs-2"> {props.cart.length}</span>
        </h4>
        <br />
        <h5>Total salary :{total}$ </h5>
        <br />
        <h5 className="text-center">Members Name</h5>
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
