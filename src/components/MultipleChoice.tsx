"use client"
import { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: string[];
  answer: string | null;
}

interface Props {
  backgroundColor: string;
  questions: Question[];
}

const MultipleChoice = ({ backgroundColor, questions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleOptionSelect = (selectedOption: string) => {
    const updatedAnswers = [...answers, selectedOption];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered
      // Show "Well done" message
      
    }
  };

  const resetQuestions = () => {
    setAnswers([])
    setCurrentQuestionIndex(0)
  }

  let result = 0;
  answers.forEach((answer, index) => {
    if (answer === questions[index].answer) {
      result = result + 1;
    }
  })

  return (
    <div style={{ backgroundColor: backgroundColor }} className='p-8'>
      {answers.length != questions.length ? questions.map((question, index) => (
        index === currentQuestionIndex && (
          <div key={question.id}>
            <div className=''>{`Question ${currentQuestionIndex + 1} of ${questions.length}`}</div>
            <div className='text-3xl font-extrabold'>{question.text}</div>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li onClick={() => handleOptionSelect(option)} key={optionIndex} className='flex gap-6 items-center py-4 px-0 hover:bg-purple-900 cursor-pointer'>
                  <div className='checkbox hover:bg-purple-500' />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      ))
      : 
      <>
      <p className='text-center'>Well done, here are your results {`${result}/${questions.length}`} </p>
      <p className='text-center font-extrabold cursor-pointer' onClick={() => resetQuestions()}>Click here to try again</p>
      </>
      }
    </div>
  );
}

export default MultipleChoice;
