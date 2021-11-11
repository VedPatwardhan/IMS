import React, { Fragment, useState} from "react";
import { connect } from "react-redux";

const SuccessMessage = function( success ) {
  return (<Fragment>
    {success.message && (
      <span id="err" className="alert alert-success mx-3">
        {" "}
        {success.message}
      </span>
    )}
  </Fragment>);
}

export default connect((store) => ({ success: store.success }))(SuccessMessage);
