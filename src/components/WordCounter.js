import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.length > 0 ? words.length : 0;
  };

  return (
    <div className="container">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="6"
        cols="50"
        placeholder="Enter text here..."
        value={text}
        onChange={handleTextChange}
      />
      {text && <p>Word Count: {countWords()}</p>}
    </div>
  );
}

export default WordCounter;
