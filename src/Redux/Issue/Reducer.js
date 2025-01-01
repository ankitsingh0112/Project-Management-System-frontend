import * as actionType from "./ActionType";


const initialState = {
    issues: [],
    loading: false,
    error: null,
    issueDetails:null,
};

export const issueReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_ISSUES_REQUEST:
        case actionType.CREATE_ISSUES_REQUEST:
        case actionType.DELETE_ISSUES_REQUEST:
        case actionType.FETCH_ISSUES_BY_ID_REQUEST:
        case actionType.ASSIGNED_ISSUES_TO_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        
        case actionType.FETCH_ISSUES_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: action.issues,
            };
        
        case actionType.FETCH_ISSUES_BY_ID_SUCCESS:
        case actionType.UPDATE_ISSUES_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                issueDetails: action.issues,
            };

        case actionType.CREATE_ISSUES_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: [...state.issues, action.issues],
            };

        case actionType.ASSIGNED_ISSUES_TO_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                issues : state.issues.map((issue) => issue.id === action.issues.id ? action.issues : issue),
            };

        case actionType.DELETE_ISSUES_SUCCESS:
            return {
                ...state,
                loading:false,
                issues: state.issues.filter((issue) => issue.id !== action.issueId),
            };

        case actionType.FETCH_ISSUES_FAILURE:
        case actionType.CREATE_ISSUES_FAILURE:
        case actionType.DELETE_ISSUES_FAILURE:
        case actionType.ASSIGNED_ISSUES_TO_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
            
        default:
            return state;
    }
}

export default issueReducer;