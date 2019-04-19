import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { connect } from 'react-redux';
import Footer from './components/Footer';
import AlertInfo from './components/AlertInfo';

class App extends Component {

  showForm = () => {
    if (this.props.isEdit) {
      return <TaskForm/>
    }
  }

  render() { 
    return (
      <div>
        <Nav/>
        <AlertInfo/>
        <div className="">
          <div className="row" >
            <TaskList status = "ToDo"/>
            <TaskList status = "InProgress"/>
            <TaskList status = "Review"/>
            {this.showForm()}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit : state.isEdit,
  }
}

export default connect(mapStateToProps)(App);