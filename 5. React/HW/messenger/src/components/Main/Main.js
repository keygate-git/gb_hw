import '../Profile/Profile.css'
import { signIn } from '../store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signUp, logIn } from '../../service/firebase';

const Main = ({ isSignUp }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                await signUp(email, pass)
            } else {
                await logIn(email, pass)
            }
            setEmail('');
            setPass('');
        } catch (e) {
            setError(e.message);
        }

    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePass = (e) => {
        setPass(e.target.value);
    }

    return <>
        <h3>{isSignUp ? 'Sign Up' : 'Sign In'}</h3>

        <form onSubmit={handleClick}>
            <input type="email" value={email} onChange={onChangeEmail}></input>
            <input type="password" value={pass} onChange={onChangePass}></input>
            <button className='logbutton'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
        <p>{error}</p>
        <Link to={isSignUp ? '/' : '/signup'}>{!isSignUp ? 'Sign Up' : 'Sign In'}</Link>
    </>
}

export default Main;