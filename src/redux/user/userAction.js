import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes'
import axios from 'axios'


export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res, "form acios")
                const users = res.data.map(user => user)
                dispatch(fetchUsersSuccess(users))
            }).catch(error => {
                dispatch(fetchUsersFailure(error.message))
            })
    }
}
// export default {
//     fetchUsersRequest,
//     fetchUsersSuccess,
//     fetchUsersFailure
// }