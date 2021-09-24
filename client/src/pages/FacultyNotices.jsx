import React, { Component } from "react";
import Notices from "../components/Notices";
import Sidenav_f from "../components/SideNav_f";

class FacultyNotices extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row no-gutters">
          <div className="col-md-3 col-lg-2 sidenav">
            <Sidenav_f activeComponent="5" />
          </div>
          <div className="col-md-9 col-lg-10 of">
            <div className="container-fluid">
              <h4 className="mt-2">Notices</h4>
              <hr />
              <Notices />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FacultyNotices;
