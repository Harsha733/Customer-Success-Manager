import React from "react";
import ManagerCard from "./ManagerCard";  

const CSMList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  const renderManagerList = props.managers.map((manager) => {
    return (
      <ManagerCard
        manager={manager}
        clickHander={deleteConactHandler}
        key={manager.id}
      />
    );
  });
  return <div className="ui celled list">{renderManagerList}</div>;
};

export default CSMList;