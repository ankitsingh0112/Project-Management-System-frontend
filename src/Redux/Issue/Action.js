import api from "@/config/api";
import * as actionType from "./ActionType";

export const createIssue = (issueData) => {
    return async (dispatch) => {
        dispatch({type: actionType.CREATE_ISSUES_REQUEST});
        try {
            const response = await api.post("/api/issues", issueData);
            dispatch({
                type: actionType.CREATE_ISSUES_SUCCESS,
                issues: response.data,
            });
            console.log("issue created successfully ", response.data)
        } catch (error) {
            dispatch({
                type: actionType.CREATE_ISSUES_FAILURE,
                error: error.message,
            });
        }
    };
};

export const deleteIssue = (issueId) => {
    return async (dispatch) => {
        dispatch({type: actionType.DELETE_ISSUES_REQUEST});
        try {
            await api.delete(`/api/issues/${issueId}`);
            dispatch({
                type: actionType.DELETE_ISSUES_SUCCESS, issueId
            });
        } catch (error) {
            dispatch({
                type: actionType.DELETE_ISSUES_FAILURE,
                error: error.message,
            });
        }
    };
};

export const fetchIssues = (id) => {
    return async (dispatch) => {
        dispatch({type: actionType.FETCH_ISSUES_REQUEST});
        try {
            const response = await api.get(`/api/issues/project/${id}`);
            console.log("fetch issues ", response.data);
            dispatch({
                type: actionType.FETCH_ISSUES_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionType.FETCH_ISSUES_FAILURE,
                error: error.message,
            });
        }
    };
};

export const fetchIssueById = (id) => {
    return async (dispatch) => {
        dispatch({type: actionType.FETCH_ISSUES_BY_ID_REQUEST});
        try {
            const response = await api.get(`/api/issues/${id}`);
            console.log("fetch issue by id ", response.data);
            dispatch({
                type: actionType.FETCH_ISSUES_BY_ID_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionType.FETCH_ISSUES_BY_ID_FAILURE,
                error: error.message,
            });
        }
    };
};

export const updateIssueStatus = ({id, status}) => {
    return async (dispatch) => {
        dispatch({type: actionType.UPDATE_ISSUES_STATUS_REQUEST});
        try {
            const response = await api.put(`/api/issues/${id}/status/${status}`);
            console.log("update issue status ", response.data);
            dispatch({
                type: actionType.UPDATE_ISSUES_STATUS_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionType.UPDATE_ISSUES_STATUS_FAILURE,
                error: error.message,
            });
        }
    };
};

export const assignedUserToIssue = ({issueId, userId}) => {
    return async (dispatch) => {
        dispatch({type: actionType.ASSIGNED_ISSUES_TO_USER_REQUEST});
        try {
            const response = await api.put(`/api/issues/${issueId}/assignee/${userId}`);
            console.log("assigned issues ", response.data);
            dispatch({
                type: actionType.ASSIGNED_ISSUES_TO_USER_SUCCESS,
                issues: response.data,
            });
        } catch (error) {
            dispatch({
                type: actionType.ASSIGNED_ISSUES_TO_USER_FAILURE,
                error: error.message,
            });
        }
    };
};