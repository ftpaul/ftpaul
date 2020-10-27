import React  from "react"
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Navigation from "../components/navigation/navigation"
import Logo from "../components/navigation/logo"
import SEO from "../components/seo"


const theme = {
  background: '#f5f8fb',
  fontFamily: 'Lato',
  headerBgColor: '#F8B500',
  headerFontColor: '#fff',
  headerFontSize: '1rem',
  botBubbleColor: '#F8B500',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  margin: '0 auto',
};

const steps = [
    {
      id: '1',
      message: 'Hey there 👋🏽',
      trigger: '3',
    },
      {
        id: '3',
        message: 'I am here to let you know more about me and clear any doubts you might have. Let me know how can I help you:',
        trigger: '4',
      },
    {
      id: '4',
      options: [
        { value: 1, label: '▶️ Tell me more about yourself', trigger: '50' },
        { value: 2, label: '▶️ What others say about you', trigger: '20' },
        { value: 3, label: '▶️ Schedule check-in', trigger: '60' },
        { value: 4, label: '▶️ I am done for now', trigger: '70' },
      ],
    },
    {
      id: '5',
      message: 'Wrong answer, try again.',
      trigger: '3',
    },
    {
      id: '70',
      message: 'Thank you for your time! Hope I could help. All the best,',
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
          { value: 2, label: 'Worked together but in different teams', trigger: '31' },
          { value: 3, label: 'Worked in the same team', trigger: '37' },
          { value: 4, label: 'Go back', trigger: '4' },
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
        message: 'Robin Pernel, Director of Marketing',
        trigger: '30',
    },
    {
        id: '30',
        options: [
          { value: 1, label: 'Another persona', trigger: '21' },
          { value: 2, label: 'Go back', trigger: '4' },
        ],
    },
    {
        id: '31',
        message: '"Paulo played a big part in my onboarding at Unbabel and has really influenced the way I approach work early in my career. He leaves no loose ends and always strives to get everyone on the same page."',
        trigger: '32',
    },
    {
        id: '32',
        message: 'Joana Porteiro, Performance Marketing',
        trigger: '33',
    },
    {
        id: '33',
        options: [
          { value: 1, label: 'Another one', trigger: '34' },
          { value: 2, label: 'Go back', trigger: '4' },
        ],
    },
    {
        id: '34',
        message: '"The way Paulo pushes for better organization and processes implementation (right tools, task documentation and ownership, timelines, etc) helps ensure proper alignment and more speed on execution."',
        trigger: '35',
    },
    {
        id: '35',
        message: 'Pedro Ferreira, SEO Manager',
        trigger: '36',
    },
    {
        id: '36',
        options: [
          { value: 1, label: 'Another persona', trigger: '21' },
          { value: 2, label: 'Go back', trigger: '4' },
        ],
    },
    {
      id: '37',
      message: '"Paulo is an ace team player and deeply cares about creating an environment in which everyone can excel. He frequently checks in with the people around him and does what is in his power to support them and remove roadblocks."',
      trigger: '38',
  },
  {
      id: '38',
      message: 'Chris Grabinski, Front-end Developer',
      trigger: '39',
  },
  {
      id: '39',
      options: [
        { value: 1, label: 'Another one', trigger: '40' },
        { value: 2, label: 'Go back', trigger: '4' },
      ],
  },
  {
      id: '40',
      message: '"Focused and objective-driven, he helped deliver faster and better results, keeping timings managed and space for deeper thinking."',
      trigger: '41',
  },
  {
      id: '41',
      message: 'Bruno Silva, Head of Marketing Design',
      trigger: '42',
  },
  {
      id: '42',
      options: [
        { value: 1, label: 'Another persona', trigger: '21' },
        { value: 2, label: 'Go back', trigger: '4' },
      ],
  },
  {
    id: '50',
    message: 'I am a Product Manager with an experienced background in product, marketing, and management.',
    trigger: '51',
  },
  {
    id: '51',
    message: 'My aim is to to impact individuals by providing experiences that drive change and add value to them.',
    trigger: '52',
  },
  {
    id: '52',
    options: [
      { value: 1, label: 'How do you put that into practice? ', trigger: '53' },
      { value: 2, label: 'Go back', trigger: '4' },
    ],
  },
  {
    id: '53',
    message: '1️⃣ Challenging myself and people around me',
    trigger: '54',
  },
  {
    id: '54',
    message: '2️⃣ Empowering people and teams to be at their best',
    trigger: '55',
  },
  {
    id: '55',
    message: '3️⃣ Giving them purpose and perspective',
    trigger: '80',
  },
  {
    id: '60',
    message: 'I am not great a schedule time yet, but take this link to Calendly:',
    trigger: '61',
  },
  {
    id: '61',
    component: (
      <a href="https://calendly.com/ftpaulio/let-s-meet?month=2020-08" rel="noreferrer" target="_blank" class="bg-transparent hover:bg-yellow-500 text-gray-400 font-semibold hover:text-white py-2 px-6 border border-yellow-500 hover:border-transparent rounded h-16 w-48 mx-auto block">Schedule check-in date with Calendly</a>
    ),
    trigger: '62',
  },
  {
    id: '62',
    message: 'Let me know how can I help you more:',
    trigger: '4',
  },
  {
    id: '80',
    options: [
      { value: 1, label: 'What are your values?', trigger: '63' },
      { value: 2, label: 'Go back', trigger: '4' },
    ],
  },
  {
    id: '63',
    message: 'Glad you ask! Here are they:',
    trigger: '64',
  },
  {
    id: '64',
    message: '👨🏻‍🎤People-driven | 🤝Collaborative | 🧭 Focused | ⛳️ Goal-oriented | 🧘🏽‍♂️Zen | 🕵🏻‍♀️Knowledge seeker',
    trigger: '90',
  },
  {
    id: '90',
    options: [
      { value: 1, label: 'Thanks! What do you have more?', trigger: '4' },
    ],
  },
]
 


const ChatbotPage = () => { 
  
  
  const seo  = {
    title: "Paulo Teixeira Chatbot", 
    description: "Built a simple chatbot to help people interact with a virtual and limited version of myself!"
  }
  
  
  return (
      
    <> 

      <SEO title={seo.title} description={seo.description} />

      <Navigation simplified={true} />

      <div className="flex flex-wrap max-w-screen-lg mx-auto">
        <div className="lg:w-1/2 md:w-1/2 sm:w-full xs:w-full sm:p-6 xs:p-6">
          
          <div className="align-middle md:my-48 sm:my-0 xs:my-0">
            <div className="mx-auto">
              <Logo />
              <p className="lg:mr-24 sm:mr-24 xs:mr-0 text-base leading-6 text-gray-500">Built a simple chatbot to help people interact with a virtual and limited version of myself. Used a react component for the chatbot.</p>
              {/* (https://github.com/LucasBassetti/react-simple-chatbot) */}
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 sm:w-full xs:w-full sm:p-6 xs:p-6">
          <div className="lg:mt-12 lg:ml-12 sm:mt-0 sm:ml-0 xs:mt-0 xs:ml-0">
            <ThemeProvider theme={theme}>
              <ChatBot steps={steps} />
            </ThemeProvider>
          </div>
        </div>
      </div>

    </>

    )
  }
  

  
  export default ChatbotPage