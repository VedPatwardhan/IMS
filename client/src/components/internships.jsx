import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getInternships,UpdateInternship } from "../store/actions";
import { Link, Router, Route } from "react-router-dom";
import Sidenav_f from "./SideNav_f";
import { MdFormatListBulleted, MdViewAgenda, MdCached } from "react-icons/md";
import SideNav_f from "./SideNav_f";
class Internships extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    internships: [
      {
        _id: null,
        application: {
          workplace: null,
          submittedDate: null,
          offerLetter: null,
          durationOfInternship: null,
        },
        docs: {
          ApplicationStatus: null,
          UndertakingStatus: null,
          OfferLetterStatus: null,
          MarksheetsStatus: null,
          AttendanceStatus: null,
        },
        student: {
          name: {
            firstname: null,
            lastname: null,
          },
          currentClass: {
            year: null,
            div: null,
          },
          rollNo: null,
          prevSemAttendance: null,
        },
        holder: {
          id: null,
          designation: null,
        },
        completionStatus: null,
        comments: null,
      },
    ],
  };

  componentDidMount() {
    const { getInternships } = this.props;
    getInternships().then(console.log(this.props));
  }

  loadData(internships) {
    if (internships.length > 0) this.setState({ internships: internships });
  }

  enableListview() {
    var elements = document.getElementsByClassName("card-body");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  }
  enableCardview() {
    var elements = document.getElementsByClassName("card-body");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "block";
    }
  }


  updateFunction(stringId,internship){
    const { UpdateInternship } = this.props;
console.log("Heil Hitler");
console.log(stringId);
var ele=document.getElementById(stringId).checked;
console.log(ele);
var res=stringId.split("_");
console.log("res[0] is "+res[0]+" res[1] is "+res[1]);
const temp={};
temp["ApplicationStatus"]=internship.docs.ApplicationStatus;
temp["AttendanceStatus"]=internship.docs.AttendanceStatus;
temp["UndertakingStatus"]=internship.docs.UndertakingStatus;
temp["OfferLetterStatus"]=internship.docs.OfferLetterStatus;
temp["MarksheetsStatus"]=internship.docs.MarksheetsStatus;

console.log(temp["ApplicationStatus"]);
if(ele===true){
switch(res[0]){
  case "Att":
    console.log("only for attendance");
    var obj={"_id":res[1], "docs":
    { "AttendanceStatus":"Y",
    "ApplicationStatus":temp["ApplicationStatus"],
  "UndertakingStatus":temp["UndertakingStatus"],
"OfferLetterStatus":temp["OfferLetterStatus"],
"MarksheetsStatus":temp["MarksheetsStatus"] } };
    UpdateInternship(obj);
    break;
    case "App":
      var obj={"_id":res[1], "docs":
    { "AttendanceStatus":temp["AttendanceStatus"],
    "ApplicationStatus":"Y",
  "UndertakingStatus":temp["UndertakingStatus"],
"OfferLetterStatus":temp["OfferLetterStatus"],
"MarksheetsStatus":temp["MarksheetsStatus"] } };
    UpdateInternship(obj);
    break;
    case "Und":
      var obj={"_id":res[1], "docs":
    { "AttendanceStatus":temp["AttendanceStatus"],
    "ApplicationStatus":temp["ApplicationStatus"],
  "UndertakingStatus":"Y",
"OfferLetterStatus":temp["OfferLetterStatus"],
"MarksheetsStatus":temp["MarksheetsStatus"] } };
    UpdateInternship(obj);
    break;
    case "Off":
      var obj={"_id":res[1], "docs":
    { "AttendanceStatus":temp["AttendanceStatus"],
    "ApplicationStatus":temp["ApplicationStatus"],
  "UndertakingStatus":temp["UndertakingStatus"],
"OfferLetterStatus":"Y",
"MarksheetsStatus":temp["MarksheetsStatus"] } };
    UpdateInternship(obj);
    break;
    case "Mar":
      var obj={"_id":res[1], "docs":
    { "AttendanceStatus":temp["AttendanceStatus"],
    "ApplicationStatus":temp["ApplicationStatus"],
  "UndertakingStatus":temp["UndertakingStatus"],
"OfferLetterStatus":temp["OfferLetterStatus"],
"MarksheetsStatus":"Y" } };
    UpdateInternship(obj);
    break;

}
}else{
  switch(res[0]){
    case "Att":
      console.log("only for attendance");
      var obj={"_id":res[1], "docs":
      { "AttendanceStatus":"N",
      "ApplicationStatus":temp["ApplicationStatus"],
    "UndertakingStatus":temp["UndertakingStatus"],
  "OfferLetterStatus":temp["OfferLetterStatus"],
  "MarksheetsStatus":temp["MarksheetsStatus"] } };
      UpdateInternship(obj);
      break;
      case "App":
        var obj={"_id":res[1], "docs":
      { "AttendanceStatus":temp["AttendanceStatus"],
      "ApplicationStatus":"N",
    "UndertakingStatus":temp["UndertakingStatus"],
  "OfferLetterStatus":temp["OfferLetterStatus"],
  "MarksheetsStatus":temp["MarksheetsStatus"] } };
      UpdateInternship(obj);
      break;
      case "Und":
        var obj={"_id":res[1], "docs":
      { "AttendanceStatus":temp["AttendanceStatus"],
      "ApplicationStatus":temp["ApplicationStatus"],
    "UndertakingStatus":"N",
  "OfferLetterStatus":temp["OfferLetterStatus"],
  "MarksheetsStatus":temp["MarksheetsStatus"] } };
      UpdateInternship(obj);
      break;
      case "Off":
        var obj={"_id":res[1], "docs":
      { "AttendanceStatus":temp["AttendanceStatus"],
      "ApplicationStatus":temp["ApplicationStatus"],
    "UndertakingStatus":temp["UndertakingStatus"],
  "OfferLetterStatus":"N",
  "MarksheetsStatus":temp["MarksheetsStatus"] } };
      UpdateInternship(obj);
      break;
      case "Mar":
        var obj={"_id":res[1], "docs":
      { "AttendanceStatus":temp["AttendanceStatus"],
      "ApplicationStatus":temp["ApplicationStatus"],
    "UndertakingStatus":temp["UndertakingStatus"],
  "OfferLetterStatus":temp["OfferLetterStatus"],
  "MarksheetsStatus":"N" } };
      UpdateInternship(obj);
      break;

}
  }
  alert("the Internship Data is updated ");
  //this.loadData(this.props.internships);
}


  render() {
    return (
      <div className="row no-gutters">
        <div className="col-sm-2 sidenav">
          <SideNav_f activeComponent="2" />
        </div>
        <div className="col-sm-10 of">
          <div className="container">
            <h4 className="mt-2">
              My Applications
              <div className="float-right">
                <div
                  className="btn-group btn-group-toggle btn-sm"
                  data-toggle="buttons"
                >
                  <label
                    className="btn btn-secondary btn-sm"
                    onClick={this.enableListview}
                  >
                    <input
                      type="radio"
                      name="options"
                      id="option1"
                      autoComplete="off"
                      checked
                    />
                    <MdFormatListBulleted color="white" />
                  </label>
                  <label
                    className="btn btn-secondary active btn-sm"
                    onClick={this.enableCardview}
                  >
                    <input
                      type="radio"
                      name="options"
                      id="option2"
                      autoComplete="off"
                    />
                    <MdViewAgenda color="white" />
                  </label>
                </div>
              </div>
            </h4>

            <hr />
            <div>
              {this.state.internships[0].holder.designation === null && (
                <div className="alert alert-info">
                  No internship applications found.{" "}
                  <b>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => this.loadData(this.props.internships)}
                    >
                      Click here
                    </span>
                  </b>{" "}
                  to refresh.
                </div>
              )}
              {this.state.internships[0].holder.designation !== null &&
                this.state.internships.map((internship) => (
                  <div
                    key={internship._id}
                    className={
                      internship.completionStatus === "N"
                        ? "card my-3 border-secondary"
                        : "card my-3 border-success"
                    }
                  >
                    <div className="card-header">
                      {internship.application.workplace}
                      <span className="float-right">
                        <Link
                          to={{
                            pathname: `/internshipview/${internship._id}`,
                          }}
                          className="btn btn-primary btn-border mx-2"
                        >
                          View
                        </Link>
                      </span>
                      <br />
                      <small className="text-muted">{internship._id}</small>
                    </div>
                    <div className="card-body">
                      <table className="table table-hover table-sm">
                        <thead className="thead-dark">
                          <tr >
                            <th>Status</th>
                            {internship.holder.designation!=="ClassCoordinator" &&
                            <th>
                              {internship.completionStatus === "N"
                                ? "Pending"
                                : "Approved"}
                            </th>}
                            {internship.holder.designation==="ClassCoordinator" && 
                              <th colSpan="2">
                              {internship.completionStatus === "N"
                                ? "Pending"
                                : "Approved"}
                            </th>
                            }
                            
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            className={
                              internship.docs.AttendanceStatus === "N"
                                ? "table-warning"
                                : "table-success"
                            }
                          >
                            <td>Attendance</td>
                            { internship.holder.designation!=="ClassCoordinator" &&
                            <td>{internship.docs.AttendanceStatus}</td>
                            }
                              { internship.holder.designation==="ClassCoordinator" &&
                              <>
                            <td><input type="checkbox"  id={"Att_"+internship._id}/></td>
                            <td><button type="button" onClick={this.updateFunction.bind(this,"Att_"+internship._id,internship)} className="btn btn-primary">Update</button></td>
                            </>
                            }
                            
                            
                          </tr>
                          <tr
                            className={
                              internship.docs.ApplicationStatus === "N"
                                ? "table-warning"
                                : "table-success"
                            }
                          >
                            <td>Application</td>
                            { internship.holder.designation!=="ClassCoordinator" &&
                            <td>{internship.docs.ApplicationStatus}</td>
                          }
                          {
                            internship.holder.designation==="ClassCoordinator" &&
                            <>
                            <td><input type="checkbox"  id={"App_"+internship._id}/></td>
                            <td><button type="button" onClick={this.updateFunction.bind(this,"App_"+internship._id,internship)} className="btn btn-primary">Update</button></td>
                            </>
                          }
                          </tr>
                          <tr
                            className={
                              internship.docs.UndertakingStatus === "N"
                                ? "table-warning"
                                : "table-success"
                            }
                          >
                            <td>Undertaking</td>
                            { internship.holder.designation!=="ClassCoordinator" &&
                            <td>{internship.docs.UndertakingStatus}</td>
                          }
                          {
                            internship.holder.designation==="ClassCoordinator" &&
                            <>
                            <td><input type="checkbox"  id={"Und_"+internship._id}/></td>
                            <td><button type="button" onClick={this.updateFunction.bind(this,"Und_"+internship._id,internship)} className="btn btn-primary">Update</button></td>
                            </>
                          }
                          </tr>
                          <tr
                            className={
                              internship.docs.OfferLetterStatus === "N"
                                ? "table-warning"
                                : "table-success"
                            }
                          >
                            <td>Offer Letter</td>
                            { internship.holder.designation!=="ClassCoordinator" &&
                            <td>{internship.docs.OfferLetterStatus}</td>
                          }
                          {
                            internship.holder.designation==="ClassCoordinator" &&
                            <>
                            <td><input type="checkbox"  id={"Off_"+internship._id}/></td>
                            <td><button type="button" onClick={this.updateFunction.bind(this,"Off_"+internship._id,internship)} className="btn btn-primary">Update</button></td>
                            </>
                          }
                          </tr>
                          <tr
                            className={
                              internship.docs.MarksheetsStatus === "N"
                                ? "table-warning"
                                : "table-success"
                            }
                          >
                            <td>Marksheets</td>
                            {internship.holder.designation!=="ClassCoordinator" &&
                            <td>{internship.docs.MarksheetsStatus}</td>
                            }
                            {
                               internship.holder.designation==="ClassCoordinator" &&
                               <>
                              <td><input     type="checkbox" id={"Mar_"+internship._id}/></td>
                            <td><button type="button" onClick={this.updateFunction.bind(this,"Mar_"+internship._id,internship)} className="btn btn-primary">Update</button></td>
                               </>
                            }
                          </tr>
                        </tbody>
                      </table>
                      {internship.completionStatus === "N" && (
                        <>
                          Application is currently viewed by:{" "}
                          {internship.holder.designation} <br />
                        </>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>



    );
  }
}

export default connect(
  (store) => ({
    auth: store.auth,
    internships: store.internships,
  }),
  { getInternships,UpdateInternship }
)(Internships);
