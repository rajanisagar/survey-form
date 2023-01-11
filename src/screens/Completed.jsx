import React, { useContext } from "react";
import ContextApp from "../contextApp";

const Completed = () => {
  const { questions, setQestions } = useContext(ContextApp);
  for (let i = 0; i < questions.length; i++) {
    if (questions[i] == 0) {
      questions[i] = "strongly disagree";
    } else if (questions[i] == 1) {
      questions[i] = "disagree";
    } else if (questions[i] == 2) {
      questions[i] = "agree";
    } else if (questions[i] == 3) {
      questions[i] = "strongly agree";
    } else if (questions[i] == 4 || questions[i] - 1) {
      questions[i] = "no answer";
    }
  }

  let arrQuestions = [
    "How do you rate our Service?",
    "Do you enjoy our company’s culture?",
    "how satisfied are you with your in-store experience today?",
    "How likely are you to recommend (insert product or service) to others?",
    "Rate your satisfaction with our team in resolving your issue.",
    "Did you feel that our team answered your inquiry promptly?",
    "Do you agree or disagree that your issue was effectively resolved?",
    "How likely are you to purchase again from us?",
    "How likely are you to return to our website?",
    "How satisfied are you with products?",
    "Please add your age",
    "Please select your geneder",
  ];

  for (let i = 0; i < questions.length; i++) {
    console.log(arrQuestions[i]+":  "+questions[i]);
  }
  
  return (
    <>
      FeedBack Data Submited Successfully
      <br />
      Pleease See data in console
    </>
  );
};

export default Completed;
