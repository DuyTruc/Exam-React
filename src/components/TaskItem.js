import React, { Component } from 'react';
import {connect} from 'react-redux';

class TaskItem extends Component {

    twoActionButton = () => {
      //action 1
      this.props.changeEditStatus()
      //action 2
      this.props.getEditObject(this.props.task)

    }

    deleteTask = () => {
      //call reducer to delete the task
      this.props.deleteTask(this.props.task.key);
      this.props.alertOn("Task Deleted !!");
    }

    render() {
        return (
          <div className="card">
            <i className="fas fa-h2" style={{backgroundColor: 'aqua'}}>{this.props.status} 3 Of 12</i>
            <div className="card-header" role="tab" id="note1">
              <h5 className="mb-0">
              <div className="form-group">
              Assigner : {this.props.assigner}
              </div>
              <div className="form-group">
              Status :  {this.props.status}
              </div>
              <div className="form-group">
              Task Title :  {this.props.taskTitle}
              </div>
              <div className="form-group">
              Task Content :  {this.props.taskContent}
              </div>
                <div className="btn-group float-right">
                    <button onClick = {() => this.twoActionButton()} type="button" className="btn btn-outline-info">Edit.</button>
                    <button onClick = {() => this.deleteTask()} type="button" className="btn btn-outline-secondary">Delete</button>
                </div>
              </h5>
            </div>
          </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
  return {
    editStatus : state.editStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({type : 'CHANGE_EDIT_STATUS'})
    },
    getEditObject: (editObject) => {
      dispatch({type : 'GET_EDIT_DATA',editObject})
    },
    deleteTask: (deleteId) => {
      dispatch({type : 'DELETE_DATA',deleteId})
    },
    alertOn: (alertContent) => {
      dispatch({type : 'ALERT_ON',alertContent})
  },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);