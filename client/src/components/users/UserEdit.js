import React from 'react'
import { connect } from 'react-redux'
import UserForm from './UserForm'
import { startEditUser } from '../../actions/users'

function UserEdit(props) {
    const handleSubmit = (formData) => {
        const redirect = () => props.history.push(`/users/${props.match.params.user}`)
        props.dispatch(startEditUser(props.match.params.user, formData, redirect))
    }
    return (
        <div>
            <h1>Edit User</h1><br />
            <UserForm handleSubmit={handleSubmit} user={props.match.params.user} />
        </div>
    )
}
export default connect()(UserEdit)