import React from 'react'
import axios from 'axios'
import FormData from './form'

class AddUser extends React.Component
{
    constructor()
    {
        super()
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(formData)
    {
        axios.post('http://localhost:3005/students',formData)
        .then(response=>{
            if(response.data.hasOwnProperty('errors'))
            {
                console.log(response.data.errors)
            }
            else{
                this.props.histroy.push(`/students`)
            }
        })
    }
    render()
    {
        return(
            <div>
                <h2>Welcome For Registration</h2>
                <FormData handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
export default AddUser