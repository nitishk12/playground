import axios from 'axios'

export const setUsers = (users) => {
    return {
        type: "SET_USERS",
        payload: users
    }
}

export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('http://localhost:3031/users')
            .then(response => {
                dispatch(setUsers(response.data))
            })
            .catch(err => alert(err))
    }
}

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export const startAddUser = (formData) => {
    return (dispatch) => {
        axios.post('http://localhost:3031/users', formData)
            .then(response => {
                dispatch(addUser(response.data))
            })
    }
}

export const editUser = (id, user) => {
    return {
        type: 'EDIT_USER',
        payload: {
            id, user
        }
    }
}

export const startEditUser = (id, formData, redirect) => {
    return (dispatch) => {
        axios.put(`http://localhost:3031/users/${id}`, formData)
            .then(response => {
                redirect && redirect()
                dispatch(editUser(id, response.data))
            })
    }
}

export const removeUser = (id) => {
    return {
        type: "REMOVE_USER",
        payload: id
    }
}

export const startRemoveUser = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3031/users/${id}`)
            .then(response => {
                dispatch(removeUser(id, response.data))
            })
    }
}