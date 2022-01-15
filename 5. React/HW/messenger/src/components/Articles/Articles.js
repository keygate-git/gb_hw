import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/articles/actions';
import './Articles.css'

const Articles = () => {
    const storeData = useSelector((state) => state.articles);
    const dispatch = useDispatch();

    const requestData = async () => {
        dispatch(getData('https://randomfox.ca/floof/'));
    };

    useEffect(() => {
        if (storeData.status != 'pending' && storeData.status != 'success') {
            requestData();
        }
    }, []);

    return <><h3>Articles</h3>
        {storeData.status != 'pending' && storeData.status != 'success' && <div className='articlesContent'><p>Error: {storeData.status}</p>
            <button onClick={requestData}>Try again</button></div>}
        {storeData.status == 'pending' && <div className='articlesContent'><p>Waiting for new pic...</p><img src={storeData.data.image}></img></div>}
        {storeData.status == 'success' && <div className='articlesContent'><p>Success</p><img src={storeData.data.image}></img><button onClick={requestData}>Change pic</button></div>}</>
}

export default Articles;