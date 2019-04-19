import React, { Component } from 'react';
import {connect} from 'react-redux';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            assigner:'',
            status:'',
            taskTitle:'',
            taskContent:''
        }
        
    }

    componentWillMount() {
        if (this.props.editItem) { //edit
            this.setState({
                assigner:this.props.editItem.assigner,
                status:this.props.editItem.status,
                taskTitle:this.props.editItem.taskTitle,
                taskContent:this.props.editItem.taskContent,
                id:this.props.editItem.key
            });
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        }); 
    }

    addData = (assigner,status,taskTitle,taskContent) => {
        console.log(this.state.id);
        if (this.state.id) {//edit
            var editObject = {};
            editObject.id = this.state.id;
            editObject.assigner =  this.state.assigner;
            editObject.status = this.state.status;
            editObject.taskTitle = this.state.taskTitle;
            editObject.taskContent = this.state.taskContent;
            this.props.editDataStore(editObject);
            this.props.alertOn("Task Updated");
        } else {// add new
            var data = {assigner:assigner, status:status, taskTitle:taskTitle, taskContent:taskContent};
            this.props.addDataStore(data); // sử dụng reducer trong store
            this.props.alertOn("Task Added!!");
        }
        this.props.changeEditStatus();
        
    }
    render() {
        return (
        <div className="col-4">
            <h3>Task Form :</h3>
            <form>
                <div className="form-group">
                    <label >Assigner :</label>
                    <input defaultValue = {this.props.editItem.assigner} onChange={(event) => this.isChange(event)} type="text" name = "assigner" id ={this.state.assigner} className="form-control" placeholder="Input assigner..." />
                    <small id="helpIdtaskTitle" className="form-text text-muted" />
                </div>
                <div className="form-group">
                    <label >Status :</label>
                    <input defaultValue = {this.props.editItem.status} onChange={(event) => this.isChange(event)} type="text" name = "status" id ={this.state.status} className="form-control" placeholder="Input status for task : Todo/InProgress/Review..." />
                    <small id="helpIdtaskTitle" className="form-text text-muted" />
                </div>
                <div className="form-group">
                    <label >Task Title :</label>
                    <input defaultValue = {this.props.editItem.taskTitle} onChange={(event) => this.isChange(event)} type="text" name = "taskTitle" id ={this.state.taskTitle} className="form-control" placeholder="Input task title..." />
                <small id="helpIdtaskTitle" className="form-text text-muted" />
                </div>
                <div className="form-group">
                    <label>Task Content :</label>
                    <textarea defaultValue = {this.props.editItem.taskContent} onChange={(event) => this.isChange(event)} type="text" name = "taskContent" id ={this.state.taskContent} className="form-control" placeholder="Input task content..."/>
                    <small id="helpIdtaskContent" className="form-text text-muted" />
                </div>
                <button type="reset" onClick={() => this.addData(this.state.assigner, this.state.status,this.state.taskTitle, this.state.taskContent)}  className="btn btn-primary btn-block">Save</button>
            </form>
        </div>
        );
    }
}

// => this.probs.testConn
const mapStateToProps = (state, ownProps) => {
    return {
        editItem:state.editItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type:"EDIT_DATA",getItem})
        },
        changeEditStatus: () => {
            dispatch({type : 'CHANGE_EDIT_STATUS'})
        },
        alertOn: (alertContent) => {
            dispatch({type : 'ALERT_ON',alertContent})
        },
        alertOff: () => {
            dispatch({type : 'ALERT_OFF'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);