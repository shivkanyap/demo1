
import React from 'react'
import axios from 'axios'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Field Required'),
    password: Yup.string()
        .min(6, 'Too short!')
        .max(12, 'Too long!')
        .required('Field Required'),

});

class Login extends React.Component {
    handleSubmit = (formData) => {
        axios.post('http://localhost:3005/users/login', formData)
            .then(response => {
                console.log(response.data)
                if (response.data.errors) {
                    alert(response.data.errors)
                } else {
                    const token = response.data.token
                    localStorage.setItem('userAuthToken', token)
                    this.props.history.push('/users/account')
                }
            })
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={this.handleSubmit}>
                    {({ errors, touched }) => (
                        <Form>
                            <label>
                                Email
                            <Field type="text" placeholder="Enter your Email" name="email" />
                                {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
                            </label><br /><br />

                            <label>
                                Password
                            <Field type="password" name="password" placeholder="*********" />
                                {errors.password && touched.password ? (<div>{errors.password}</div>) : null}
                            </label><br /><br />
                            <button type="submit">submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default Login
// import React from 'react'
// import axios from 'axios';


// class UsersLogin extends React.Component{
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

// export default UsersLogin