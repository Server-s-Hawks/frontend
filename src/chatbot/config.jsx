import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "Chatbot",
  initialMessages: [
    createChatBotMessage(`Hello. What do you need`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "loan",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is the amount?",
            answer:
              "12000",
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
    },
  ],
};

export default config;