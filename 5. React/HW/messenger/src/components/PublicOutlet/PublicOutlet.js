import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicOutlet = () => {
    const storeData = useSelector((state) => (state.profile));
    return !storeData.isAuthed ? <Outlet /> : <Navigate to="/profile" replace />
}