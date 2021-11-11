import React, { Fragment, useState} from "react";
import { connect } from "react-redux";

const ErrorMessage = function({ error }){
  let [display, setDisplay] = useState(error);
  console.log(display);
  if(display && error.message){
    let time=0;
    const id = setInterval(()=>{
      setDisplay(null);
      time++;
      if(time==2)
        clearInterval(id);
    }, 3000);
  }
  
  return (<Fragment>
    {display && error.message && (
      <span
        id="err"
        className="alert alert-danger alert-dismissible"
        role="alert"
      >
        {" "}
        {error.message}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span
            aria-hidden="true"
            style={{ marginTop: "-10px", padding: "-20px", margin: "-10px" }}
          >
            &times;
          </span>
        </button>
      </span>
    )}
  </Fragment>)
}

export default connect((store) => ({ error: store.error }))(ErrorMessage);
