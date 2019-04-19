import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';

class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOff();

    }
    render() {
        if (this.props.AlertShow === false) return null;
        return (
            <div>
                <AlertContainer>
                    <Alert type="info" onDismiss = {() => this.handleDismiss()} timeout={1000}>
                        {this.props.AlertContent}
                    </Alert>
                </AlertContainer>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        AlertShow: state.AlertShow,
        AlertContent:state.AlertContent
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       alertOff: () => {
            dispatch({type : 'ALERT_OFF'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);