import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
//-----------------------------------------------------
//import { Loan } from "../components/Quiz/loan";
import { render } from "@testing-library/react";

const config = {
  botName: "Chatbot"

  ,

  initialMessages: [
    createChatBotMessage(`Hello, What do you need`, {
      widget: "options",
    }),]
    
    ,

  widgets: [
    { //Widget 1
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    }
    ,
    {//widget 2
      widgetName: "loan",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is the amount?",
            answer:
              12000,
            id: 1,
          },
          {
            question: "When do you nee to recieve?",
            answer:
              "Good",
            id: 2,
          },
        ],
      },
    }
    ,
    //{
      //widgetName: "loan",
     // widgetFunc: ()=>{render(<Loan/>)} 
   // }
  ],


};

export default config;