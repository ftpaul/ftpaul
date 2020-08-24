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
        { value: 2, label: 'What others say about you', trigger: '20' },
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
    {
        id: '20',
        message: 'What kind of persona do you want to see?',
        trigger: '21',
    },
    {
        id: '21',
        options: [
          { value: 1, label: 'Previous manager', trigger: '22' },
          { value: 2, label: 'Worked together but in different teams', trigger: '20' },
          { value: 3, label: 'Worked in the same team', trigger: '5' },
        ],
    },
    {
        id: '22',
        message: '"Paulo transitioned from marketing into product management really well, he has the product mindset of understanding the problem accurately and them moving to the solution."',
        trigger: '23',
    },
    {
        id: '23',
        message: 'Pedro Martinho, Senior PM',
        trigger: '24',
    },
    {
        id: '24',
        options: [
          { value: 1, label: 'Another one', trigger: '25' },
          { value: 2, label: 'Go back', trigger: '4' },
        ],
    },
    {
        id: '25',
        message: '"Paulo is known for always asking the right questions, challenging anyone in the team. His curiosity is sincere and positive. He is dedicated to growth, experimentation and learning - a valuable asset in a fast paced organisation."',
        trigger: '26',
    },
    {
        id: '26',
        message: 'Fernando Amaral, Founder',
        trigger: '27',
    },
    {
        id: '27',
        options: [
          { value: 1, label: 'Another one', trigger: '28' },
          { value: 2, label: 'Go back', trigger: '4' },
        ],
    },
    {
        id: '28',
        message: '"Smart and self learner Paulo challenges others and love being challenged which continuously drive the overall performance of the team to excellence."',
        trigger: '29',
    },
    {
        id: '29',
        message: 'Robin Pernel, Dr Marketing',
        trigger: '30',
    },
    {
        id: '30',
        options: [
          { value: 1, label: 'Another persona', trigger: '21' },
          { value: 2, label: 'Go back', trigger: '4' },
        ],
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