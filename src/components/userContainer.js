import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (<h2>Loading</h2>) : userData.error ? (<h2>Error</h2>) : (<div>
        <h1>User container Redux</h1>
        <div>
            {console.log(userData.users, 'from userContainer')}
            {userData && userData.users && userData.users.map(user => {
                return <p>{user.name}</p>
                console.log(user, 'from paara')
            })}
        </div>
    </div>)
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)