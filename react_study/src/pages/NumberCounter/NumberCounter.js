/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'

const Container =css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 50px auto;
    border: 3px solid  green;
    width: 400px;
    height: 400px;
`;

const BoxContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    border: 3px solid green;
    width: 80%;
    height: 80%;

`;

const increaseFunction = (state) => {
    state.number++;
    return state;
}

const decreaseFunction = (state) => {
    state.number--;
    return state;
}



const reducer = (currentState, action) => {
    if(currentState === undefined){
        return {
            number: 10
        }
    }

    let newState = {...currentState};
    /**
     * switch(actiom.type){
     *      case 'increase' :
     *          newState.number++;
     *          break;
     *      case 'decrease' :
     *          newState.number--;
     *          break;
     *      default: break;
     * }
     */


    if(action.type === 'increase'){
        newState = increaseFunction(newState);
    }else if(action.type ==='decrease') {
        newState = decreaseFunction(newState);
    }

    return newState
}


const store = configureStore({reducer});


const Box = ({ title, children }) => {
    const count = useSelector(store => store.number);
    return (
        <div css={BoxContainer}>
            <h1>{title}</h1>
            <h2>count: {count}</h2>
            {children}
        </div>
    )
}

const Buttons = () => {
    const dispatch = useDispatch();

    const increaseCount = () => {
        dispatch({ type: 'increase'});
    }

    const decreaseCount = () => {
        dispatch({ type: 'decrease'});
    }


    return(
        <>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </>

    )

}

const NumberCounter = () => {

    // const[ count, setCount ] = useState(0);

    // const increaseCount = () => {
    //     setCount(count + 1);
    // }

    // const decreaseCount = () => {
    //     setCount(count - 1);
    // }
    return (
        <div css={Container}>
            <Provider store={store}>
                <Box title={'box1'} >
                    <Box title={'box2'} >
                        <Box title={'box3'} >
                            <Box title={'box4'} >
                                <Buttons  />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Provider>
            
        </div>
    );
};

export default NumberCounter;