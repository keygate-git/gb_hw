import './App.css';
import './css/style.css'
import { useEffect, useState } from 'react';
import Message from './components/Message/Message';
import Form from './components/Form/Form';
import ChatList from './components/ChatList/ChatList';
import List from '@mui/material/List';



function App() {
  const [messageList, setMessageList] = useState(
    []
  );

  const chatList = [{
    title: 'chat 1',
    key: Date.now()
  },
  {
    title: 'chat 2',
    key: Date.now()
  }];

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.input.value != '') {
      setMessageList([...messageList, { author: 'Author', text: event.target.input.value, key: Date.now() }]);
      event.target.input.value = '';
    }
  };

  useEffect(() => {
    if (messageList.length != 0 && messageList[messageList.length - 1].author != 'Robot') {
      setTimeout(() => { setMessageList([...messageList, { author: 'Robot', text: 'Thank you for your message', key: Date.now() }]) }, 2000);
    };
  }, [messageList]);




  return (
    <div className="App">
      <div className="chatList">
        <List>
          <ChatList chatList={chatList} />
        </List>
      </div>
      <div className="messenger">
        <div className="messageField">
          <Message messages={messageList} />
        </div>
        <Form onSubmit={handleChange} />
      </div>
    </div>
  );
}

export default App;
