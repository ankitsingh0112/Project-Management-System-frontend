import * as actionType from "./ActionType";

const initialState = {
    userSubscription: null,
    loading: false,
    error:null,
};

export const subscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_USER_SUBSCRIPTION_REQUEST:
        case actionType.UPGRADE_SUBSCRIPTION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case actionType.GET_USER_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                userSubscription:action.payload,
                loading: false,
                error: null,
            };
        
        case actionType.UPGRADE_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                userSubscription: action.payload,
                loading:false,
                error: null,
            };
        
        case actionType.GET_USER_SUBSCRIPTION_FAILURE:
        case actionType.UPGRADE_SUBSCRIPTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
    
        default:
            return state;
    }
}