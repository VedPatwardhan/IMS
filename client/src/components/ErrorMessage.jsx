import React, { Fragment } from "react";
import { connect } from "react-redux";

class ErrorMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: true, id: -1};
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

    render() {
        return (
            <Fragment>
                {this.state.display && this.props.error.message && (
                    <span
                        id="err"
                        className="alert alert-danger alert-dismissible"
                        role="alert"
                    >
                        {" "}
                        {this.props.error.message}
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                            aria-label="Close"
                        >
                            <span
                                aria-hidden="true"
                                style={{
                                    marginTop: "-10px",
                                    padding: "-20px",
                                    margin: "-10px",
                                }}
                            >
                                &times;
                            </span>
                        </button>
                    </span>
                )}
            </Fragment>
        );
    }
}

export default connect((store) => ({ error: store.error }))(ErrorMessage);
