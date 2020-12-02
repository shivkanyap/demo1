import React from 'react';
import {connect} from 'react-redux'
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
// 
import _ from 'lodash'
import  Register from './Component/authentication/register'
import  Login from './Component/authentication/login'
import Logout from './Component/authentication/logout'
import Account from './Component/authentication/account'
import AddUser from './Component/formData/addUser'

class App extends React.Component{
  render()
  {
    return(
      <BrowserRouter>
        <div>
          <h1>Admision register</h1>
          <div>
            <nav>
          <ul>
              {_.isEmpty(this.props.user)?(
                <div>
                  <li><Link to="/users/register">Register</Link></li>
                  <li><Link to="/users/login">Login</Link></li>
                 </div> 
              ):(
                <div>
                    
                    
                        <li><Link to="/users/account">Account</Link></li>
                        <li><Link to="/users/logout">Logout</Link></li>
                        {/* <li><Link to="/students">Users</Link></li> */}

                   

                </div>
               
              
              )}
          </ul>
          </nav>
          </div>
        <Switch>
        <Route path="/users/register" component={Register} exact/>
        <Route path="/users/login" component={Login} exact/>
        <Route path="/users/account" component={Account} exact/>
        <Route path="/users/logout" component={Logout} exact/>
        {/* <Route path="/students" component={AddUser}/> */}
        </Switch>
                
        </div>
      </BrowserRouter>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
      user:state.user
  } 
}
export default connect(mapStateToProps)(App)
// class App extends React.Component{

//   constructor(props){
//     super(props)
//     this.state={
//       isAuthenticated:false
//     }
//   }
//   componentDidMount()
//   {
//     if(localStorage.getItem('userAuthToken'))
//     {
//       this.setState({isAuthenticated:true})
//     }
//   }
//   handleAuth=(bool)=>{
//     this.setState({isAuthenticated:bool})
//   }

//   render(){
//     return(
//       <BrowserRouter>
//       <div>
//         <h2>Register </h2>

//         <ul>
//           {this.state.isAuthenticated && (
//             <div>
//               <li><Link to='/users/account'>Register</Link></li>
//               <li><Link to='/users/logout'>Logon</Link></li>
//               {/* <Link to ="/notes">List Notes</Link><br/> */}
       
//             </div>
//           )}
//           {!this.state.isAuthenticated && (
//             <div>
//                <li><Link to="/users/register">Register</Link><br/></li>
//                <li><Link to="/users/login">Login</Link><br/></li>
//             </div>
//           )}
//         </ul>

        
        

//           <Switch>
//         {/* <logged in router */}
//         {this.state.isAuthenticated &&(
//         <div>
//            <Route path="/logout" render={(props)=>{
//           return <UsersLogout {...props} handleAuth={this.handleAuth}/>
//         }}/>
//         <Route path="users//account" component={UsersAccount}/>
//         </div>
//         )}
//         {/* logged out routes */}
//         {!this.state.isAuthenticated && (
//           <div>
//              <Route path="/users/register" component={UsersRegister} exact={true}/>
//             <Route path="/users/login" render={(props)=>{
//               return <UsersLogin {...props } handleAuth={this.handleAuth}/>
//         }} exact={true}/>
//           </div>
//         )}
//         <Route render={()=>{
//           return <p>the page your are doesn't exits</p>
//         }}/>
       





//         {/* <Route path="/register" component={NotesList} exact={true}/> */}
//         {/* <Route path="/notes/:id" component={NotesShow}/> */}
        
        
     
      
//         {/* </div> */}

       

//         </Switch>
//         </div>
//         </BrowserRouter>
      
     
//     )
//   } 
// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }


