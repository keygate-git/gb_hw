import './Message.css';

function Message(props) {

    return (

        props.messages.map((message) => < div className={message.author == 'Robot' ? 'robot' : 'author'} ><div className="messageBody"><p className="text">{message.text}</p><p className="from">{message.author}</p></div></div >)

    );
}

export default Message;