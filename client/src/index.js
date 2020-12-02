import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'

import {Provider} from 'react-redux'
import {setUser} from './action/a-users'
// import {setStudent} from './action/a-students'

import configureStore from './store/configstore'
const store = configureStore();

store.subscribe(() => {
  console.log("redux store state", store.getState());
});

if (localStorage.getItem("userAuthToken")) {
  axios
    .get(`http://localhost:3005/users/account`, {
      headers: {
        "x-auth": localStorage.getItem("userAuthToken")
      }
    })
    .then(response => {
      store.dispatch(setUser(response.data));
    });


//     axios
//     .get('http://localhost:3005/students', {
//       headers: {
//         "x-auth":localStorage.getItem("userAuthToken")
//       }
//     })
//     .then(response => {
//       console.log(response);
//       const student = response.data;
//       store.dispatch(setStudent(student));
//     });

// }
  }

const jsx=(
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  
    jsx
 ,
  document.getElementById('root')
);


