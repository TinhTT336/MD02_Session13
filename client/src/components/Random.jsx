import React from 'react'
import { act_random } from '../redux/actions/actionType'
import { useDispatch, useSelector } from 'react-redux'
import { random } from '../redux/useSlices/randomSlice';

export default function Random() {
    const dispatch = useDispatch();
    const listNumber = useSelector(number => number.random)
    // console.log(listNumber);
    const handleRandom = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        dispatch(random(randomNumber));
    }
    return (
        <div>
            <h2>List Number: {JSON.stringify(listNumber)}</h2>
            <button onClick={handleRandom}>Random</button>
        </div>
    )
}
