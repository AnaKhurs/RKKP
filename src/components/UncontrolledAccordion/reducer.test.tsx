import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";
import React from 'react';

test("test reducer", () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state,{type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(false)
})