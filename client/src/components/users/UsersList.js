import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UserForm from './UserForm'
import { startAddUser, startRemoveUser } from '../../actions/users'


function UsersList(props) {

    const handleSubmit = (formData) => {
        props.dispatch(startAddUser(formData))
    }

    const handleRemove = (id) => {
        props.dispatch(startRemoveUser(id))
    }



    return (
        <div>
            <h2>Users - {props.users.length}</h2>
            <ul>
                {props.users.map(user => {
                    return <li key={user._id}>{user.name}
                        <button onClick={() => {
                            handleRemove(user._id)
                        }}>remove</button>
                        <Link to={`/users/${user._id}`} ><button>Show user</button></Link></li>
                })}
            </ul>
            <h1> Add User</h1>
            <UserForm handleSubmit={handleSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UsersList)