import React from 'react';
import { connect } from "react-redux"
import { buyCake } from '../redux';

const cakeContainer = (props) => {
    return (
        <>
            <h2>cakeContainer - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>buy Cake</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);