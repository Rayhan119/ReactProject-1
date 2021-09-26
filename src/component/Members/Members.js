import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Members.css";
const Members = (props) => {
  //destracturing
  const { name, img, age, salary, skills, profession } = props.member;
  //Fontawesom
  const icon = <FontAwesomeIcon icon={faPlusCircle} size="lg" />;
  return (
    <div className="card shadow p-3 cart">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="card-title">Name : {name}</h6>
        <h6>Age : {age}</h6>
        <h6>Profession : {profession}</h6>
        <h6 className="card-text">
          Skills : <span className=" text-danger">{skills}</span>
        </h6>

        <h4>Salary : {salary} </h4>
        <h5>Contact:</h5>
        <div className="contact">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fas fa-envelope"></i>
        </div>
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
