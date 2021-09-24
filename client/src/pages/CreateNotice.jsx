import React, { Component } from "react";
import NoticeForm from "../components/NoticeForm";
import Sidenav_f from "../components/SideNav_f";
class CreateNotice extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row no-gutters">
          <div className="col-md-3 col-lg-2 sidenav">
            <Sidenav_f activeComponent="4" />
          </div>
          <div className="col-md-9 col-lg-10 of">
            <div className="container-fluid">
              <NoticeForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CreateNotice;
