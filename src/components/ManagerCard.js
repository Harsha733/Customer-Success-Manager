import React from "react";
import './header.css'
import Avatar from "./Avatar";

const ManagerCard = (props) => {
  const { id, name, email, role } = props.manager;
  return (
    <div className="item">
      <div className="left floated content"><Avatar name={name} /></div>
      <div className="content">
        <div className="header"><b>{name}</b></div>
        <div id='roletxt'>{role}</div>
        {/* <div>{email}</div> */}
      </div>
      <div className="right floated content">
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => {props.clickHander(id);console.log(id);}}
          
        ></i></div>
    </div>
  );
};

export default ManagerCard;