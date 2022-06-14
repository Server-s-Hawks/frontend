import React, { Component } from 'react';


class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hello")||lowercase.includes("hi")||lowercase.includes("hey")) {
        this.actionProvider.greet();
      }
      
  
      else if (lowercase.includes("I need a loan") || lowercase.includes("need a loan")) {
        this.actionProvider.handleLoanProcess();
      }
      else if(lowercase.includes("mark my attendance") || lowercase.includes("mark attendance" || lowercase.includes("attendance"))){
        this.actionProvider.handleAttendance(lowercase);
      }
      else if(lowercase.includes("leave")||lowercase.includes("I want to leave")||lowercase.includes("need to leave")){
        this.actionProvider.handleLeave();
      }

      else {
        this.actionProvider.tryAgain();
      }
    }
  }
  
  export default MessageParser;