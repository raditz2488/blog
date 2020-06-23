import React, { useReducer } from 'react';

const Context = React.createContext();

export default (reducer, actions, initialState) => {
    const [state, dispatch] = useReducer(reducer, initialState);
}