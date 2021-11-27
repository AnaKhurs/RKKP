import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";
import React from 'react';

test("test reducer", () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState.collapsed).toBe(true)
})

test("reducer show error", () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    expect(() => {
        reducer(state, {type: "FAKE"})
    }).toThrowError()
})