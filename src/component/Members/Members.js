import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Members.css";
const Members = (props) => {
  const { name, img, age, salary, skills, profession } = props.member;
  const icon = <FontAwesomeIcon icon={faPlusCircle} size="lg" />;
  return (
    <div className="card shadow p-3 cart">
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h6 class="card-title">Name : {name}</h6>
        <h6>Age : {age}</h6>
        <h6>Profession : {profession}</h6>
        <h6 class="card-text">
          Skills : <span class=" text-danger">{skills}</span>
        </h6>

        <h4>Salary : {salary} </h4>
        <div className="button">
          <button onClick={() => props.handleAddBtn(props.member)}>
            {icon} Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Members;
