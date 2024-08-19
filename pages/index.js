import { useState, useEffect } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  useEffect(() => {
    console.log('LINE_CLIENT_ID:', process.env.LINE_CLIENT_ID);
  }, []);

  const handleSubmit = () => {
    setSubmittedText(text);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hello２</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleSubmit}>Submit</button>
      {submittedText && (
        <p style={{ color: 'red' }}>{submittedText}</p>
      )}
      <br />
      <p>LINE_CLIENT_IDdddd: {process.env.LINE_CLIENT_ID}</p>
    </div>
  );
}
