export const SHOW_NAME = 'PROFILE::SHOW_NAME';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';

export const showName = {
    type: SHOW_NAME,
};

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name
});