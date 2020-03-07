const usersInitialState = []

const usersReducer = (state = usersInitialState, action) => {
    switch (action.type) {

        case 'SET_USERS': {
            return [...state, ...action.payload]
        }

        case 'ADD_USER': {
            return [...state, action.payload]
        }

        case 'REMOVE_USER': {
            return state.filter(user => user._id != action.payload)
        }

        case 'EDIT_USER': {
            return state.map(user => {
                if (user._id == action.payload.id) {
                    return { ...user, ...action.payload.user }
                } else {
                    return { ...user }
                }
            })
        }

        default: {
            return [...state]
        }
    }
}

export default usersReducer