// import React from 'react'
import axios from 'axios';

import React from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
// import { setUser } from '../../action/a-users'
// import FormData from '../formData/form'
import AddUser from '../formData/addUser' 

class Account extends React.Component {

    // componentDidMount() {
    //     axios.get('http://localhost:3005/users/account', {
    //         headers: {
    //             'x-auth': localStorage.getItem('userAuthToken')
    //         }
    //     })
    //         .then(response => {
    //             console.log(response.data)
    //             const user = response.data
    //             this.props.dispatch(setUser(user))
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>User Account</h2>
                <p>{this.props.user.username}</p>
                <AddUser/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default   connect(mapStateToProps)(Account)


// class UsersAccount extends React.Component{
//     constructor(){
//     super()
//     this.state={
//         email:'',
//         password:''
//     }
//     this.handleInput=this.handleInput.bind(this)
//     this.handleSubmit=this.handleSubmit.bind(this)
// }
// handleInput(e){
//     e.persist()
//     this.setState(()=>({
//         [e.target.name]:e.target.value
//     }))
// }
// handleSubmit(e){
//     e.preventDefault()
//     const formData={
//         email:this.state.email,
//         password:this.state.password
//     }
//     console.log(formData)
//     axios.post(`http://localhost:3005/users/login`,formData)
//     .then(response=>{
//         console.log(response.data)
//         if(response.data.errors){
//             alert(response.data.errors)
//         }else{
//             const token=response.data.token
//             localStorage.setItem('userAuthToken',token)
//             this.props.handleAuth(true)
//             this.props.history.push('/users/account') 
//         }
//     })

// }
// render(){
//     return(
//         <form onSubmit={this.handleSubmit}>

//             <label>Email:
//             <input type="text" value={this.state.value}
//                  onChange={this.handleInput} name="email"/>
//             </label><br/><br/>

            
//             <label>Password:
//             <input type="text" value={this.state.value}
//                  onChange={this.handleInput} name="password"/>
//             </label><br/><br/>  

//             <input type="submit"/>   
//         </form>
//     )
// }
// }

// export default UsersAccount