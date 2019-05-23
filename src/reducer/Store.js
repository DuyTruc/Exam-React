import {taskData} from '../firebaseConnect';

var redux = require('redux');
const oldInitialState = {
    isEdit : true,
    editItem : {},
    AlertShow:false,
    AlertContent:''
}
const allReducer = (state = oldInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            // console.log("ket noi ok, bien nhan vao la :" + JSON.stringify(action.getItem));
            taskData.push(action.getItem);
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case "GET_EDIT_DATA":
            return {...state,editItem:action.editObject}
        case "EDIT_DATA":
            // update firebase
            console.log("Data to edit is : " + JSON.stringify(action.getItem));
            taskData.child(action.getItem.id).update({
                assigner : action.getItem.assigner,
                status : action.getItem.status,
                taskTitle : action.getItem.taskTitle,
                taskContent : action.getItem.taskContent
            })
            
            return {...state,editItem:{}}
        case "DELETE_DATA":
            taskData.child(action.deleteId).remove();
            return state
        case "ALERT_ON":
            return {...state,AlertShow:true,AlertContent:action.alertContent}
        case "ALERT_OFF":
            return {...state,AlertShow:false}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);

store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));

});
export default store;