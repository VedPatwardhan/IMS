import React from "react";
import Admin_Sidenav from "../components/Admin_Sidenav";
import AnalyticsCharts from "./AnalysisChart";
import { Component } from "react";
import SideNav_f from "../components/SideNav_f";
class Analytics extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="row no-gutters">
          <div className="col-md-3 col-lg-2 sidenav">
            {this.props.user === "admin" ? (
              <Admin_Sidenav activeComponent="6" />
            ) : (
              <SideNav_f activeComponent="6" />
            )}
          </div>
          <div className="col-md-9 col-lg-10 of">
            <AnalyticsCharts />
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
