import { render } from "@testing-library/react";
import React, { Component } from 'react';
import axios from 'axios';
import Loan from "../components/Quiz/loan";
import Leave from "../components/Quiz/leave";



class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello!");
      this.addMessageToState(message);
    };
  //-------------------------------------------------------------------------
    handleLoanProcess = () => {
      const message = this.createChatBotMessage(
        "Sure..Please wait....",
        //{
         // widget: "loan",
        //}
       
      );
      this.addMessageToState(message);

      setTimeout(function(){render(<Loan />);}, 3000);
      
  
      
      
      

    };
  //------------------------------------------------------------------------------

  handleAttendance1 = (lowercasedMessage) => {
    
    var current_time = new Date();   //Our current time
    var standard_time = new Date();  //it's a predefined time

    standard_time.setHours(8,0,0);


    


    

    if(current_time>standard_time){  
      const message = this.createChatBotMessage("Attendace cannot be Marked!");

      this.addMessageToState(message); //display the message
    }


    else if(lowercasedMessage==false){
       const message = this.createChatBotMessage("Attendace is already Marked!");

       this.addMessageToState(message); //display the message
        }


    else{
      const message = this.createChatBotMessage("Give me your user ID");
      this.addMessageToState(message)

   
      /*if(lowercasedMessage!=null){
        axios.post('/profile/attendance',{lowercasedMessage:lowercasedMessage}).
        then(response=>{
          if(response.data.status==true){
             const message = this.createChatBotMessage("I marked attendance");
             this.addMessageToState(message);

          }
          else{
            const message= this.createChatBotMessage("Your ID is wrong");
            this.addMessageToState(message);
          }
        })
        .catch(error=>{
          console.log(error);
        });
      }*/
     
       }



    //setTimeout(function(){render(<Loan />);}, 3000);
    };
  //------------------------------------------------------------------

  handleAttendance2=()=>{
    const message = this.createChatBotMessage("marked");
    this.addMessageToState(message);
  }


  //----------------------------------------------------------------------
  handleLeave = () =>{
    
    const message = this.createChatBotMessage("Please wait..");
    this.addMessageToState(message);
    setTimeout(function(){render(<Leave />);}, 3000);

  };

  //----------------------------------------------------------------------

   tryAgain = () =>{
     const message = this.createChatBotMessage("It's unclear, Try again");
     this.addMessageToState(message);
   }






  //------------------------------------------------------------------------------
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;