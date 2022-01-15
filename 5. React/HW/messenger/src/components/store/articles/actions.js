export const API_REQUEST = 'API::API_REQUEST';
export const API_SUCCESS = 'API::API_SUCCESS';
export const API_FAILURE = 'API::API_FAILURE';

export const apiRequest = () => ({
    type: API_REQUEST,
});

export const apiSuccess = (data) => ({
    type: API_SUCCESS,
    payload: data
});

export const apiFailure = (err) => ({
    type: API_FAILURE,
    payload: err,
});

export const getData = (api) => async (dispatch) => {
    dispatch(apiRequest());

    try {
        const response = await fetch(api);
        if (!response.ok) {
            throw new Error("Request error" + response.status);
        }
        const result = await response.json();

        dispatch(apiSuccess(result));
    }
    catch (e) {
        dispatch(apiFailure(e.message))
    }
}