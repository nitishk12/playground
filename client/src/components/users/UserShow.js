import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function UserShow(props) {
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>city</th>
                        <th>zipcode</th>
                        <th>company</th>
                        <th>website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.user.name}</td>
                        <td>{props.user.email}</td>
                        <td>{props.user.mobile}</td>
                        <td>{props.user.city}</td>
                        <td>{props.user.zipcode}</td>
                        <td>{props.user.company}</td>
                        <td>{props.user.website}</td>
                    </tr>
                </tbody>
            </table>
            <Link to={`/users/edit/${props.match.params.user}`} >edit user</Link>
            <Link to='/users'>back</Link>
        </div>

    )
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(usr => usr._id == props.match.params.user)
    }
}

export default connect(mapStateToProps)(UserShow)