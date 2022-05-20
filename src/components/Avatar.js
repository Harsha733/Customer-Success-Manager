import React, { Fragment } from "react";
import "./header.css";

const Avatar = ({ name, imageUrl }) => {
  return (
    <Fragment>
      <div className='container'>
       
      { name !== "" && (
          <div className='avatatext'>{name.substring(0, 2)}</div>
        )}
      </div>
    </Fragment>
  );
};

export default Avatar;