import './Message.css';

function Message(props) {
    return (
        <div className="Message">
            <h1>{props.text}</h1>
        </div>
    );
}

export default Message;