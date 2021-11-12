import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

class SuccessMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: true, id: -1 };
    }

    componentDidUpdate() {
        if (this.props.error.message) {
            this.state.display = true;
            clearTimeout(this.state.id);
            this.state.id = setTimeout(() => {
                this.setState({ display: false });
            }, 3000);
        }
    }

    render(){
      return (<Fragment>
            {this.state.display && this.props.success.message && (
                <span id="err" className="alert alert-success mx-3">
                    {" "}
                    {this.props.success.message}
                </span>
            )}
        </Fragment>);
    }
}

export default connect((store) => ({ success: store.success }))(SuccessMessage);
