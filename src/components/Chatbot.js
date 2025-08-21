import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
  }
`;

const ChatToggle = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
`;

const ChatWindow = styled.div`
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 350px;
  height: 450px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  animation: ${fadeIn} 0.3s ease;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 400px;
    bottom: 60px;
  }
  
  @media (max-width: 480px) {
    width: calc(100vw - 30px);
    right: -15px;
  }
`;

const ChatHeader = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Message = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 12px;
  max-width: 80%;
  word-wrap: break-word;
  
  ${props => props.$isUser ? `
    background: #667eea;
    color: white;
    align-self: flex-end;
    margin-left: auto;
  ` : `
    background: #f1f5f9;
    color: #1e293b;
    align-self: flex-start;
  `}
`;

const ChatInput = styled.div`
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  outline: none;
  
  &:focus {
    border-color: #667eea;
  }
`;

const SendButton = styled.button`
  padding: 0.75rem;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  
  &:hover {
    background: #5a67d8;
  }
  
  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
  }
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm here to help you with your learning journey. Ask me about courses, labs, or any other questions!", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const predefinedResponses = {
    'courses': 'You can view all your enrolled courses in the Courses section. Track your progress and continue learning at your own pace.',
    'labs': 'Access your hands-on labs in the Labs section. These practical exercises help reinforce your learning.',
    'progress': 'Check your learning progress on the Dashboard. You can see completion rates for all your courses and labs.',
    'certificates': 'Your earned certificates are available in the Achievements section. Download them anytime!',
    'help': 'I can help you with: courses, labs, progress tracking, certificates, and general navigation questions.',
    'dashboard': 'The Dashboard shows your learning overview, active courses, labs, and progress statistics.',
    'achievements': 'Visit the Achievements page to view and download all your earned certificates.',
    'default': 'I can help you with courses, labs, progress tracking, certificates, and navigation. What would you like to know?'
  };

  const getResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (input.includes(key)) {
        return response;
      }
    }
    
    return predefinedResponses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = { text: input, isUser: true };
    const botResponse = { text: getResponse(input), isUser: false };
    
    setMessages(prev => [...prev, userMessage, botResponse]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <ChatbotContainer>
      <ChatToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMessageCircle />}
      </ChatToggle>
      
      <ChatWindow $isOpen={isOpen}>
        <ChatHeader>
          <h3>Learning Assistant</h3>
          <CloseButton onClick={() => setIsOpen(false)}>
            <FiX />
          </CloseButton>
        </ChatHeader>
        
        <ChatMessages>
          {messages.map((message, index) => (
            <Message key={index} $isUser={message.isUser}>
              {message.text}
            </Message>
          ))}
        </ChatMessages>
        
        <ChatInput>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
          />
          <SendButton onClick={handleSend} disabled={!input.trim()}>
            <FiSend />
          </SendButton>
        </ChatInput>
      </ChatWindow>
    </ChatbotContainer>
  );
};

export default Chatbot;