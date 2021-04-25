import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, buyCakeAdd } from '../redux';

const HookSCakeContainer = (props, state) => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <>
            <h2> no.of hooks cake Container - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCakeAdd())}>buy Cake</button>
        </>
    )
}

export default HookSCakeContainer