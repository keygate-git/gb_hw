import { NavLink } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (<header className='header'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/profile/'>Profile</NavLink>
        <NavLink to='/chats/'>Chats</NavLink>
    </header>)
}

export default Menu;