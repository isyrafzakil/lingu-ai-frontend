import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userId, setUserId] = useState('user1');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [language, setLanguage] = useState('English');

  const handleSendMessage = async () => {
    try {
      const res = await axios.post('http://localhost:3000/conversation', {
        userId,
        message,
      });
      console.log("res.data: ", res.data.response)
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Error communicating with the server.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Language Learning Chatbot</h1>
      </header>
      <main>
        <div>
          <label>
            User ID:
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Language:
            <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
        </div>
        <button onClick={handleSendMessage}>Send Message</button>
        <div>
          <h2>Chatbot Response:</h2>
          <p>{response}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
