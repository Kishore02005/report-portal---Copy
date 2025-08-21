import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from '@emailjs/browser';
import UserNavbar from '../components/UserNavbar';
import Chatbot from '../components/Chatbot';
import { FiMail, FiPhone, FiMapPin, FiSend, FiHelpCircle, FiChevronDown, FiChevronUp, FiCheck, FiX } from 'react-icons/fi';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(240, 147, 251, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem 1.5rem;
  padding-top: 6rem;
  min-height: 100vh;
  animation: ${fadeIn} 0.8s ease-out;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 2rem 1rem;
    padding-top: 5rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    color: #ffffff;
    margin-bottom: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    
    @media (max-width: 768px) {
      font-size: 2rem;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  h2 {
    color: #1e293b;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e2e8f0;
    transform: translateX(4px);
  }
  
  svg {
    color: #667eea;
    font-size: 1.25rem;
    flex-shrink: 0;
  }
  
  div {
    h3 {
      margin: 0 0 0.25rem 0;
      color: #1e293b;
      font-size: 1rem;
      font-weight: 600;
    }
    
    p {
      margin: 0;
      color: #64748b;
      font-size: 0.9rem;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    color: #1e293b;
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  
  ${props => props.$type === 'success' ? `
    background: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
  ` : `
    background: #fef2f2;
    color: #dc2626;
    border: 1px solid #fecaca;
  `}
`;

const FAQSection = styled.div`
  margin-top: 3rem;
  
  h2 {
    text-align: center;
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.25rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #1e293b;
  font-size: 1rem;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.05);
  }
  
  svg {
    color: #667eea;
    transition: transform 0.2s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

const FAQAnswer = styled.div`
  padding: ${props => props.$isOpen ? '0 1.25rem 1.25rem 1.25rem' : '0'};
  max-height: ${props => props.$isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  color: #64748b;
  line-height: 1.6;
`;

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const faqs = [
    {
      question: "How do I access my courses?",
      answer: "You can access all your enrolled courses from the Courses section in the navigation menu. Your progress is automatically saved as you complete lessons."
    },
    {
      question: "Where can I find my certificates?",
      answer: "All your earned certificates are available in the Achievements section. You can view and download them anytime."
    },
    {
      question: "How do I track my learning progress?",
      answer: "Your learning progress is displayed on the Dashboard. You can see completion percentages for all your active courses and labs."
    },
    {
      question: "What are HI Labs?",
      answer: "HI Labs are hands-on learning experiences that provide practical skills development. You can access them from the Labs section."
    },
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking 'Forgot Password' on the login page. You'll receive an email with reset instructions."
    },
    {
      question: "Who can I contact for technical support?",
      answer: "For technical support, please email us at support@aaruchudar.com or use the contact form on this page."
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration - Replace with your actual values
      const result = await emailjs.send(
        'service_aaruchudar', // Replace with your EmailJS service ID
        'template_contact', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'your-email@example.com' // Replace with your actual email
        },
        'your_public_key' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <PageContainer>
      <UserNavbar />
      <ContentWrapper>
        <Header>
          <h1>
            <FiMail />
            Contact Us
          </h1>
          <p>
            Have questions or need support? We're here to help you on your learning journey.
          </p>
        </Header>

        <ContentGrid>
          <ContactCard>
            <h2>Get in Touch</h2>
            <ContactInfo>
              <ContactItem>
                <FiMail />
                <div>
                  <h3>Email Support</h3>
                  <p>support@aaruchudar.com</p>
                </div>
              </ContactItem>
              <ContactItem>
                <FiPhone />
                <div>
                  <h3>Phone Support</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </ContactItem>
              <ContactItem>
                <FiMapPin />
                <div>
                  <h3>Office Address</h3>
                  <p>123 Learning Street, Education City, EC 12345</p>
                </div>
              </ContactItem>
            </ContactInfo>
          </ContactCard>

          <ContactCard>
            <h2>Send us a Message</h2>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <label>Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label>Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label>Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label>Message</label>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              {submitStatus && (
                <StatusMessage $type={submitStatus}>
                  {submitStatus === 'success' ? <FiCheck /> : <FiX />}
                  {submitStatus === 'success' 
                    ? 'Message sent successfully! We\'ll get back to you soon.' 
                    : 'Failed to send message. Please try again or email us directly.'}
                </StatusMessage>
              )}
              <SubmitButton type="submit" disabled={isSubmitting}>
                <FiSend />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </ContactForm>
          </ContactCard>
        </ContentGrid>

        <FAQSection>
          <h2>
            <FiHelpCircle style={{ marginRight: '0.5rem' }} />
            Frequently Asked Questions
          </h2>
          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion
                  onClick={() => toggleFAQ(index)}
                  $isOpen={openFAQ === index}
                >
                  {faq.question}
                  {openFAQ === index ? <FiChevronUp /> : <FiChevronDown />}
                </FAQQuestion>
                <FAQAnswer $isOpen={openFAQ === index}>
                  {faq.answer}
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQList>
        </FAQSection>
      </ContentWrapper>
      <Chatbot />
    </PageContainer>
  );
};

export default ContactUsPage;