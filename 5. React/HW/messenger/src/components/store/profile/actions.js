import { auth, logOut, userRefName, userRefShow } from "../../../service/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, set } from "firebase/database";

export const SHOW_NAME = 'PROFILE::SHOW_NAME';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const SIGN_IN = 'PROFILE::SIGN_IN';
export const SIGN_OUT = 'PROFILE::SIGN_OUT';

export const showName = (show) => ({
    type: SHOW_NAME,
    payload: show
});

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name
});

export const signIn = (userId) => ({
    type: SIGN_IN,
    payload: userId
});

export const signOut = {
    type: SIGN_OUT,
};

export const initAuthTracking = () => (dispatch) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(signIn(user.uid));
        } else {
            dispatch(signOut);
        }
    });

};

export const initUserData = (userId) => (dispatch) => {
    onValue(userRefName(userId), (snapshot) => {
        const userDataName = snapshot?.val();
        dispatch(changeName(userDataName ? userDataName : 'new user'));
    });

    onValue(userRefShow(userId), (snapshot) => {
        const userDataShow = snapshot?.val();
        dispatch(showName(userDataShow === null ? true : userDataShow));
    });

}

export const setShow = (userId, showName) => () => {
    set(userRefShow(userId), showName);
}

export const setName = (userId, name) => () => {
    set(userRefName(userId), name);
}

export const setLogOut = () => () => {
    logOut();
}