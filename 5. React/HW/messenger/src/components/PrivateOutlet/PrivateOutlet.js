import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateOutlet = () => {
    const storeData = useSelector((state) => (state.profile));
    return storeData.isAuthed ? <Outlet /> : <Navigate to="/" replace />
}