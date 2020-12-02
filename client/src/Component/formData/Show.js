import  React from 'react'
import {Link } from 'react-router-dom'
import {connect} from "react-redux"

class StudentShow extends React.Component
{
    render()
    {
        return(
            <div>
                {this.props.student &&(
                    <div>
                        <h3>{this.props.student.name}</h3>
                        <p>me in account </p>
                    </div>
                )}
                <Link to="/students">back</Link>
                <br/>
                {/* <Link to={`/students/edit`} */}
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    return{
        student:state.students.find(student=>{
            return student._id===props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(StudentShow)