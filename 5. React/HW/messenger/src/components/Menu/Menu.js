import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (<header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/profile/'>Profile</NavLink>
        <NavLink to='/chats/'>Chats</NavLink>
    </header>)
}

export default Menu;