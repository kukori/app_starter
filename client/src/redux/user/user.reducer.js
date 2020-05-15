import { UserActionTypes } from './user.types';

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    shelfTags: null,
    user: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case UserActionTypes.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload.email
            };
        case UserActionTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload.email
            };
        case UserActionTypes.PASSWORD_CHANGE_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false
            };
        case UserActionTypes.AUTH_ERROR:
        case UserActionTypes.LOGIN_FAIL:
        case UserActionTypes.LOGOUT_SUCCESS:
        case UserActionTypes.TOKEN_EXPIRED:
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        default:
            return state;
    }
}

export default userReducer;