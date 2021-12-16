import './App.css';
import './css/style.css'
import { useEffect, useState } from 'react';
import Message from './components/Message/Message';

function App() {
  const [messageList, setMessageList] = useState(
    []
  );

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.input.value != '') {
      setMessageList([...messageList, { author: 'Author', text: event.target.input.value }]);
      event.target.input.value = '';
    }
  };

  useEffect(() => {
    if (messageList.length != 0 && messageList[messageList.length - 1].author != 'Robot') {
      setTimeout(() => { setMessageList([...messageList, { author: 'Robot', text: 'Thank you for your message' }]) }, 2000);
    }
  }, [messageList]);


  return (
    <div className="App">
      <div className="messenger">
        <div className="messageField">
          <Message messages={messageList} />
        </div>
        <form className="form" onSubmit={handleChange}>
          <textarea id='input' type='text'></textarea>
          <div className="buttonArea">
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
