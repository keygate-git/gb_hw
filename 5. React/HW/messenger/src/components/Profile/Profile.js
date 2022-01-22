import { useSelector, useDispatch } from 'react-redux';
import { initUserData, setLogOut, setShow, setName } from '../store/profile/actions';
import Form from '../Form/Form';
import './Profile.css'
import { useEffect } from 'react';

const Profile = () => {
    const storeData = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initUserData(storeData.userId));
    }, []);

    const handleChange = () => {
        dispatch(setShow(storeData.userId, !storeData.showName));
    }

    const handleLogOut = () => {
        dispatch(setLogOut());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.input.value != '') {
            dispatch(setName(storeData.userId, event.target.input.value));
            event.target.input.value = '';
        };
    };

    return (<><h3>Profile</h3>
        <input type='checkbox' checked={storeData.showName} onChange={handleChange} />
        {storeData.showName && <span>{storeData.name}</span>}
        <Form className="profile-form" onSubmit={handleSubmit} />
        <button className='logbutton' onClick={handleLogOut}>Log Out</button></>)
}

export default Profile;