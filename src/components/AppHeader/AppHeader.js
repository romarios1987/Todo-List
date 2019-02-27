import React from "react";
import './AppHeader.css'

const AppHeader = ({statusMessage}) => {
  return (
        <>
          <h1 className="AppHeader text-center">My Todo List</h1>
          <div className={statusMessage ? 'alert alert-danger' : 'alert'} role="alert">
            {statusMessage}
          </div>
        </>
  )
};

export default AppHeader;