import React, { useState } from 'react';

const URLAnalyzer = () => {
  const [url, setUrl] = useState('');
  const [prompt, setPrompt] = useState('');

  const generatePrompt = (url) => {
    return `Please visit this Airbnb/VRBO listing: ${url}
    
    Analyze the following information:
    1. Base nightly rate
    2. Total cost breakdown including:
       - Cleaning fees
       - Service fees
       - Taxes
    3. Total price for the stay
    4. Any seasonal pricing patterns visible
    5. Special offers or discounts
    6. Minimum stay requirements
    7. Cancellation policy
    
    Please format the response as a structured analysis with these sections:
    - Price Breakdown
    - Total Cost
    - Special Conditions
    - Recommendations`;
  };

  const handleSubmit = () => {
    const claudePrompt = generatePrompt(url);
    setPrompt(claudePrompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    alert('Prompt copied to clipboard!');
  };

  return (
    <div className="url-analyzer">
      <div className="input-section">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste Airbnb or VRBO URL here"
          className="url-input"
        />
        <button onClick={handleSubmit} className="analyze-button">
          Generate Prompt
        </button>
      </div>
      
      {prompt && (
        <div className="prompt-section">
          <h3>Generated Prompt for Claude:</h3>
          <pre className="prompt-display">{prompt}</pre>
          <button onClick={copyToClipboard} className="copy-button">
            Copy Prompt
          </button>
        </div>
      )}
    </div>
  );
};

export default URLAnalyzer;