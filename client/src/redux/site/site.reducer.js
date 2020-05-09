import { SiteActionTypes } from './site.types';

const initialState = {
    sidebarOpen: false,
};

const siteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SiteActionTypes.TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: !state.sidebarOpen
            };
        default:
            return state;
    }
}

export default siteReducer;