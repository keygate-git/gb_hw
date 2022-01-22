import './Message.css';
import { useSelector } from 'react-redux';


function Message(props) {
    const storeData = useSelector((state) => state.profile);
    return (

        props.messages.map((message) => < div key={message.key} className={message.author == 'Robot' ? 'robot' : 'author'} ><div className="messageBody"><p className="text">{message.text}</p><p className="from">{message.author == 'Robot' ? 'Robot' : storeData.name}</p></div></div >)

    );
}

export default Message;