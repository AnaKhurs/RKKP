export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export const reducer = (state: StateType, action: ActionType): StateType => {
    if (action.type === TOGGLE_COLLAPSED) {
        return {...state, collapsed: !state.collapsed}
    }
    return state
}