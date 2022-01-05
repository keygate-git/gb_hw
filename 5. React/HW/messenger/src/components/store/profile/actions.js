export const SHOW_NAME = 'SHOW_NAME';

export const showName = {
    type: SHOW_NAME,
};

export const CHANGE_NAME = 'CHANGE_NAME';

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name
});