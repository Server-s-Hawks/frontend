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
  
      if (lowercase.includes("I need a loan") || lowercase.includes("need a loan")) {
        this.actionProvider.handleLoanProcess();
      }
    }
  }
  
  export default MessageParser;