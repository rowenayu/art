import { TOGGLE_SIDEBAR } from "./actions";

const reducer = (state, action) => {
    if (action.type === TOGGLE_SIDEBAR) {
        return { ...state, showSidebar: !state.showSidebar };
    }
    throw new Error(`no such action : ${action.type}`);
}

export default reducer;