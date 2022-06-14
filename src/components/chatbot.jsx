import React, { Component } from 'react';
import Chatbot  from 'react-chatbot-kit';
import config from '../chatbot/config';
import ActionProvider from '../chatbot/ActionProvider';
import './chatbot.css';
import MessageParser from '../chatbot/MessageParser';


export const Chat_bot =()=>{
    return (
        <div className='chatbot'>
            <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            
            />
        </div>
    );
}