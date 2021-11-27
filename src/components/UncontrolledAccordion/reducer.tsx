export type ActionType = {
    type: string
}
export const reducer = (state: boolean, action: ActionType) => {
    if (action.type === "TOGGLE-COLLAPSED") {
        return !state
    }
    return state
}