import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <section className="container text-center">
      <div className="header-area">
        <h1>Manage Team members for Projects..</h1>
        <p>
          It is a Techbase company where always updated with new technologies.
          <br />
          The main purpose of this team to create a Mars Rovers for the{" "}
          <span>URC competetion 2021.</span>
        </p>
        <h3 className="shadow p-3 budget">
          Total Budget of this team is : <span>100k$</span>
        </h3>
      </div>
    </section>
  );
};

export default Header;
