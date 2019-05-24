import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {taskData} from '../dao/firebaseConnect';

class TaskList extends Component {
   constructor(props) {
     super(props);
     this.state = {
      dataFirebase : []
     }
   }
   
    componentWillMount() {
      //get data from firebase and add to State
      taskData.on('value', (tasks) => {
        var arrayData = [];
        tasks.forEach(element => {
           const key = element.key;
           const assigner = element.val().assigner;
           const status = element.val().status;
           const taskTitle = element.val().taskTitle;
           const taskContent = element.val().taskContent;
           arrayData.push({
            key : key,
            assigner:assigner,
            status:status,
            taskTitle:taskTitle,
            taskContent:taskContent
           })

         });
         this.setState({
           dataFirebase:arrayData
         });
         
      })
    }
    
    getData = () => {
      if (this.state.dataFirebase) {
        return this.state.dataFirebase.map((value,key) => {
          if (value.status !== this.props.status) return null
          return (
            <TaskItem
            task = {value}
            key = {key}
            assigner = {value.assigner}
            status = {value.status}
            taskTitle = {value.taskTitle}
            taskContent = {value.taskContent}
            />
          )
        })
      }
    }

    render() {
        return (
        <div className="col">
          <div id="noteList" role="tablist" aria-multiselectable="true">
          {
            this.getData()
          }
          </div>
        </div>
        );
    }
}

export default TaskList;