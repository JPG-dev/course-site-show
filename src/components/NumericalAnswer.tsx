"use client"
import { useState, useRef } from 'react';

interface Props {
  backgroundColor: string;
  question: string;
  answer: string;
}

const NumericalAnswer = ({ backgroundColor, question, answer }: Props) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [hasCorrectAnswer, setHasCorrectAnswer] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    setIsSubmitted(true)
    let answerInputValue = inputRef.current?.value;

    if(answerInputValue === answer) {
      answerInputValue = ""
      setIsSubmitted(false)
      setHasCorrectAnswer(true);
      return;
    }
  };

  const resetAnswer = () => {
    setHasCorrectAnswer(false)
  }

  return (
    <div style={{ backgroundColor: backgroundColor }} className='p-8'>
      {hasCorrectAnswer ? <p className='text-3xl text-center'>Well done! <span className='font-extrabold cursor-pointer' onClick={() => resetAnswer()}>click here to try again</span></p> :
      (<>
      <p className='text-3xl font-extrabold text-center mb-4'>{question}</p>
      <input placeholder='Input the answer' className='w-full p-4 text-black' type="text" ref={inputRef} />
      <button className='w-full mt-4 bg-purple-700 p-4 hover:opacity-80 cursor-pointer' onClick={handleSubmit}>Submit</button>
      </>)
      }
      {isSubmitted && !hasCorrectAnswer ? <p className='text-center mt-4'>Incorrect, try again</p> : null}
    </div>
  );
};

export default NumericalAnswer;