import { useDispatch, useSelector } from 'react-redux';
import { showName, changeName } from '../store/profile/actions';
import Form from '../Form/Form';

const Profile = () => {
    const storeData = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(showName);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(changeName({ name: event.target.input.value }));
        event.target.input.value = '';
    };

    return (<><h3>Profile</h3>
        <input type='checkbox' checked={storeData.showName} onChange={handleChange} />
        {storeData.showName && <span>{storeData.name}</span>}
        <Form className="profile-form" onSubmit={handleSubmit} /></>)
}

export default Profile;