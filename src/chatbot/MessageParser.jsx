import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react';


class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }

    
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
       
      let attendanceStatus = null;

      //const[attendanceMarked, setattendanceMarked]=useState(false);
      
      
      

  
      if (lowercase.includes("hello")||lowercase.includes("hi")||lowercase.includes("hey")) {
        this.actionProvider.greet();
      }
      
  
      else if (lowercase.includes("I need a loan") || lowercase.includes("need a loan")) {
        this.actionProvider.handleLoanProcess();
      }
      else if(lowercase.includes("mark my attendance") || lowercase.includes("mark attendance" || lowercase.includes("attendance"))){
        this.actionProvider.handleAttendance1(lowercase);

        while(!lowercase);

        let request={
          userid:lowercase
        }
        axios.post('http://localhost:5000/profile/attendance',request)
        .then(
          response=>{
            if(response.data.status==true){
              //attendanceStatus=true;
              this.actionProvider.handleAttendance2();

            }

            else{
              this.actionProvider.handleAttendance1(false);
            }
          }
        );


        
    

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