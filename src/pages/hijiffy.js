import React  from "react"
import ChatBot from 'react-simple-chatbot';
 
const steps = [
    {
      id: '1',
      message: 'Hey HiJiffy team! Hope that you are well rested after your holidays',
      trigger: '3',
    },
      {
        id: '3',
        message: 'I am here to let you know more about me and clear any doubts you might have.',
        trigger: '4',
      },
    {
      id: '4',
      options: [
        { value: 1, label: 'Tell me more about yourself', trigger: '6' },
        { value: 2, label: 'What others say about working with you', trigger: '5' },
        { value: 3, label: 'Schedule check-in', trigger: '5' },
      ],
    },
    {
      id: '5',
      message: 'Wrong answer, try again.',
      trigger: '3',
    },
    {
      id: '6',
      message: 'Awesome! You are a telepath!',
      end: true,
    },
  ]
 


const AboutPage = ({ data }) => { 
  
  
    return (
    <>
  
        
  <ChatBot steps={steps} />
    
    </>
    )
  }
  

  
  export default AboutPage