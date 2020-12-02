import React from 'react';
import axios from 'axios'

class FormData extends React.Component{
    constructor()
    {
        super()
        this.state={
            name:' ',
            email:'',
            parentname:' ',
            Address:' ',
            Mobile:' ',
            course:'',
            Gender:'',
            notice:' ',
            Rollno:0,
            status:'pending'

        }
    }
    handleChange=(e)=>{
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            parentname:this.state.parentname,
            Address:this.state.Address,
            Mobile:this.state.Mobile,
            course:this.state.course,
            Gender:this.state.Gender,
            status:this.state.status,
            Rollno:this.state.Rollno


        }
        this.props.handleSubmit(formData)
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                    </label><br/>
                    <label>email
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email"/>
                    </label>
                    <br/>
                    <label>
                        Parent Name
                        <input type="text" value={this.state.parentname} onChange={this.handleChange} name="parentname"/>

                    </label><br/><br/>
                    <label>
                            address
                        <textarea id="area" rows="5" cols="50" name="Address" onChange={this.handleChange}></textarea>
                    </label><br/>
                    <label>Mobile
                    <input type="text" value={this.state.Mobile} onChange={this.handleChange} name="Mobile"/>
                    </label><br/>


                    <label>
                        Gender
                        <div onChange={this.handleChange}>
                        <input type="radio" id="male"  name="Gender" value="male"></input>
                        <label >Male</label>
                        <input type="radio" id="female" name="Gender" value="female"></input>
                        <label>Female</label>
                        </div>
                    </label><br/>
                    <label>
                        Courses
                        <select name="course" id="course" onChange={this.handleChange}>
                            <option value="Cs">Cs</option>
                            <option value="Ece">Ece</option>
                            <option value="Me">Me</option>
                            <option value="EE">EE</option>
                        </select>
                    </label>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default FormData