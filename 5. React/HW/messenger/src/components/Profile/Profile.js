import { useDispatch, useSelector } from 'react-redux';
import { showName, changeName, authUser } from '../store/profile/actions';
import Form from '../Form/Form';
import './Profile.css'

const Profile = () => {
    const storeData = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(showName);
    }

    const handleAuth = () => {
        dispatch(authUser);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(changeName({ name: event.target.input.value }));
        event.target.input.value = '';
    };

    return (<><h3>Profile</h3>
        <input type='checkbox' checked={storeData.showName} onChange={handleChange} />
        {storeData.showName && <span>{storeData.name}</span>}
        <Form className="profile-form" onSubmit={handleSubmit} />
        <button className='logbutton' onClick={handleAuth}>Log Out</button></>)
}

export default Profile;