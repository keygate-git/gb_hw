import '../Profile/Profile.css'
import { authUser } from '../store/profile/actions';
import { useDispatch } from 'react-redux';

const Main = () => {
    const dispatch = useDispatch();
    const handleAuth = () => {
        dispatch(authUser);
    }

    return <><h3>Main</h3><button className='logbutton' onClick={handleAuth}>Log In</button></>
}

export default Main;