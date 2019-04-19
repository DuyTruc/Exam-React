import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBV7KWZI_IjVZSqgFkeuuVodiDhdkYNc78",
  authDomain: "datafortask.firebaseapp.com",
  databaseURL: "https://datafortask.firebaseio.com",
  projectId: "datafortask",
  storageBucket: "datafortask.appspot.com",
  messagingSenderId: "812134041774"
};
  firebase.initializeApp(config);
  export const taskData = firebase.database().ref('dataForTask');
//   var data = firebase.database().ref('dataForNote/note2');
//   //sua du lieu
//   data.set({
//       id : 10,
//       title:"trucln2 update",
//       content : "demo content for note1"

//   });

    // data.once('value').then(function(snapshot){
    //     console.log(snapshot.val());
    // })

  